import { useCallback, useState } from "react";
import * as Hangul from "hangul-js";

type CounterFunction = () => void;

export const useFrameCounter = (
  initialFrame: number,
  frames: string[]
): [number, CounterFunction, CounterFunction, boolean, boolean] => {
  const [frameCount, setFrameCount] = useState(initialFrame);
  const min = 0;
  const max = frames.length - 1;
  const next = useCallback(() => {
    setFrameCount(Math.min(frameCount + 1, max));
  }, [setFrameCount, frameCount, max]);
  const prev = useCallback(() => {
    const disassembled = Hangul.disassemble(frames[frameCount], true);
    const lastGroup = disassembled[disassembled.length - 1];
    setFrameCount(Math.max(frameCount - lastGroup.length, min));
  }, [setFrameCount, frameCount, min, frames]);
  return [frameCount, next, prev, frameCount < max, frameCount > min];
};
