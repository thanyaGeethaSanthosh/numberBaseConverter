import React from 'react';
import NumberInput from './NumberInput';

const convertToDecimal = (num, base) => parseInt(num, base);
const convertFromDecimal = (num, base) => {
  return isNaN(num) ? '' : num.toString(base);
};

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberInDecimal: NaN };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const { value, id } = event.target;
    this.setState((prevState) => {
      const num = convertToDecimal(value, id);
      return { numberInDecimal: num };
    });
  }
  render() {
    const listOfNumbers = Array.from(Array(15), (val, ind) => {
      const base = ind + 2;
      const number = convertFromDecimal(this.state.numberInDecimal, base);
      return (
        <NumberInput
          key={ind}
          base={base}
          number={number}
          onChange={this.onChange}
        />
      );
    });
    return <div>{listOfNumbers}</div>;
  }
}

export default BaseConverter;
