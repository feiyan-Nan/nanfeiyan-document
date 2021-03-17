import React from 'react';

export default function Id({ ...props }) {
  console.log(props);
  const { match } = props;
  return <div>id: {match.params.id}</div>;
}
