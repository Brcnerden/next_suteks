import React from "react";
import { LP } from "./LoadingText.styled";
import Image from "next/image";
import Text from "../../Text/Text";

export default function LoadingText({ title, text, isTurn }) {
  return (
    <LP.Flex isTurn={isTurn}>
      <Text fontFamily="oggRegular" size="l" textColor="blue$500" as="h4">
        {title}
      </Text>
      <Text size="md" fontFamily="avertaRegular" textColor="black$500">
        {text}
      </Text>
      <Text size="md" fontFamily="oggRegular" textColor="black$500" as="button">
        LEARN MORE
      </Text>
    </LP.Flex>
  );
}
