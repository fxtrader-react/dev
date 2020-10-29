import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../../../hooks";
import { GlobalContext } from "../../../contexts/GlobalContext";

export default function AssetTable() {
  const [apiData, setAPIData] = useFetch();
  const [data, setData] = useState(apiData);
  //let filteredArray = { results: apiData };

  let decideColor = (coin) => {
    if (coin.market_data.price_change_percentage_24h > 0) {
      return "green";
    } else {
      return "red";
    }
  };

  let roundToX = (num, X) => {
    return +(Math.round(num + "e+" + X) + "e-" + X);
  };

  useEffect(() => {
    setData(apiData);
  }, [apiData]);

  const renderTable =
    data &&
    data.map((coin, index) => (
      <tr key={index}>
        <td className="table-column-align-left">
          <img src={coin.image.small} alt="thumbnail" />
          {coin.name}
        </td>
        <td>${coin.market_data.current_price.usd}</td>
        <td>${coin.market_data.market_cap.usd}</td>
        <td>{roundToX(coin.market_data.circulating_supply, 2)}</td>
        <td className={decideColor(coin)}>
          {coin.market_data.price_change_percentage_24h}%
        </td>
      </tr>
    ));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Price</th>
            <th>Market Cap</th>
            <th>Circulating Supply</th>
            <th>24 Change</th>
          </tr>
        </thead>
        <tbody>{renderTable}</tbody>
      </table>
    </div>
  );
}
