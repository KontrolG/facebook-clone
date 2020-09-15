import React from "react";
import Multimedia from "../Multimedia";
import getFileMediaType from "../../utils/getFileMediaType";

const MediaItem = ({ item, isLastItem, hiddenItemsCount, children }) => {
  const itemFileType = getFileMediaType(item.type);
  const hasMultipleSiblings = hiddenItemsCount > 3;

  const multimedia = (
    <Multimedia
      fileMediaType={itemFileType}
      sourceUrl={item.url}
      className="media-item"
    />
  );

  if (isLastItem && hasMultipleSiblings) {
    return <li data-hidden-items={`+${hiddenItemsCount}`}>{multimedia}</li>;
  }

  return <li>{multimedia}</li>;
};

export default MediaItem;
