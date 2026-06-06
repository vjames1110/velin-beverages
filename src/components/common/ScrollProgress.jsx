import { useEffect, useState } from "react";
import "./ScrollProgress.css";

export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const updateScroll = () => {

      const currentScroll =
        window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll(
        (currentScroll / height) * 100
      );
    };

    window.addEventListener(
      "scroll",
      updateScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );

  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}