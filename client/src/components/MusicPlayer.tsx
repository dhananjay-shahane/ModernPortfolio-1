
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Play, Pause, SkipBack, SkipForward, Music2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Track {
  url: string;
  name: string;
  imageUrl: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [tracks, setTracks] = useState<Track[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize Spotify and fetch tracks
    const fetchTracks = async () => {
      try {
        const response = await fetch('/api/spotify/tracks');
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
        // Fallback to default tracks if API fails
        setTracks([
          {
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            name: "SoundHelix Song 1",
            imageUrl: "https://picsum.photos/200/200"
          },
          {
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            name: "SoundHelix Song 2",
            imageUrl: "https://picsum.photos/200/200"
          },
          {
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            name: "SoundHelix Song 3",
            imageUrl: "https://picsum.photos/200/200"
          }
        ]);
      }
    };

    fetchTracks();
  }, []);

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
    setCurrentSongIndex((prev) => (prev + 1) % tracks.length);
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  const currentTrack = tracks[currentSongIndex];

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
        <div className="flex flex-col items-center gap-4 py-6">
          {currentTrack && (
            <>
              <img 
                src={currentTrack.imageUrl} 
                alt={currentTrack.name}
                className="w-48 h-48 rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium">{currentTrack.name}</h3>
            </>
          )}
          <audio
            ref={audioRef}
            src={currentTrack?.url}
            onEnded={playNext}
          />
          <div className="flex items-center gap-4">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MusicPlayer;
