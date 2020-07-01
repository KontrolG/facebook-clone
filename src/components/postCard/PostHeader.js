import React from "react";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";

const getTimeLapsedFromDate = date => {
  const timeLapsed = getTimeDifference(date);
  console.log(timeLapsed / (60 * 60 * 24));
};

const getTimeDifference = date => Date.now() - date;

const PostHeader = ({ user, createAt = Date.now() }) => {
  const timeLapsed = getTimeLapsedFromDate(createAt);
  return (
    <figure className="post-info">
      <ProfilePhotoMiniature userPhotoSrc={user.photo} />
      <figcaption>
        <h4>
          {user.name.first} {user.name.last}
        </h4>
        <p>{createAt.toLocaleString()}</p>
      </figcaption>
    </figure>
  );
};

export default PostHeader;
