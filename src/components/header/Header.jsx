import React from 'react';

const Header = ({ header }) => {
  return (
    <thead>
      <tr>
        {header.map((column, index) => (
          <th key={index} className="table-cell header-cell">
            {column.header}
            <span>▼▲</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
