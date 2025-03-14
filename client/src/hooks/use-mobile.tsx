import { useState, useEffect } from "react";

// Hook to detect if the current viewport is mobile
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set mobile state based on viewport width
      setIsMobile(window.innerWidth < 768);
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away to initialize size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return isMobile;
}