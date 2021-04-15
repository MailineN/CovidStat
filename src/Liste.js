import React from "react";

const Liste = (data) => {
  return (
    <ol>
      data.Countries.map((country)=> (
        <li>
          {country.Country} (country.TotalDeaths)
        </li>
      ));
      
    </ol>
  );
};

export default Liste;
