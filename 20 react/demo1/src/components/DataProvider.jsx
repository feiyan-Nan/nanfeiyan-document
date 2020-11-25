import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const DataProvider = () => {
  const history = useHistory();
  console.log(history);
  return <div>12</div>;
};

export default DataProvider;
