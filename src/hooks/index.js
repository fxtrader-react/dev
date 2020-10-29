import React, { useEffect, useState } from "react";

export const useFetch = () => {
  const [apiData, setAPIData] = useState();

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/")
      .then((res) => res.json())
      .then(
        (result) => {
          setAPIData(result);
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [apiData, setAPIData];
};
