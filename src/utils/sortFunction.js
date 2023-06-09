/**
 * sort an array of object
 * @param {array} array of datas to sort
 * @param {string} type of the data sorted
 * @param {string} orderedBy order to sort the array (ascending or descending)
 * @param {string} sortName object key of the data to sort
 */
async function sorter(array, type, orderedBy, sortName) {
  switch (type) {
    case 'number':
      array.sort(function (a, b) {
        if (orderedBy === 'asc') {
          return b[sortName] - a[sortName];
        } else if (orderedBy === 'desc') {
          return a[sortName] - b[sortName];
        } else {
          return null;
        }
      });
      break;
    case 'date':
      array.sort(function (a, b) {
        if (orderedBy === 'asc') {
          return (
            new Date(a[sortName]).getTime() - new Date(b[sortName]).getTime()
          );
        } else if (orderedBy === 'desc') {
          return (
            new Date(b[sortName]).getTime() - new Date(a[sortName]).getTime()
          );
        } else {
          return null;
        }
      });
      break;
    case 'string':
      array.sort(function (a, b) {
        let x = a[sortName].toLowerCase();
        let y = b[sortName].toLowerCase();
        if (orderedBy === 'asc') {
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        } else if (orderedBy === 'desc') {
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        } else {
          return null;
        }
      });
      break;
    default:
      return null;
  }
}

export default sorter;
