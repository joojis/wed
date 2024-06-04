import { useEffect, useState } from "react";
import { useFrameCounter } from "./use-frame-coutner";
import { useFrames } from "./use-frames";

type Callback = () => void;

const forwardTypingInterval = 140; // Milliseconds
// const forwardCompleteInterval = 2000; // Milliseconds
const rewindTypingInterval = 50; // Milliseconds
const rewindCompleteInterval = 250; // Milliseconds

const getForwardTypingInterval = (char: string) => {
  switch (char) {
    case " ":
      return 100;
    case "~":
      return 750;
    default:
      return forwardTypingInterval;
  }
};

export const HangulTypingEffect = ({
  children,
  onForwardComplete,
  onRewindComplete,
  forwardCompleteInterval,
}: {
  children: string;
  onForwardComplete?: Callback;
  onRewindComplete?: Callback;
  forwardCompleteInterval: number;
}) => {
  const frames = useFrames(children);
  const [frameCount, next, prev, hasNext, hasPrev] = useFrameCounter(0, frames);
  const [status, setStatus] = useState<"forward" | "rewind" | "pause">(
    "forward"
  );
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    switch (status) {
      case "forward":
        if (hasNext) {
          const nextFrame = frames[frameCount + 1] as string;
          const nextFrameLastCharactor = nextFrame[nextFrame.length - 1];
          timeoutId = setTimeout(
            next,
            getForwardTypingInterval(nextFrameLastCharactor)
          );
        } else {
          timeoutId = setTimeout(() => {
            onForwardComplete?.();
            setStatus("rewind");
          }, forwardCompleteInterval);
        }
        break;
      case "rewind":
        if (hasPrev) {
          timeoutId = setTimeout(prev, rewindTypingInterval);
        } else {
          timeoutId = setTimeout(() => {
            onRewindComplete?.();
            setStatus("forward");
          }, rewindCompleteInterval);
        }
        break;
      case "pause":
        // Do nothing
        break;
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [next, prev, hasNext, hasPrev, status]);
  return frames[frameCount];
};
