import { useEffect, useCallback, useState } from 'react';

export const useAutoScroll = (onNext, items, isPaused, interval = 5000) => {
  useEffect(() => {
    if (!items || items.length === 0 || isPaused) return;
    
    const autoScrollInterval = setInterval(() => {
      onNext();
    }, interval);

    return () => clearInterval(autoScrollInterval);
  }, [items, isPaused, onNext, interval]);
};

export const useCarouselPause = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);
  
  return {
    isPaused,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useAutoScroll;
