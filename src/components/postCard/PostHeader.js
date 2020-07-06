import React from "react";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import DateFormatter from "../DateFormatter";

const renderParagraphWithFormattedDate = (formattedDate, props) => (
  <p {...props}>{formattedDate}</p>
);

const PostHeader = ({ user, createAt }) => {
  return (
    <figure className="post-info">
      <ProfilePhotoMiniature userPhotoSrc={user.photo} />
      <figcaption>
        <h4>
          {user.name.first} {user.name.last}
        </h4>
        <DateFormatter
          date={createAt}
          children={renderParagraphWithFormattedDate}
        />
      </figcaption>
    </figure>
  );
};

export default PostHeader;
