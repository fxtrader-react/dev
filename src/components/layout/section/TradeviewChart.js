import React, { useContext } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { GlobalContext } from "../../../contexts/GlobalContext";

const TradeviewChart = () => {
  const value = useContext(GlobalContext);

  return (
    <div className="trade-view">
      <TradingViewWidget
        symbol={value.selectedSymbol}
        theme={Themes.DARK}
        locale="en"
        autosize
      />
    </div>
  );
};

export default TradeviewChart;
