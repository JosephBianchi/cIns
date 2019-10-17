import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FaCarAlt, FaMoneyCheckAlt } from "react-icons/fa";

class SearchResults extends React.Component {


  render() {

    const avgPrice = _.meanBy(this.props.cars, 'price');

    if (!this.props.cars) {
      return;
    }
    return (
      <div>
        <span><FaCarAlt
          className=""
          size="2.25em"
          color="#15DB95"
        />
        </span>
        <h2>Vehicles: {this.props.cars.length}</h2>
          <span><FaMoneyCheckAlt
            className=""
            size="2.25em"
            color="#15DB95"
          />
          </span>
          <h2>Average Price: {avgPrice}</h2>
          <div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: Object.values(state.cars)
   }
};

export default connect(mapStateToProps)(SearchResults);
