import { useEffect, useState } from "react";
import { debounceRaf } from "../helper/debounce";

export const useResize = (widtch) => {
  const [isLaptop, setIsLaptop] = useState(false);

  const hadleResize = () => {
    if (document.documentElement.clientWidth < widtch) {
      setIsLaptop(true);
    } else {
      setIsLaptop(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(hadleResize);
    debounceResize();
    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, [isLaptop]);

  return isLaptop;
};
