/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";

export default function EbayApi(props) {
  const { word } = props;
  const [error, seterror] = useState(null);
  const [loaded, setloaded] = useState(false);
  const [keywords, setkeywords] = useState([]);
  const uri = `https://autosug.ebay.com/autosug?client=chrome&kwd=${word}&_dg=1&sId=0`;

  console.log(uri);

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
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
          console.log(error);
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
        {keywords.map((e) => {
          let uri = "https://www.ebay.com/sch/i.html?_nkw=" + e;
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
