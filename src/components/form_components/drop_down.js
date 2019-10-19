import React from 'react';
import Select, { components } from 'react-select';

import styles from './styles.module.scss';

const ControlComponent = props => (
  <React.Fragment>
    <components.Control {...props} />
  </React.Fragment>
);

export default class DropDown extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div className="text-danger">{error}</div>
        </div>
      )
    }
  }

  render() {
    const { name, options, input, meta } = this.props;
    return (
      <div>
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
      {this.renderError(meta)}
      </div>
    );
  }
}
