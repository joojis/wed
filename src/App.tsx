import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";

import "./App.css";
import { Host, Schedule, Venue, Item, ItemTitle } from "./components";
import { bride, groom, venue } from "./data";
import { WelcomeMessage } from "./components/welcome-message";
import { InvitationImage } from "./components/invitation-image";

const App = () => {
  return (
    <Flex direction={"column"} bg="#ede8e1" overflowY="auto" minHeight="100vh">
      <Item height="140px" />
      <Item>
        <WelcomeMessage />
      </Item>
      <Item>
        <InvitationImage />
      </Item>
      <Item marginTop={5}>
        <Text fontSize="xx-large" fontFamily="GangwonEdu_OTFBoldA">
          {bride.name} · {groom.name}
        </Text>
      </Item>
      <Item>
        <Schedule />
      </Item>
      <Item height="24px" />
      <Item bg="#fffaf2" padding={5}>
        <Flex direction={"column"} alignItems={"center"}>
          <ItemTitle>초대합니다</ItemTitle>
          <Text
            fontSize="large"
            padding="14"
            align="center"
            lineHeight={10}
            wordBreak="keep-all"
            fontFamily="GangwonEdu_OTFBoldA"
          >
            여름빛 여운이 남은 계절에 저희 두 사람이 소중한 분들을 모시고,
            서로에 대한 사랑과 신뢰로 하나 됨을 약속하려 합니다.
            <br />
            부디 참석하셔서 함께 행복한 시간을 나누었으면 합니다.
          </Text>
          <Host>{groom}</Host>
          <Host>{bride}</Host>
        </Flex>
      </Item>
      <Item bg="#fffaf2" padding={5}>
        <ItemTitle>오시는 길</ItemTitle>
      </Item>
      <Item
        justifyContent="flex-start"
        bg="#fffaf2"
        padding={3.5}
        fontFamily="Pretendard"
      >
        <Flex alignItems="flex-start" gap={2.5}>
          <Icon as={FiMapPin} boxSize="1.6rem" />
          <Box>
            <Text fontSize="large" fontWeight="600">
              {venue.location.addressDetail}
            </Text>
            <Text
              fontSize="large"
              fontWeight="400"
              color="gray"
              marginTop="1.5"
            >
              {venue.location.address}
            </Text>
          </Box>
        </Flex>
      </Item>
      <Item>
        <Venue {...venue.kakao} />
      </Item>
      <Item bg="#fffaf2" padding={8}>
        <ItemTitle>축의금 전하기</ItemTitle>
      </Item>
      <Item
        bg="#fffaf2"
        paddingTop={4}
        paddingBottom={16}
        fontFamily="Pretendard"
      >
        <Flex gap={10} flexFlow={"row"}>
          <Button onClick={() => alert("준비중이에요.")}>
            신랑측 계좌번호
          </Button>
          <Button onClick={() => alert("준비중이에요.")}>
            신부측 계좌번호
          </Button>
        </Flex>
      </Item>
      <Item flexGrow={9999} minHeight="0rem" />
      <Item
        bgColor={"#333"}
        justifyContent={"center"}
        paddingTop="1.5"
        paddingBottom="1.5"
        paddingRight="3.5"
      >
        <Text
          fontSize="x-large"
          color="#818181"
          fontFamily={"Ownglyph_meetme-Rg"}
        >
          이 청첩장은 신랑이 직접 만들었어요!
        </Text>
      </Item>
    </Flex>
  );
};

export default App;
