import { Flex } from "@chakra-ui/layout";
import {
  AdorableText,
  DownloadRoughMap,
  GiftModalButton,
  Host,
  Item,
  ItemTitle,
  Parking,
  PlayfulText,
  Schedule,
  ShuttleBus,
  Subway,
  Venue,
  VenueAddress,
} from "./components";
import { InvitationImage } from "./components/invitation-image";
import { WelcomeMessage } from "./components/welcome-message";
import { bride, groom, venue } from "./data";

import "./App.css";

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
        <AdorableText fontSize="xx-large">
          {bride.name} · {groom.name}
        </AdorableText>
      </Item>
      <Item>
        <Schedule />
      </Item>
      <Item height="24px" />
      <Item bg="#fffaf2" padding={5}>
        <Flex direction={"column"} alignItems={"center"}>
          <ItemTitle>초대합니다</ItemTitle>
          <AdorableText
            fontSize="large"
            padding="4rem"
            align="center"
            lineHeight="2.5rem"
            wordBreak="keep-all"
          >
            여름빛 여운이 남은 계절에 저희 두 사람이 소중한 분들을 모시고,
            서로에 대한 사랑과 신뢰로 하나 됨을 약속하려 합니다.
            <br />
            부디 참석하셔서 함께 행복한 시간을 나누었으면 합니다.
          </AdorableText>
          <Host>{groom}</Host>
          <Host>{bride}</Host>
        </Flex>
      </Item>
      <Item bg="#fffaf2" padding={5}>
        <ItemTitle>오시는 길</ItemTitle>
      </Item>
      <Item justifyContent="flex-start" bg="#fffaf2" padding={3.5}>
        <VenueAddress />
      </Item>
      <Item>
        <Venue {...venue.kakao} />
      </Item>
      <Item justifyContent="flex-start" bg="#fffaf2" padding={3.5}>
        <Flex direction="column" gap={1.5}>
          <Parking />
          <ShuttleBus />
          <Subway />
          <DownloadRoughMap />
        </Flex>
      </Item>
      <Item justifyContent="flex-start" bg="#fffaf2"></Item>
      <Item bg="#fffaf2" padding={8}>
        <ItemTitle>축의금 · 선물 전하기</ItemTitle>
      </Item>
      <Item bg="#fffaf2" paddingTop={4} paddingBottom={16}>
        <Flex gap="2rem" flexFlow="row" flexWrap="wrap" justifyContent="center">
          <GiftModalButton
            bankAccounts={groom.bankAccounts}
            wishlistUrl={groom.wishlistUrl}
          >
            신랑측 계좌번호 · 위시리스트
          </GiftModalButton>
          <GiftModalButton bankAccounts={bride.bankAccounts}>
            신부측 계좌번호 · 위시리스트
          </GiftModalButton>
        </Flex>
      </Item>
      <Item flexGrow={9999} minHeight="0rem" />
      <Item
        bgColor={"#333"}
        justifyContent={"center"}
        paddingTop="1.5rem"
        paddingBottom="1.5rem"
      >
        <PlayfulText fontSize="x-large" color="#818181">
          이 청첩장은 신랑이 직접 만들었어요!
        </PlayfulText>
      </Item>
    </Flex>
  );
};

export default App;
