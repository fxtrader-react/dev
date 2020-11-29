import React, { useEffect, useContext, useState } from "react";
import { useFetch } from "../../../hooks";
import { GlobalContext } from "../../../contexts/GlobalContext";
import TradeviewChart from "../section/TradeviewChart";
import AssetTable from "./AssetTable";
import NewsPanel from "./NewsPanel";

const Market = () => {
  const value = useContext(GlobalContext);

  const assets = [
    { coinName: "bitcoin", tradeviewSelector: "BTCUSD" },
    { coinName: "ethereum", tradeviewSelector: "ETHUSD" },
    { coinName: "bitcoin-cash", tradeviewSelector: "bchusd" },
    { coinName: "monero", tradeviewSelector: "xrpusd" },
    { coinName: "litecoin", tradeviewSelector: "ltcusd" },
  ];

  const [data, setData] = useState(null);
  const [apiData, setAPIData] = useFetch(null);

  function dataLoaded(list) {
    const coins = assets.map((coin) => coin.coinName);
    let filteredArray = list.filter(function (currentIndex) {
      return coins.indexOf(currentIndex.id) > -1;
    });
    filteredArray = { results: filteredArray };
    setData(filteredArray.results);
  }

  const decideColor = (coin) => {
    if (coin.market_data.price_change_percentage_24h > 0) {
      return " green";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    if (apiData) {
      dataLoaded(apiData);
    }
  }, [apiData]);

  function clicked(symbol) {
    value.setSelectedSymbol(symbol);
  }

  const cardList =
    data &&
    data.map((coin, index) => (
      <div
        key={index}
        className="card "
        onClick={() => clicked(coin.symbol)}
        style={{ cursor: "pointer" }}
      >
        <p>{coin.name}</p>
        <h3> ${coin.market_data.current_price.usd}</h3>
        <p className={decideColor(coin)}>
          {coin.market_data.price_change_percentage_24h}%
        </p>
      </div>
    ));

  return (
    <React.Fragment>
      <div className="card-component">{cardList}</div>
      {/* <TradeviewChart /> */}
      {/* <AssetTable /> */}
      <NewsPanel />
    </React.Fragment>
  );
};

export default Market;
