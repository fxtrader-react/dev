import React, { useEffect } from "react";
import AssetTable from "../section/AssetTable";
import TradeviewChart from "../section/TradeviewChart";

export default function Wallet() {
  const clickedDeposit = () => {
    console.log("Deposit Successful");
  };

  const clickedWithdraw = () => {
    console.log("Withdraw Successful");
  };
  return (
    <React.Fragment>
      <TradeviewChart />
      <button onClick={() => clickedDeposit()}>Deposit</button>
      <button onClick={() => clickedWithdraw()}>Withdraw</button>

      {/* <AssetTable /> */}
    </React.Fragment>
  );
}
