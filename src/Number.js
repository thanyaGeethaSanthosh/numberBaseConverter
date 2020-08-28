import React from 'react';

const Number = (props) => {
  const { base, number, onClick } = props;
  return (
    <div>
      <label>{base}</label>
      <br />
      <input id={base} value={number} onChange={onClick} />
    </div>
  );
};

export default Number;
