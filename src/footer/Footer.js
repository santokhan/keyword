import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    fetch(
      "https://suggestqueries.google.com/complete/search?client=chrome&q=word"
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div></div>;
}
