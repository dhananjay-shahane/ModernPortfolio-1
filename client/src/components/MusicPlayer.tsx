
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Play, Pause, SkipBack, SkipForward, Music2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const songs = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
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

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed right-4 top-20 z-50 h-10 w-10 rounded-full bg-background/80 shadow-lg backdrop-blur-lg"
        >
          <Music2 className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Music Player</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center gap-4 py-6">
          <audio
            ref={audioRef}
            src={songs[currentSongIndex]}
            onEnded={playNext}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={playPrevious}
            className="rounded-full h-12 w-12"
          >
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={togglePlay}
            className="rounded-full h-16 w-16"
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={playNext}
            className="rounded-full h-12 w-12"
          >
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MusicPlayer;
