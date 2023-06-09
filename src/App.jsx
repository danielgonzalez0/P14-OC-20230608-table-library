import React from 'react';
import Table from './components/table/Table';
import data from './mock/data.json';

const App = () => {
  // header – this is the column's name that will be displayed to help identify each column.
  // accessor – this is the key in our data object. This is what will be used to assign each value to a column. 
  //type - this the type of our type. This is what will be used to sort and format our data. Available (string, number, date)
  const header = [
    { header: 'First Name', accessor: 'first_name', type: 'string' },
    { header: 'Last Name', accessor: 'last_name', type: 'string' },
    { header: 'Date of Birth', accessor: 'dateOfBirth', type: 'date'},
    { header: 'Start Date', accessor: 'startDate', type: 'date'},
    { header: 'Street', accessor: 'address', type: 'string'},
    { header: 'City', accessor: 'city', type: 'string'},
    { header: 'State', accessor: 'state', type: 'string'},
    { header: 'Zip Code', accessor: 'zipCode', type: 'number'},
    { header: 'Department', accessor: 'department', type: 'string'},
  ];

const dataArray = data
// array of object. The key must be equal to the accessor value of the header array


  return (
    <div className="table-container">
      <Table data={dataArray} header={header} />
    </div>
  );
};

export default App;
