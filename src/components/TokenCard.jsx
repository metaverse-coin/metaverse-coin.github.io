import detectEthereumProvider from "@metamask/detect-provider";
import React from "react";

const background = (image) => ({ backgroundImage: `url(${image})` });

const addToken = (props) => async () => {
  const provider = await detectEthereumProvider();
  provider.sendAsync(
    {
      method: "metamask_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: props.tokenAddress,
          symbol: props.tokenSymbol,
          decimals: props.tokenDecimals,
          image: props.tokenImage,
        },
      },
      id: Math.round(Math.random() * 100000),
    },
    (err, added) => {
      console.log({ err, added });
    }
  );
};

export default function TokenCard(props) {
  return (
    <div className="card" style={background(props.cardImage)}>
      <div className="card-image" style={background(props.tokenImage)} />
      <div className="card-content">
        <div className="token-title">{props.tokenName}</div>
        <div className="token-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          earum sapiente repellat esse libero minus pariatur quia cumque, sit
          praesentium deleniti aliquid, est cum voluptate, dolor numquam.
          Maxime, vero error.
        </div>
        <div className="token-supply">Total supply</div>
        <b>{new Intl.NumberFormat("de-DE").format(props.supply)}</b>
      </div>
      <div className="card-action">
        <div onClick={addToken(props)}>
          <p>Add to Metamask</p>
        </div>
      </div>
    </div>
  );
}
