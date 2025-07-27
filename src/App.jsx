import { Fragment } from 'react'
// import { getData } from './data'
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import image from './assets/placeholder.png'
import InfiniteScrollDemo from './InfiniteScrollDemo'

function App() {

  return (
    <>
      <InfiniteScrollDemo />
      
      {/* if bootstrap is needed */}
      {/* <Container style={{ background: '#eee', marginTop: 10 }}>
        <Row>          
          {getData.map((d) => (
            <Fragment key={d.id}>
              <Col>
                <Card style={{ width: '18rem', height: '55vh', overflowY: 'scroll', margin: 10 }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.description}</Card.Text>
                    {d.category} - {d.subcategory}
                    <Card.Title>{d.price}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Fragment>
          ))}
        </Row>
      </Container> */}
    </>
  )
}

export default App
