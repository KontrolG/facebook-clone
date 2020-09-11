import Post from "./postModel";
import Storage from "./storageModel";
import getFileExtension from "./getFileExtension";

const createPost = async ({ mediaFiles, ...restPostProperties }) => {
  const newPostReference = await Post.getNewItemReference({
    ...restPostProperties
  });
  await updatePostMediaFiles(mediaFiles, newPostReference);
  return Post.getCreatedItem(newPostReference);
};

const updatePostMediaFiles = async (mediaFiles, postReference) => {
  const hasMediaFiles = mediaFiles.length > 0;
  if (hasMediaFiles) {
    await setPostMediaFiles(postReference, mediaFiles);
  }
};

const setPostMediaFiles = (postReference, mediaFiles) => {
  const mediaFilesReference = postReference.child("mediaFiles");
  const uploadOperations = mediaFiles.map(
    addPostMediaFile(mediaFilesReference)
  );
  return Promise.all(uploadOperations);
};

const addPostMediaFile = mediaFilesReference => async mediaFile => {
  const fileReference = mediaFilesReference.push();
  const uploadedFile = await getUploadedFile(fileReference, mediaFile);
  const { url } = uploadedFile;
  return fileReference.set({ url });
};

const getUploadedFile = ({ key }, mediaFile) => {
  const fileName = getFileNameFromKey(key, mediaFile);
  return Storage.saveFile(`posts-files/${fileName}`, mediaFile);
};

const getFileNameFromKey = (key, { name }) => {
  const fileExtension = getFileExtension(name);
  return `${key}.${fileExtension}`;
};

/* For testing purpuses */
const removePosts = () => {
  Post.reference.remove();
};

const postWithMediaFiles = Object.assign({}, Post, { createPost });

export default postWithMediaFiles;
