"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

import { useState } from "react";

const MediaButtonGroup = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const skipBack = () => { /* Skip back 10s */ };
  const skipForward = () => { /* Skip forward 10s */ };
  const toggleMute = () => setVolume(volume > 0 ? 0 : 75);

  return (
    <ButtonGroup>
      <Button variant="outline" size="icon" title="Previous" onClick={skipBack}>
        <SkipBack />
      </Button>
      <Button
        variant={isPlaying ? "default" : "outline"}
        size="icon"
        onClick={togglePlay}
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause /> : <Play />}
      </Button>
      <Button variant="outline" size="icon" title="Next" onClick={skipForward}>
        <SkipForward />
      </Button>
      <Button variant="outline" size="icon" onClick={toggleMute}>
        <Volume2 className={volume === 0 ? "opacity-50" : "opacity-100"} />
      </Button>
    </ButtonGroup>
  );
};

export default MediaButtonGroup;
