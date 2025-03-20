
import { useState, useRef } from "react";
import { Link } from "wouter";
import { Button } from "./button";
import { Play, Pause, Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const quotes = [
  { text: "The journey of a thousand miles begins with one step", author: "Lao Tzu" },
  { text: "Where there is love there is life", author: "Mahatma Gandhi" },
  { text: "In a gentle way, you can shake the world", author: "Mahatma Gandhi" }
];

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

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
            onEnded={() => setIsPlaying(false)}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/about" className="hover:text-primary">About</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col space-y-2">
              <p className="flex items-center justify-center md:justify-end">
                <Mail className="h-4 w-4 mr-2" />
                contact@example.com
              </p>
              <p>123 Main Street</p>
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Cultural Imagery */}
        <div className="border-t pt-8">
          <div className="flex justify-center">
            <img
              src="/indian-culture.png"
              alt="Indian Cultural Art"
              className="h-32 w-auto opacity-80"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t text-center">
          <p className="flex items-center justify-center text-sm text-muted-foreground">
            Made with <Heart className="inline h-4 w-4 mx-1 text-red-500" /> in India
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Celebrating Indian Culture and Heritage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
