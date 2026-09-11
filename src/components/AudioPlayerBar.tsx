import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, X } from 'lucide-react';
import { audioEngine, type AudioState } from '../utils/audioSpeech';
import type { Concept } from '../types/curriculum';

interface AudioPlayerBarProps {
  onOpenConcept: (concept: Concept) => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ onOpenConcept }) => {
  const [audioState, setAudioState] = useState<AudioState>(audioEngine.getState());
  const activeConcept = audioEngine.getActiveConcept();

  useEffect(() => {
    return audioEngine.subscribe((state) => {
      setAudioState(state);
    });
  }, []);

  if (!activeConcept && !audioState.isPlaying && !audioState.isPaused) {
    return null;
  }

  const speedOptions = [0.8, 1.0, 1.25, 1.5];

  const handleCycleSpeed = () => {
    const currentIndex = speedOptions.indexOf(audioState.speed);
    const nextSpeed = speedOptions[(currentIndex + 1) % speedOptions.length];
    audioEngine.setSpeed(nextSpeed);
  };

  return (
    <div className="fixed bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl">
      <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-[#0c0d12]/95 px-4 sm:px-5 py-2.5 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
        {/* Left: Active Concept Info */}
        <div 
          onClick={() => activeConcept && onOpenConcept(activeConcept)}
          className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer group"
        >
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#c48b76]">
            <Volume2 className="h-4 w-4 animate-pulse" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono tracking-wider text-[#c48b76]">
                BRIEFING #{activeConcept?.globalIndex}
              </span>
              <span className="hidden sm:inline text-[10px] text-stone-500">• Audio Stream</span>
            </div>
            <p className="font-sans text-xs sm:text-sm font-medium text-white truncate group-hover:text-[#f4f4f6] transition-colors">
              {activeConcept?.title}
            </p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            onClick={() => audioEngine.prev()}
            className="rounded-full p-1.5 text-stone-400 hover:text-white transition-colors hidden sm:block cursor-pointer"
            title="Previous briefing"
          >
            <SkipBack className="h-4 w-4" />
          </button>

          {audioState.isPlaying ? (
            <button
              onClick={() => audioEngine.pause()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-stone-200 transition-all cursor-pointer"
              title="Pause audio"
            >
              <Pause className="h-4 w-4 fill-current" />
            </button>
          ) : (
            <button
              onClick={() => audioEngine.resume()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-stone-200 transition-all cursor-pointer"
              title="Resume audio"
            >
              <Play className="h-4 w-4 fill-current ml-0.5" />
            </button>
          )}

          <button
            onClick={() => audioEngine.next()}
            className="rounded-full p-1.5 text-stone-400 hover:text-white transition-colors hidden sm:block cursor-pointer"
            title="Next briefing"
          >
            <SkipForward className="h-4 w-4" />
          </button>

          {/* Speed Toggle */}
          <button
            onClick={handleCycleSpeed}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-mono font-medium text-stone-300 hover:bg-white/10 transition-colors cursor-pointer"
            title="Adjust playback speed"
          >
            {audioState.speed}x
          </button>

          {/* Stop / Close */}
          <button
            onClick={() => audioEngine.stop()}
            className="rounded-full p-1.5 text-stone-500 hover:text-stone-200 transition-colors cursor-pointer"
            title="Close player"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
