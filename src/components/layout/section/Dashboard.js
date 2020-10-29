import React, { useEffect, useContext, useState } from "react";
import { useFetch } from "../../../hooks";
import { GlobalContext } from "../../../contexts/GlobalContext";
import TradeviewChart from "../section/TradeviewChart";

const Market = () => {
  const value = useContext(GlobalContext);

  const assets = ["bitcoin", "ethereum", "bitcoin-cash"];
  const [data, setData] = useState(null);
  const [apiData, setAPIData] = useFetch(null);

  function dataLoaded(list) {
    let filteredArray = list.filter(function (currentIndex) {
      return assets.indexOf(currentIndex.id) > -1;
    });
    filteredArray = { results: filteredArray };
    setData(filteredArray.results);
  }

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
        className="card"
        onClick={() => clicked(coin.symbol)}
        style={{ cursor: "pointer" }}
      >
        <p>{coin.name}</p>
        <h3> ${coin.market_data.current_price.usd}</h3>
        {coin.market_data.price_change_percentage_24h}%
      </div>
    ));

  return (
    <React.Fragment>
      <div className="card-component">{cardList}</div>
      <TradeviewChart />
    </React.Fragment>
  );
};

export default Market;
