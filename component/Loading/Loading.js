import React from "react";
import P from "./Loading.styled";
import Text from "../Text/Text";

import Image from "next/image";

import hand from "../../Images/hand.jpg";
import modelclothing from "../../Images/modelclothing.jpg";
import cotton from "../../Images/cotton.jpg";
import jacket from "../../Images/jacket.jpg";

import LoadingText from "./LoadingText/LoadingText";

export default function Loading() {
  return (
    <>
      <P.LoadingHead>
        <Text fontFamily="oggRegular" textColor="blue$500" size="lx" as="h2">
          Innovation & Craftsmanship
        </Text>
        <Text
          fontFamily="avertaRegular"
          textColor="black$500"
          size="mdll"
          as="p"
        >
          At Suteks, we have an instinctive care for a sustainable future. We
          strive for progress with care for our environment and fairness for
          all. Our commitment is to create beautifully crafted, impeccably
          tailored and eco-conscious garments using the latest technologies
          available.
        </Text>
      </P.LoadingHead>
      <P.flex>
        <Image src={hand} alt="hand" width={426} height={400}></Image>
        <LoadingText
          title="Flexibility"
          text="Manufacturing in todays world means flexibility in production. We understand our clients needs to adapt to the changing environment of fashion market's needs."
        />
      </P.flex>
      <P.flex>
        <LoadingText
          isTurn
          title="Exceptional Craftsmanship"
          text="Our garments are made to last and timeless. Durability and high craftsmanship are key elements of our products inspected at every step by our quality assurance team."
        />
        <Image
          src={modelclothing}
          alt="modelclothing"
          width={426}
          height={400}
        ></Image>
      </P.flex>
      <P.flex>
        <Image src={cotton} alt="cotton" width={426} height={400}></Image>
        <LoadingText
          title="Ethical & Sustainable"
          text="We choose our materials from sustainable sources and work with certified partners across Turkey and beyond. "
        />
      </P.flex>
      <P.flex>
        <LoadingText
          isTurn
          title="Innovative"
          text="From using different yarns and knit tecniques to experimenting with washes and dyes, we use latest innovations available to advance our clients ahead of their competitors. "
        />
        <Image src={jacket} alt="jacket" width={426} height={400}></Image>
      </P.flex>
    </>
  );
}
