import React from 'react';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchResults from './search_results';
import { fetchCars, fetchModels, fetchCities, fetchYears } from '../../actions';
import styles from './styles.module.scss';
import DropDown from '../form_components/drop_down';
import { years, makes } from '../form_components/data';

class Search extends React.Component {

  onSubmit = (formValues) => {
    this.props.fetchCars(formValues);
  }

  onFocusModel = () => {
    let make = this.props.searchForm.make;
    let model = this.props.searchForm
    if (make === undefined || !make) {
      console.log('enter a make');
      console.log(model);
    } else if (make.value === undefined) {
      console.log(model);
      console.log('enter a make');
    } else {
      console.log(model);
      this.props.fetchModels(make.value)
    }
  }

  onFocusCity = () => {
    let model = this.props.searchForm.model;
    if (model === undefined || !model) {
      console.log('enter a model');
      console.log(model);
    } else if (model.value === undefined) {
      console.log(model);
      console.log('enter a model');
    } else {
      console.log(model);
      this.props.fetchCities(model.value)
    }
  }

  onFocusYear = () => {
    let model = this.props.searchForm.model;
    let city = this.props.searchForm.city;
    if (model === undefined || city === undefined || !model || !city) {
      console.log('enter a city and model');
    } else if (model.value === undefined || city.value === undefined) {
      this.props.fetchYears(model.value, city.value)
    }
  }

  models = () => Object.keys(this.props.models).map((model) => {
    return {value: model, label: model};
  })

  cities = () => Object.keys(this.props.cities).map((city) => {
    return {value: city, label: city};
  })

  years = () => Object.keys(this.props.years).map((year) => {
    return {value: year, label: year};
  })

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
              <Field name="model" component={DropDown} options={this.models()} onFocus={this.onFocusModel} />
            </Col>
            <Col xs={12} md={2}>
              <span className="input-group-text">Enter City</span>
              <Field name="city" component={DropDown} options={this.cities()} onFocus={this.onFocusCity} />
            </Col>
            <Col xs={12} md={2}>
              <span className="input-group-text">Enter Year</span>
              <Field name="year" component={DropDown} options={years} onFocus={this.onFocusYear} />
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
    cars: state.cars,
    models: state.models,
    cities: state.cities,
    searchForm: {...{}, ...getFormValues('searchForm')(state)}
  }
}

export default connect(mapStateToProps, { fetchCars, fetchModels, fetchCities })(reduxForm({
  form: 'searchForm',
  validate: validate
})(Search));
