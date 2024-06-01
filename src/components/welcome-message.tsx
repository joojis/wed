import { Text } from "@chakra-ui/react";
import { HangulTypingEffect } from "./hangul-typing-effect";
import { useState } from "react";

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
    <Text fontSize="xx-large" fontFamily="GangwonEdu_OTFBoldA">
      <HangulTypingEffect onRewindComplete={() => setSequence(sequence + 1)}>
        {messages[sequence % messages.length]}
      </HangulTypingEffect>
    </Text>
  );
};
