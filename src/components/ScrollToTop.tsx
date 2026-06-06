import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed bottom-6 right-6 z-[999]
        p-3 rounded-full
        bg-purple/20 backdrop-blur-md
        border border-purple/30
        text-white
        hover:bg-purple/40
        transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
    >
      <FiArrowUp />
    </button>
  );
}