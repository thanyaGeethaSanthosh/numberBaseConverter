import React from 'react';

const NumberInput = (props) => {
  const { base, number, onChange } = props;
  return (
    <div>
      <label>{base}</label>
      <br />
      <input id={base} value={number} onChange={onChange} />
    </div>
  );
};

export default NumberInput;
