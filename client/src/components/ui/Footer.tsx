import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const quotes = [
  {
    text: "In every walk with nature one receives far more than he seeks.",
    author: "John Muir",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

const Footer = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bottom-0 w-full border-t dark:bg-gray-900 bg-gray-100 text-black dark:text-white h-full min-h-[50vh] py-16 overflow-hidden">
      {/* <div className="absolute inset-0 bottom-0 blur-[5px] bg-[url('https://www.wizardshock.xyz/images/level-3.gif')] bg-center bg-cover"></div> */}

      <div className="container max-w-6xl mx-auto px-6 py-10 -z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Quotes Section */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.6 }}
                className="text-lg font-medium italic dark:text-white text-black"
              >
                "{quotes[quoteIndex].text}"
                <p className="mt-2 text-sm dark:text-gray-400">
                  - {quotes[quoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Spotify Music Feature with Enhanced UI */}
          <div className="flex justify-end">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                alt="Spotify Logo"
                className="h-10 w-10"
              />
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
                width="250"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Image Section */}

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Dhananjay Shahane | All Rights Reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
