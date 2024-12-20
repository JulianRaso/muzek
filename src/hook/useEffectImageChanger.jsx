import { useEffect } from "react";

export default function useEffectImageChanger(
  currentPst,
  imageLength,
  setCurrentPst,
  time
) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPst != imageLength - 1) {
        setCurrentPst(() => currentPst + 1);
      }
      if (currentPst == imageLength - 1) {
        setCurrentPst(0);
      }
    }, time);
    return () => clearInterval(interval);
  }, [currentPst, imageLength, setCurrentPst, time]);
}
