import React, { useEffect } from 'react';
import Header from '../header/Header';

const Table = ({ data, header }) => {
  useEffect(() => {
    console.log(data);
    console.log(header);
  }, [data, header]);

  return (
    <div>
      <table className="table">
        <Header header={header} />
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {header.map((column, index) => (
                <td key={index} className="table-cell">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
