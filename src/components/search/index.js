import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SearchResults from './search_results';
import { fetchCars } from '../../actions';

class Search extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="">
          <div className="">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
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
      <Container fluid={true}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="">
          <Row>
            <Col xs={12} md={4}>
              <div className="">
                <div className="">
                  <span className="input-group-text">Enter Make</span>
                </div>
                <Field name="make" component={this.renderInput}/>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="">
                <div className="">
                  <span className="input-group-text">Enter Model</span>
                </div>
                <Field name="model" component={this.renderInput}/>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="">
                <div className="">
                  <span className="input-group-text">Enter Year</span>
                </div>
                <Field name="year" component={this.renderInput}/>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center text-center">
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
  if (!formValues.manufacturer) {
      errors.manufacturer = 'You must enter a manufacturer';
    }
  if (!formValues.model) {
    errors.model = 'You must enter a model';
  }
  if (!formValues.year) {
    errors.year = 'You must enter a year';
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
