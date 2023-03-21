import { useEffect, useState } from "react";

export function useGoUp() {
  const [ScrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener('scroll' , handleScroll);
    
    return () =>  window.removeEventListener('scroll' , handleScroll)


  },[]);
  return ScrollUp;
}
