import React from "react";

const MediaItem = ({ item, isLastItem, hiddenItemsCount, children }) => {
  const image = <img src={item.url} />;
  const hasMultipleSiblings = hiddenItemsCount > 3;
  if (isLastItem && hasMultipleSiblings) {
    return <li data-hidden-items={`+${hiddenItemsCount}`}>{image}</li>;
  }
  return <li>{image}</li>;
};

export default MediaItem;
