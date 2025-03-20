
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

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
    <div className="fixed right-4 top-20 z-50 flex items-center gap-2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-lg border">
      <audio
        ref={audioRef}
        src={songs[currentSongIndex]}
        onEnded={playNext}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={playPrevious}
        className="rounded-full w-8 h-8"
      >
        <SkipBack className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="rounded-full w-10 h-10"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={playNext}
        className="rounded-full w-8 h-8"
      >
        <SkipForward className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MusicPlayer;
