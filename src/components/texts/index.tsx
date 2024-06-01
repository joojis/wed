import { Text, TextProps } from "@chakra-ui/layout";

export const AdorableText = (props: Omit<TextProps, "fontFamily">) => {
  return <Text {...props} fontFamily="GangwonEdu_OTFBoldA" />;
};

export const PlayfulText = (props: Omit<TextProps, "fontFamily">) => {
  return <Text {...props} fontFamily="Ownglyph_meetme-Rg" />;
};

export const RespectfulText = (props: Omit<TextProps, "fontFamily">) => {
  return <Text {...props} fontFamily="GowunBatang-Regular" />;
};

export const FormalText = (props: Omit<TextProps, "fontFamily">) => {
  return <Text {...props} fontFamily="Pretendard" />;
};
