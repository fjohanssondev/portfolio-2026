"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AudioLinesIcon } from "@/components/icons/audio-icon";
import { MusicInfo } from "@/types";

export function CurrentlyPlaying() {
  const [info, setInfo] = useState<MusicInfo | null>(null);

  useEffect(() => {
    let timeoutID: NodeJS.Timeout | null = null;

    const getCurrentSong = async () => {
      const res = await fetch("/api/spotify/now-playing");
      const data: MusicInfo = await res.json();

      const timeRemaining = data.duration - data.progress;

      setInfo(data);

      timeoutID = setTimeout(() => getCurrentSong(), timeRemaining);
    };

    getCurrentSong();

    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, []);

  if (!info?.isPlaying) {
    return (
      <div className="flex items-center space-x-2">
        <AudioLinesIcon size={18} />
        <p className="text-sm">Not listening to any music right now</p>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <AudioLinesIcon size={18} />
      <p className="text-sm">
        Currently Listening to:{" "}
        <Link
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href={info.url}
        >
          {info.artist.map((artist) => artist.name).join(", ")} - {info.title}
        </Link>
      </p>
    </div>
  );
}
