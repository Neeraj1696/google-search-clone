import { useState, useEffect } from "react";
import API_KEY from "./Key";

const CONTEXT_KEY = "e91fa308957b721b9";

const UseGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://cse.google.com/cse?cx=e91fa308957b721b9=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [term]);

  return { data };
};

export default UseGoogleSearch;
