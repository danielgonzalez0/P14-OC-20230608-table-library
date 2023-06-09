import React, { useEffect, useState } from 'react';
import TableContent from '../tableContent/TableContent';
import sorter from '../../utils/sortFunction';

const Table = ({ data, header }) => {
  const [sortType, setSortType] = useState('string');
  const [sortOrderBy, setSortOrderBy] = useState('no order');
  const [sortName, setSortName] = useState('no name');

  useEffect(() => {
    console.log(data);
    console.log(header);
  }, [data, header]);

  const handleSort = async (columnInfos) => {
    if (columnInfos.accessor === sortName) {
      if (sortOrderBy === 'desc') {
        setSortOrderBy('asc');
        await sorter(data, sortType, sortOrderBy, sortName);
      } else {
        setSortOrderBy('desc');
        await sorter(data, sortType, sortOrderBy, sortName);
      }
    } else {
      setSortName(columnInfos.accessor);
      setSortType(columnInfos.type);
      setSortOrderBy('asc');
      await sorter(data, sortType, sortOrderBy, sortName);
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {header.map((column, index) => (
              <th
                key={index}
                className="table-cell header-cell"
                onClick={() => handleSort(column)}
              >
                {column.header}
                {sortOrderBy === 'asc' && sortName === column.accessor && (
                  <span className="order-active">▲</span>
                )}
                {sortOrderBy === 'desc' && sortName === column.accessor && (
                  <span className="order-active">▼</span>
                )}
                {sortName !== column.accessor && <span>▼▲</span>}
              </th>
            ))}
          </tr>
        </thead>
        <TableContent
          data={data}
          header={header}
        />
      </table>
    </div>
  );
};

export default Table;
