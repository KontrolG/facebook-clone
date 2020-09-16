import firebase from "./init";
import "firebase/storage";

const storage = firebase.storage();
const storageReference = storage.ref();

const storageModel = {
  storageReference,
  async saveFile(fileName, file) {
    const fileReference = storageReference.child(fileName);
    await fileReference.put(file);
    fileReference.url = await fileReference.getDownloadURL();
    return fileReference;
  }
};

export default storageModel;
