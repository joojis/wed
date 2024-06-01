import { useState } from "react";
import { HangulTypingEffect } from "./hangul-typing-effect";
import { AdorableText } from "./texts";

export const WelcomeMessage = () => {
  const [sequence, setSequence] = useState(0);
  const messages = [
    "8월 25일",
    "일요일",
    "오후 2시",
    "더파티움 여의도",
    "지하 1층",
    "그랜드컨벤션홀",
    "결혼식에 초대합니다 ~~~ ",
  ];
  return (
    <AdorableText fontSize="xx-large">
      <HangulTypingEffect onRewindComplete={() => setSequence(sequence + 1)}>
        {messages[sequence % messages.length]}
      </HangulTypingEffect>
    </AdorableText>
  );
};
