
import { Link } from "wouter";
import { Heart, ArrowUp, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";

const quotes = [
  { text: "In the midst of chaos, there is also opportunity", author: "Sun Tzu" },
  { text: "Where there is dharma, there is victory", author: "Mahabharata" },
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
      <div className="container px-4 py-6">
        {/* Quote Section */}
        <div className="mb-6 text-center">
          <p className="text-lg italic text-muted-foreground">"{randomQuote.text}"</p>
          <p className="mt-2 text-sm">- {randomQuote.author}</p>
        </div>

        {/* Music Player */}
        <div className="flex justify-center items-center mb-6">
          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            className="w-12 h-12 rounded-full"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Cultural Imagery */}
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Mandala_01.svg"
              alt="Indian Mandala"
              className="h-24 opacity-60"
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
