import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Toolbox() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    await setData(result.data);
  };

  const buttonClick = async () => {
    setCount(count + 1);
    let marketData = data.market_data;
    console.log(marketData.current_price);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Clicked {count} times</p>
      <p>Welcome</p>
      <button onClick={() => buttonClick()}>Click me</button>
    </div>
  );
}
