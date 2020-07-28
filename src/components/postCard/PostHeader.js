import React from "react";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import DateFormatter from "../DateFormatter";
import PostHeaderDropdown from "./PostHeaderDropdown";

const renderParagraphWithFormattedDate = (formattedDate, props) => (
  <p {...props}>{formattedDate}</p>
);

const PostHeader = ({ user, creationDate }) => {
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
      <PostHeaderDropdown />
    </div>
  );
};

export default PostHeader;
