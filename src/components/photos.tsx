import PhotoAlbum from "react-photo-album";

import AlbumA from "/album/a_500.webp";
import AlbumB from "/album/b_500.webp";
import AlbumC from "/album/c_500.webp";
import AlbumD from "/album/d_500.webp";
import AlbumE from "/album/e_500.webp";
import AlbumF from "/album/f_500.webp";
import AlbumG from "/album/g_500.webp";
import AlbumH from "/album/h_500.webp";
import AlbumI from "/album/i_500.webp";
import AlbumJ from "/album/j_500.webp";

export const Photos = () => {
  return (
    <div style={{ width: "640px", maxWidth: "100vw" }}>
      <PhotoAlbum
        layout="rows"
        photos={[
          { src: AlbumA, width: 500, height: 750 },
          { src: AlbumB, width: 500, height: 750 },
          { src: AlbumC, width: 500, height: 750 },
          { src: AlbumD, width: 500, height: 750 },
          { src: AlbumE, width: 500, height: 750 },
          { src: AlbumF, width: 500, height: 750 },
          { src: AlbumG, width: 500, height: 750 },
          { src: AlbumH, width: 500, height: 750 },
          { src: AlbumI, width: 500, height: 750 },
          { src: AlbumJ, width: 500, height: 750 },
        ].sort(() => Math.random() - 0.5)}
        targetRowHeight={350}
        padding={0}
        spacing={3}
      />
    </div>
  );
};
