import React from 'react';

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div className="myComponent">Hey {name}, nice to meet you.</div>
);

export default SayHello;
