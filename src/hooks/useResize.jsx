import { useEffect, useState } from 'react';

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setTimeout(() => {
        setWidth(event.target.innerWidth);
      }, 1000);
    };
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return width;
}

export default useResize;
