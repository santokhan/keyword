/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";

export default function BingApi(props) {
  const demo = [
    "data",
    [
      "data",
      "datacamp",
      "database",
      "datadog",
      "data analytics",
      "data entry jobs from home",
      "databricks",
      "data mining",
      "data entry",
      "data science",
      "datasite",
      "datalounge",
      "data lake",
      "data analyst",
      "data warehouse",
      "data recovery",
      "data entry jobs",
      "data usage",
      "dataverse",
      "data analysis",
      "data scientist",
      "data studio",
      "data dictionary",
      "data analyst jobs",
      "datatree",
    ],
  ];
  const { word } = props;
  const [error, seterror] = useState(null);
  const [loaded, setloaded] = useState(false);
  const [keywords, setkeywords] = useState([]);
  const uri =
    "https://api.bing.com/osjson.aspx?JsonType=callback&JsonCallback?client=chrome&Query=" +
    word +
    "&market=en-us";

  console.log(uri);

  useEffect(() => {
    fetch(uri, {
      method: "GET",
      mode: "no-cors",
    })
      .then((blob) => blob.json())
      .then(
        (data) => {
          if (data) {
            setloaded(true);
            setkeywords(data);
            console.log(keywords);
          }
        },
        // Note: It's important to handle errors here
        // Instead of catch() block so that we don't swallow
        // Exceptions from actual bugs in components
        (error) => {
          setloaded(true);
          seterror(error);
        }
      );
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  } else if (!loaded) {
    return (
      <div className="flex justify-center py-2">
        <div>Loading...</div>
      </div>
    );
  } else {
    return (
      <div>
        {demo[1].map((e) => {
          let uri = "https://www.bing.com/search?q=" + e;
          return (
            <div className="py-2" key={e}>
              <a
                href={uri}
                target="_blank"
                className="text-gray-900 hover:text-teal-400"
              >
                {e}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
