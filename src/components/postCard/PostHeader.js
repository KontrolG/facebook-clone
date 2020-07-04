import React from "react";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import DateFormatted from "../DateFormatted";

const PostHeader = ({ user, createAt }) => {
  return (
    <figure className="post-info">
      <ProfilePhotoMiniature userPhotoSrc={user.photo} />
      <figcaption>
        <h4>
          {user.name.first} {user.name.last}
        </h4>
        <DateFormatted date={createAt} />
      </figcaption>
    </figure>
  );
};

export default PostHeader;
