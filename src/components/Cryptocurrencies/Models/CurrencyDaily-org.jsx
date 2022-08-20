import React from 'react';
import "../../../styling/Table.css";

const CurrencyDaily = (props) => {

    const{
          id, 
          symbol, 
          price,               
          priceDate,
          priceTimeStamp,
          circulatingSupply,
          maxSupply,
          marketCap,
          high,
          highTimeStamp,
        }=props.currencyDaily

  return (
        <table border={1}>
            <tr>
              <th></th>
              <th>Symbol</th>
              <th>Price Date</th>
              <th>Price TimeStamp</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>Market Cap</th>
              <th>High</th>
              <th>High TimeStamp</th>
              <th></th>
            </tr>
              <tr key={id}>
                <td>{symbol}</td>
                <td>{price}</td>
                <td>{priceDate}</td>
                <td>{priceTimeStamp}</td>
                <td>{circulatingSupply}</td>
                <td>{maxSupply}</td>
                <td>{marketCap}</td>
                <td>{high}</td>
                <td>{highTimeStamp}</td>
                <td>
                  <button
                    className="waves-effect waves-light btn-small">
                    View
                  </button>
                </td>
              </tr>
        </table>
  )
}

export default CurrencyDaily;