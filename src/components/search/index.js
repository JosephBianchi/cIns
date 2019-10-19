import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchResults from './search_results';
import { fetchCars } from '../../actions';
import styles from './styles.module.scss';
import DropDown from '../form_components/drop_down';
import { years, makes } from '../form_components/data';
import { GoogleMap } from '../maps';


class Search extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="">
          <div className="text-danger">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? '' : ''}`;
    return (
      <div>
        <input className="form-control"
          {...input}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    )
  }


  onSubmit = (formValues) => {
    this.props.fetchCars(formValues);
  }

  render() {
    return(
      <Container className={styles.searchContainer} fluid={true}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="">
          <Row>
            <Col xs={12} md={{span: 2, offset: 1}}>
              <span className="input-group-text">Enter Make</span>
              <Field name="make" component={DropDown} options={makes} />
            </Col>
            <Col xs={12} md={2}>
              <span className="input-group-text">Enter Model</span>
              <Field name="model" component={this.renderInput}/>
            </Col>
            <Col xs={12} md={2}>
              <span className="input-group-text">Enter Year</span>
              <Field name="year" component={DropDown} options={years} />
            </Col>
            <Col xs={12} md={2}>
              <span className="input-group-text">Enter City</span>
              <Field name="city" component={this.renderInput}/>
            </Col>
            <Col xs={12} md={2}>

            </Col>
          </Row>
          <Row className={`${styles.searchButton} justify-content-center text-center`}>
            <Col xs={12}>
              <button className="btn btn-primary">Search</button>
            </Col>
          </Row>
        </form>
        <SearchResults />
      </Container>

    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.make) {
      errors.make = 'You must enter a make';
    }
  if (!formValues.model) {
    errors.model = 'You must enter a model';
  }
  if (!formValues.year) {
    errors.year = 'You must enter a year';
  }
  if (!formValues.city) {
    errors.city = 'You must enter a city';
  }
  return errors;
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, { fetchCars })(reduxForm({
  form: 'searchForm',
  validate: validate
})(Search));
