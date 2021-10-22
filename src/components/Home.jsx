import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import antimatterContainerImage from "../assets/antimatter_container.png";
import matterContainerImage from "../assets/matter_container.png";
import energyImage from "../assets/energy.png";
import matterImage from "../assets/matter.png";
import antimatterImage from "../assets/antimatter.png";
import energyCardImage from "../assets/energy_card.png";
import matterCardImage from "../assets/matter_card.png";
import antimatterCardImage from "../assets/antimatter_card.png";
import HeaderCarousel from "./Carousel";
import TokenCard from "./TokenCard";

const MatterCard = () => (
  <TokenCard
    tokenAddress="0x024269E2057b904d1Fa6a7B52056A8580a85180F"
    tokenSymbol="BMA"
    tokenName="Matter"
    tokenDecimals={30}
    tokenImage={matterImage}
    tokenIcon={matterImage}
    cardImage={matterCardImage}
    supply={100000000}
  />
);

const AntimatterCard = () => (
  <TokenCard
    tokenAddress="0x024269E2057b904d1Fa6a7B52056A8580a85180F"
    tokenSymbol="BAM"
    tokenName="Antimatter"
    tokenDecimals={30}
    tokenImage={antimatterImage}
    tokenIcon={antimatterImage}
    cardImage={antimatterCardImage}
    supply={500}
  />
);

const EnergyCard = () => (
  <TokenCard
    tokenAddress="0x024269E2057b904d1Fa6a7B52056A8580a85180F"
    tokenSymbol="BEG"
    tokenName="Energy"
    tokenDecimals={30}
    tokenImage={energyImage}
    tokenIcon={energyImage}
    // cardImage={energyCardImage}
    supply={500}
  />
);

const layers = [
  {
    offset: 0,
    speed: 0,
    margin: 0,
    component: <HeaderCarousel />,
  },
  {
    offset: 2,
    speed: -0.1,
    margin: "30%",
    clickref: 0,
    centered: true,
    component: <MatterCard />,
  },
  {
    offset: 2,
    speed: -0.1,
    margin: "-30%",
    clickref: 0,
    centered: true,
    component: <AntimatterCard />,
  },
  {
    offset: 2,
    speed: -0.3,
    margin: 0,
    clickref: 0,
    centered: true,
    component: <EnergyCard />,
  },
];

export default function Home() {
  const parallax = useRef(null);

  const scrollTo = (page) => () => parallax.current.scrollTo(page);

  return (
    <div>
      <nav className="navigation">
        <h4 className="title" onClick={scrollTo(0)}>
          Metaverse (LOGO)
        </h4>
        <button onClick={scrollTo(2)}>tokens</button>
      </nav>
      <Parallax ref={parallax} pages={5}>
        {layers.map((layer, index) => {
          const { centered, clickref, component, margin, offset, speed } =
            layer;

          const centerStyles = centered
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {};

          const marginStyles = margin
            ? {
                marginLeft: margin,
              }
            : {};

          const clickEvent =
            clickref !== undefined ? () => scrollTo(clickref) : () => {};

          return (
            <ParallaxLayer
              key={index}
              offset={offset}
              speed={speed}
              style={{ ...centerStyles, ...marginStyles }}
              onClick={clickEvent}
            >
              {component}
            </ParallaxLayer>
          );
        })}
      </Parallax>
    </div>
  );
}
