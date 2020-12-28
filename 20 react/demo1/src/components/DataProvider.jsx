import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const DataProvider = ({ ...props }) => {
  console.log(props);
  const history = useHistory();
  console.log(history);
  return (
    <div className="aa" {...props}>
      {props.children}
      uuuu
    </div>
  );
};

export default DataProvider;
