import { Map, MapMarker } from "react-kakao-maps-sdk";

export const Venue = ({
  lat,
  lng,
  placeId,
}: {
  lat: number;
  lng: number;
  placeId: string;
}) => {
  return (
    <Map
      center={{ lat, lng }}
      style={{ width: "640px", height: "400px" }}
      level={4}
      draggable={false}
      scrollwheel={false}
      zoomable={false}
    >
      <MapMarker position={{ lat, lng }}>
        <div style={{ padding: "5px", color: "#000" }}>
          더파티움 여의도 <br />
          <a
            href={`https://map.kakao.com/link/map/${placeId}`}
            style={{ color: "blue" }}
            target="_blank"
            rel="noreferrer"
          >
            큰지도보기
          </a>{" "}
          <a
            href={`https://map.kakao.com/link/to/${placeId}`}
            style={{ color: "blue" }}
            target="_blank"
            rel="noreferrer"
          >
            길찾기
          </a>
        </div>
      </MapMarker>
    </Map>
  );
};
