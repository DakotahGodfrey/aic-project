import { useState, useEffect } from 'react';

const useViewport = () => {
  //track state of window width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // declare an eventHandler for widow resize events which updates the width state.
    const handleWindowResize = () => setWidth(window.innerWidth);
    //add the event listener to the window object
    window.addEventListener('resize', handleWindowResize);
    // cleanup event listener when hook is destroyed;
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  //return width state;
  return { width };
};

export default useViewport;
