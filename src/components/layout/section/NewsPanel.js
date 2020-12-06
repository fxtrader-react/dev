import React, { useEffect, useState } from "react";
import CryptoNewsAPI from "crypto-news-api";

export default function NewsPanel() {
  const [data, setData] = useState();
  // Connect to the CryptoControl API
  const Api = new CryptoNewsAPI("136de7864735ca4079e965f8ee09e680");

  // Connect to a self-hosted proxy server (to improve performance) that points to cryptocontrol.io
  const ProxyApi = new CryptoNewsAPI(
    "136de7864735ca4079e965f8ee09e680",
    "http://cryptocontrol_proxy/api/v1/public"
  );

  const fetchNews = () => {
    Api.getTopNewsByCoin("bitcoin")
      .then(function (articles) {
        setData(articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const renderCards =
    data &&
    data.map((article, index) => (
      <div className="card" key={index}>
        <div className="content">
          <img src={article.originalImageUrl} alt="thumbnail" />
          <div className="card-text">
            <h3>{article.title}</h3>
            <p>{article.description.substring(0, 50)}...</p>
            <a target="_blank" href={article.url}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    ));

  return <div className="card-component news">{renderCards}</div>;
}
