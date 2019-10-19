import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FaCarAlt, FaMoneyCheckAlt } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import styles from './styles.module.scss';

class SearchResults extends React.Component {

  renderList = () => {
    return this.props.cars.map(car => {
      return(
        <Col className={`${styles.carCol} d-flex align-items-stretch`} xs={12} sm={6} md={4} lg={3} key={car.id}>
          <Card className={`${styles.carCard} bg-alice-blue border-polished-pine`} border="primary" style={{ width: '18rem' }}>
            <Card.Header>${car.price}</Card.Header>
            <Card.Body>
              <Card.Title className="text-sea-green">{car.heading}</Card.Title>
              <Card.Img variant="bottom" src={car.media.photo_links[0]} />
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }


  render() {

    const avgPrice = Math.floor(_.meanBy(this.props.cars, 'price'));

    if (!this.props.cars) {
      return;
    }
    return (
      <div>
        <FaCarAlt
          className=""
          size="2.25em"
          color="#2CDA9D"
        />
        <h2>Vehicles: {this.props.cars.length}</h2>
          <FaMoneyCheckAlt
            className=""
            size="2.25em"
            color="#2CDA9D"
          />
        <h2>Average Price: {avgPrice > 0 ? '$' + avgPrice : ''}</h2>
          <Container fluid={true}>
            <Row>
              {this.renderList()}
            </Row>
          </Container>
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
