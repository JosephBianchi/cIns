import React from 'react';
import Select, { components } from 'react-select';

import styles from './styles.module.scss';

const ControlComponent = props => (
  <React.Fragment>
    <components.Control {...props} />
  </React.Fragment>
);

export default class DropDown extends React.Component {
  render() {
    const { name, options, input } = this.props;
    return (
      <Select
        {...input}
        components={{ Control: ControlComponent }}
        onChange={value => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        isClearable
        isSearchable
        name={name}
        options={options}
      />
    );
  }
}
