const parseData = (input) => {
  const {data, column} = input;
  const fields = getFields(column);
  return data.map(rowData => rowDataToObject(rowData, fields))
}

const getFields = (structure) => structure.map(obj => obj.name);

const rowDataToObject = (rowData, fields) => {
  return rowData.reduce((pre, cur, index) => {
    pre[fields[index]] = cur;
    return pre;
  }, {})
}

export {parseData};
