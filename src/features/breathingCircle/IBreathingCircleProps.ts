export interface IBreathingCircleProps {
  className?: string;
  isBreathing: boolean;
  isBreathingIn: boolean;
  onStartBreathing: () => void;
  onStopBreathing: () => void;
  width: string;
}
