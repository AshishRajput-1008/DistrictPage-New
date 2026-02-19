interface ControlsProps {
  playing: boolean;
  muted: boolean;
  progress: number;
  speed: number;
  duration: number;
  togglePlay: () => void;
  toggleMute: () => void;
  seek: (s: number) => void;
  changeSpeed: () => void;
}

export function VideoControls({
  playing,
  muted,
  progress,
  speed,
  togglePlay,
  toggleMute,
  seek,
  changeSpeed,
}: ControlsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent z-40">
      {/* Progress */}
      <div className="relative h-[4px] bg-white/30 rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-white rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative flex items-center text-white mt-3 h-14">
        {/* Speed */}
        <button onClick={changeSpeed} className="w-10 text-sm">
          {speed}x
        </button>

        {/* -5 */}
        <button onClick={() => seek(-5)}>⏪</button>

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/25"
        >
          {playing ? "⏸" : "▶️"}
        </button>

        {/* +5 */}
        <button onClick={() => seek(5)}>⏩</button>

        {/* Mute */}
        <button onClick={toggleMute}>
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
}
