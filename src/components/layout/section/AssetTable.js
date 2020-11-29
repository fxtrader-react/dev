import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../../../hooks";
import { GlobalContext } from "../../../contexts/GlobalContext";

export default function AssetTable() {
  const [apiData, setAPIData] = useFetch();
  const [data, setData] = useState(apiData);
  const [loading, setLoading] = useState(true);
  //let filteredArray = { results: apiData };

  const decideColor = (coin) => {
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
    setLoading(false);
  }, [apiData]);

  const renderHeader = () => {
    return (
      data && (
        <tr id="thead">
          <th>Name</th>
          <th>Current Price</th>
          <th>Market Cap</th>
          <th>Circulating Supply</th>
          <th>24 Change</th>
        </tr>
      )
    );
  };

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

  // data &&
  //   data.map((coin, index) => (
  //     <tr key={index}>
  //       <td className="table-column-align-left">
  //         <img src={coin.image.small} alt="thumbnail" />
  //         {coin.name}
  //       </td>
  //       <td>${coin.market_data.current_price.usd}</td>
  //       <td>${coin.market_data.market_cap.usd}</td>
  //       <td>{roundToX(coin.market_data.circulating_supply, 2)}</td>
  //       <td className={decideColor(coin)}>
  //         {coin.market_data.price_change_percentage_24h}%
  //       </td>
  //     </tr>
  //   ));

  return (
    <div className="table-container">
      <table>
        <tbody style={{ display: loading ? "none" : "" }}>
          {renderHeader()}
          {renderTable}
        </tbody>
      </table>
    </div>
  );
}
