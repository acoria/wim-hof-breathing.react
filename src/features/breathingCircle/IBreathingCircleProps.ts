export interface IBreathingCircleProps {
  className?: string;
  breathDurationInMillis?: number;
  delayBeforeStartingAnimationsInMillis?: number;
  isBreathing: boolean;
  isBreathingIn: boolean;
  onStartBreathing: () => void;
  onStopBreathing: () => void;
  width: string;
}
