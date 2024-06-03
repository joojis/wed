import { Icon } from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { ReactNode, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { FiExternalLink } from "react-icons/fi";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const size = { maxWidth: "100vw", width: "640px", height: "400px" };

const Placeholder = () => <Flex {...size} />;

const MapItem = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Flex
        alignItems="center"
        gap="0.25rem"
        backgroundColor="#fffaf2"
        padding="0.25rem 1rem"
        rounded="2rem"
        boxShadow="0 3px 5px"
        color="#ba8f58"
      >
        <b>{children}</b>
        <Icon as={FiExternalLink} boxSize="1.2rem" />
      </Flex>
    </a>
  );
};

export const Venue = ({
  lat,
  lng,
  placeId,
}: {
  lat: number;
  lng: number;
  placeId: string;
}) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAPS_SDK_KEY
    }&autoload=false`;
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => setReady(true);
  }, []);
  if (!ready) {
    return <Placeholder />;
  }
  return (
    <Flex position="relative" maxWidth="100vw">
      <Map center={{ lat, lng }} style={size} level={4}>
        <MapMarker position={{ lat, lng }}>
          <div
            style={{
              textAlign: "center",
              width: "200px",
              padding: "3px",
              color: "#ba8f58",
            }}
          >
            <b>
              더파티움 여의도
              <br />
              (중소기업중앙회 건물)
            </b>
          </div>
        </MapMarker>
      </Map>
      {isMobile && (
        // 모바일에서 지도 때문에 스크롤 안 되는 문제 방지
        <Flex position="absolute" width="100%" height="100%" zIndex={5} />
      )}
      <Flex
        position="absolute"
        right="1rem"
        bottom="2rem"
        zIndex={10}
        direction="column"
        alignItems="end"
        gap="1rem"
      >
        <MapItem href={"https://map.naver.com/p/entry/place/1018318622"}>
          네이버지도 열기
        </MapItem>
        <MapItem href={`https://map.kakao.com/link/map/${placeId}`}>
          카카오맵 열기
        </MapItem>
      </Flex>
    </Flex>
  );
};
