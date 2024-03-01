import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // custom hook we have created
  const [data, setData] = useState({});

  // using use effect so that jb bhi dependency me change ho api apne aap call hojay
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) //callback aaya vapas, use json me convert kiya
      .then((res) => {
        setData(res[currency]); // to hold the response
      });

    console.table(data);
  }, [currency]); //dependency

  console.log(data);
  return data;
}

export default useCurrencyInfo;
