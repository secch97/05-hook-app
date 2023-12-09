import React from "react";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import Loading from "../03-examples/Loading";
import Quote from "../03-examples/Quote";


const Layout = () => {
  const { counter, increment } = useCounter(5);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          {data.map((breakingQuote, index) => {
            return (
              <Quote
                key={`${breakingQuote}-${index}`}
                breakingQuote={breakingQuote}
                index={index}
              ></Quote>
            );
          })}
          <button className="btn btn-primary" onClick={() => increment(1)}>
            Increase quotes
          </button>
        </>
      )}
    </>
  );
};

export default Layout;
