import React from 'react';

const TableContent = ({ data, header }) => {


  return (
    <tbody>
      {data.map((row, index) => {
          return (
            <tr key={index}>
              {header.map((column, index) => (
                <td key={index} className="table-cell">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableContent;
