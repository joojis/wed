import { useState } from "react";
import { HangulTypingEffect } from "./hangul-typing-effect";
import { AdorableText } from "./texts";
import { Text, Flex, TextProps } from "@chakra-ui/layout";

const TextPlaceholder = (props: TextProps) => (
  <Text
    color="#00000000"
    // 타이핑 효과 중간에 자간이 폭을 초과해 text-reflow 발생하는 것 방지하기 위한 공간 확보
    marginRight="0.5rem"
    {...props}
  />
);

export const WelcomeMessage = () => {
  const [sequence, setSequence] = useState(0);
  const messages = [
    "8월 25일",
    "일요일",
    "오후 2시",
    "더파티움 여의도",
    "그랜드컨벤션홀",
    "결혼식에 초대합니다 ~~~ ",
  ];
  const isLastMessageSequence =
    sequence % messages.length === messages.length - 1;
  return (
    <AdorableText fontSize="xx-large" lineHeight="3.5rem">
      <Flex position="relative">
        <Flex>
          <TextPlaceholder>
            {messages[sequence % messages.length]}
          </TextPlaceholder>
        </Flex>
        <Flex position="absolute" justify="center">
          <HangulTypingEffect
            onRewindComplete={() => setSequence(sequence + 1)}
            forwardCompleteInterval={isLastMessageSequence ? 7000 : 2500}
          >
            {messages[sequence % messages.length]}
          </HangulTypingEffect>
        </Flex>
      </Flex>
    </AdorableText>
  );
};
