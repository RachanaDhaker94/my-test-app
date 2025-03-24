import React from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleResize = useThrottle(() => {
    setWidth(window.innerWidth);
  }, 200);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return function cleanup() {
      console.log("xy");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

const useThrottle = (callback, limit) => {
  const lastcall = React.useRef(0);
  return function (...arg) {
    let now = new Date().getTime();
    console.log("xyzs", now - lastcall.current);
    if (now - lastcall.current >= limit) {
      console.log("sd", now - lastcall.current);
      lastcall.current = now;
      callback(...arg);
    }
  };
};


const useScrollPage = ()=>{
    const [scrollPosition, setScrollPosition] = React.useState(0);
}