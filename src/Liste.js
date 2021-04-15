import React from "react";

const Liste = ({ data, filter }) => {
  debugger
  return (
    <ol>
      {data.Countries.filter(
        (country) => country.Country.includes(filter)
      ).map((country) => (
        <li >
          {country.Country} ({country.TotalDeaths} deaths)
        </li>
      ))}
    </ol>
  );
};

export default Liste;
