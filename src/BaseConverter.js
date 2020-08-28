import React from 'react';
import Number from './Number';

const convertToDecimal = (num, base) => parseInt(num, base);
const convertFromDecimal = (num, base) => num.toString(base);

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberInDecimal: '' };
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
    const numbers = Array.from(Array(15), (val, ind) => {
      const base = ind + 2;
      const number = convertFromDecimal(this.state.numberInDecimal, base);
      return { base, number };
    });
    const listOfNumbers = numbers.map(({ base, number }) => (
      <Number key={base} base={base} number={number} onClick={this.onChange} />
    ));

    return <div>{listOfNumbers}</div>;
  }
}

export default BaseConverter;
