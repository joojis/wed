import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";

import "./App.css";
import { Host, Schedule, Venue, Item, ItemTitle } from "./components";
import { bride, groom, venue } from "./data";
import Invitation from "/invitation.jpg";

const App = () => {
  return (
    <Flex direction={"column"} bg="#ede8e1" overflowY="auto" minHeight="100vh">
      <Item height="220px" />
      <Item>
        <Flex maxWidth="400px" width="100%" direction={"column"}>
          <Image
            src={Invitation}
            objectFit={"cover"}
            rounded="1rem"
            roundedTopLeft={200}
            roundedTopRight={200}
          />
        </Flex>
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
            믿음과 사랑으로 영원히 하나 됨을 이루고자 합니다.
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
