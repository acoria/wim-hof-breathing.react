export interface IPlayCircleProps {
  className?: string;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: ()=>void;
  width: string;
}
