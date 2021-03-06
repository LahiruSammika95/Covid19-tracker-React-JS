import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries ,casesType}) {
  return (
    <>
    <h3>{`Live ${casesType} by Country`}</h3>
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country[casesType]).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
    </>
  );
}

export default Table;
