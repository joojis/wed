import { useMemo } from "react";
import * as Hangul from "hangul-js";

export const useFrames = (message: string) => {
  return useMemo(() => {
    const disassembled = Hangul.disassemble(message);
    return [
      "ㅤ", // NOTE: 텍스트가 없어도 자리를 차지하도록 함.
      ...Array.from({ length: disassembled.length }, (_, i) =>
        Hangul.assemble(disassembled.slice(0, i + 1))
      ),
    ];
  }, [message]);
};
