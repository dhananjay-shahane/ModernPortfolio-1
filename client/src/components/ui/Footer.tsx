import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Play, Pause, Heart } from "lucide-react";

const quotes = [
  { text: "In every walk with nature one receives far more than he seeks", author: "John Muir" },
  { text: "The journey of a thousand miles begins with one step", author: "Lao Tzu" }
];

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="relative mt-auto border-t bg-background">
      <div className="container px-4 py-8">
        {/* Quote Section */}
        <div className="mb-8 text-center">
          <p className="text-xl italic text-muted-foreground">"{randomQuote.text}"</p>
          <p className="mt-2 text-sm font-medium">- {randomQuote.author}</p>
        </div>

        {/* Music Player */}
        <div className="flex justify-center items-center mb-8">
          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            className="w-12 h-12 rounded-full hover:bg-accent"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
        </div>

        {/* Main Footer Content */}
        <div className="flex justify-center mb-8">
          <div className="space-x-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>

        {/* Cultural Imagery */}
        <div className="mt-8 border-t pt-8">
          <div className="flex justify-center">
            <img
              src="/indian-culture.png"
              alt="Indian Cultural Art"
              className="h-32 w-auto opacity-80"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Made with <Heart className="inline h-4 w-4 text-red-500" /> using React & Tailwind</p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;