import { useEffect, useState } from "react";
import { useFrameCounter } from "./use-frame-coutner";
import { useFrames } from "./use-frames";

type Callback = () => void;

const forwardTypingInterval = 120; // Milliseconds
const forwardCompleteInterval = 2000; // Milliseconds
const rewindTypingInterval = 40; // Milliseconds
const rewindCompleteInterval = 500; // Milliseconds

export const HangulTypingEffect = ({
  children,
  onForwardComplete,
  onRewindComplete,
}: {
  children: string;
  onForwardComplete?: Callback;
  onRewindComplete?: Callback;
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
            nextFrameLastCharactor === " " ? 240 : forwardTypingInterval
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
