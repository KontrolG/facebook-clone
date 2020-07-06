import { useState } from "react";

const useDragAndDrop = (
  dafaultValueForIsDragging = false,
  { dropEffect = "copy", allowedTypes = [] } = {}
) => {
  const [isDragging, setIsDragging] = useState(dafaultValueForIsDragging);

  const changeIsDragging = event => {
    event.preventDefault();
    checkDraggedItemsValidity(event);
  };

  const checkDraggedItemsValidity = ({ dataTransfer }) => {
    if (hasInvalidItems(dataTransfer)) {
      showUnallowedDragCursor(dataTransfer);
    } else {
      activeDraggingEffect(dataTransfer);
    }
  };

  const hasInvalidItems = ({ items }) =>
    Array.from(items).some(hasInvalidFormat);

  const hasInvalidFormat = ({ kind, type }) => {
    const isFile = kind === "file";
    return !isFile || !hasAllowedType(type);
  };

  const hasAllowedType = type => {
    const allowedTypesIsEmpty = allowedTypes.length === 0;
    if (allowedTypesIsEmpty) return true;
    const [fileType] = type.split("/");
    return allowedTypes.includes(fileType);
  };

  const showUnallowedDragCursor = dataTransfer =>
    (dataTransfer.dropEffect = "none");

  const activeDraggingEffect = dataTransfer => {
    setIsDragging(true);
    dataTransfer.dropEffect = dropEffect;
  };

  const getDraggedFiles = event => {
    finishDrag(event);
    console.log(event.dataTransfer.items[0]);
    return event.dataTransfer.files;
  };

  const finishDrag = event => {
    event.preventDefault();
    setIsDragging(false);
  };

  return [isDragging, changeIsDragging, finishDrag, getDraggedFiles];
};

export default useDragAndDrop;
