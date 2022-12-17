import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import DateFormatter from "../DateFormatter";
import PostHeaderDropdown from "./PostHeaderDropdown";

const renderParagraphWithFormattedDate = (formattedDate, props) => (
  <p {...props}>{formattedDate}</p>
);

const PostHeader = ({ id, user, creationDate }) => {
  const loggedUserId = useUserContext().user.uid;
  const loggedUserIsThePostOwner = loggedUserId === user.uid;

  return (
    <div className="post-info">
      <ProfilePhotoMiniature userPhotoSrc={user.photo} />
      <div className="post-creation-info">
        <h4>
          {user.name.first} {user.name.last}
        </h4>
        <DateFormatter
          date={new Date(creationDate)}
          children={renderParagraphWithFormattedDate}
        />
      </div>
      {loggedUserIsThePostOwner ? <PostHeaderDropdown postId={id} /> : null}
    </div>
  );
};

export default PostHeader;
