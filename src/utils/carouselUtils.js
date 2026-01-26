export const getPreviousIndex = (currentIndex, arrayLength) => {
  if (!arrayLength || arrayLength === 0) return 0;
  const newIndex = currentIndex - 1;
  return newIndex < 0 ? arrayLength - 1 : newIndex;
};

export const getNextIndex = (currentIndex, arrayLength) => {
  if (!arrayLength || arrayLength === 0) return 0;
  return (currentIndex + 1) % arrayLength;
};

export const getVisibleItems = (items, startIndex, count = 5) => {
  if (!items || items.length === 0) return [];
  
  const visible = [];
  for (let i = 0; i < count; i++) {
    const index = (startIndex + i) % items.length;
    visible.push({
      ...items[index],
      position: i,
    });
  }
  return visible;
};
