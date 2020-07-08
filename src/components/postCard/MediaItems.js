import React from "react";

const MediaItem = ({ isLastItem, hiddenItemsCount, children }) => {
  if (isLastItem) {
    return <li data-hidden-items={`+${hiddenItemsCount}`}>{children}</li>;
  }
  return <li>{children}</li>;
};

const getMediaItems = items => {
  const [visibleItems, hiddenItemsCount] = splitVisibleItems(items);

  const toMediaItem = (item, index, items) => {
    const isLastItem = index === (items.length - 1);
    const imgElement = <img src={item} />;
    return (
      <MediaItem {...{ isLastItem, hiddenItemsCount }}>{imgElement}</MediaItem>
    );
  };

  return visibleItems.map(toMediaItem);
};

const splitVisibleItems = items => {
  const visibleItems = items.slice(0, 4);
  const hiddenItemsCount = items.slice(4).length;
  return [visibleItems, hiddenItemsCount];
};

const MediaItems = ({ items }) => {
  const mediaItems = getMediaItems(items);
  const hasMultipleItems = items.length >= 3;
  return (
    <ul className={hasMultipleItems ? "multiple-items" : ""}>{mediaItems}</ul>
  );
};

export default MediaItems;
