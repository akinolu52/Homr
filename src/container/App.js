import React, { Component, Fragment } from 'react';
import Swiper from 'react-id-swiper';
import { 
  Button, Form, FormGroup, Input, Col, Row, Container,
  Card, CardImg, CardImgOverlay, CardTitle, CardText, CardFooter, CardGroup,CardSubtitle, CardBody,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
    
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      grabCursor: true
    };
    return (
      <Fragment>
        <div className="header">
          <Navbar color="transparent" light expand="md">
            <NavbarBrand href="/">Homr</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">For Sale</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">For Rent</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Blog</NavLink>
                </NavItem>
                <NavItem className="rounded">
                  <NavLink href="#">Sign Up/Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="header-content d-flex flex-column m-auto justify-content-center align-items-center text-center">
            <h1>Helping You Find The Space You Need</h1>
            <p> Lorem ipsum dolor sit amet iure dolore quam at. Quis dolorem fugiat sint explicabo sunt ex ipsa aspernatur.</p>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" placeholder="Where do you want to live" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" placeholder="type" />
                </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" placeholder="Bedrooms" />
                </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" placeholder="Max Price" />
              </FormGroup>
              <Button color="success"> <i className="fa fa-search" /> Search</Button>
            </Form>
          </div>
        </div>
        <div className="popular-locations-wrapper d-flex justify-content-center align-items-center">
          <section className="popular-locations">
            <CardGroup>
              <Card body inverse>
                <CardImg width="10%" src="/images/lagos.jpg" alt="popular location" />
                <CardImgOverlay className="d-flex justify-content-center align-items-center">
                  <CardTitle className="text-center">Lagos</CardTitle>
                </CardImgOverlay>
              </Card>
              <Card body inverse>
                <CardImg width="10%" src="/images/kaduna.jpg" alt="popular location" />
                <CardImgOverlay className="d-flex justify-content-center align-items-center">
                  <CardTitle className="text-center">Kaduna</CardTitle>
                </CardImgOverlay>
              </Card>
              <Card body inverse>
                <CardImg width="10%" src="/images/abuja.jpeg" alt="popular location" />
                <CardImgOverlay className="d-flex justify-content-center align-items-center">
                  <CardTitle className="text-center">Abuja</CardTitle>
                </CardImgOverlay>
              </Card>
              <Card body inverse>
                <CardImg width="10%" src="/images/rivers.jpg" alt="popular location" />
                <CardImgOverlay className="d-flex justify-content-center align-items-center">
                  <CardTitle className="text-center">Rivers</CardTitle>
                </CardImgOverlay>
              </Card>
              <Card body inverse>
                <CardImg width="10%" src="/images/kebbi.jpg" alt="popular location" />
                <CardImgOverlay className="d-flex justify-content-center align-items-center">
                  <CardTitle className="text-center">Kebbi</CardTitle>
                </CardImgOverlay>
              </Card>
            </CardGroup>
          </section>
        </div>
        <div className="featured-wrapper container d-flex">
          <section className="featured">
            <h1 className="mb-4 text-center">Featured Properties in <span>Lagos</span> </h1>
            <Row>
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_1.jpeg" alt="House" />
                  <CardBody>
                    <Row>
                      <Col className="text-left">
                        <CardTitle>$3,500</CardTitle>
                        <CardSubtitle>Lekki, Lagos</CardSubtitle>
                      </Col>
                      <Col>
                      <Button color="success">View Property</Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col>4 Beds</Col>
                      <Col>5 Baths</Col>
                      <Col>5 Toilets</Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_3.jpeg" alt="House" />
                  <CardBody>
                    <Row>
                      <Col className="text-left">
                        <CardTitle>$3,500</CardTitle>
                        <CardSubtitle>Lekki, Lagos</CardSubtitle>
                      </Col>
                      <Col>
                      <Button color="success">View Property</Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col>4 Beds</Col>
                      <Col>5 Baths</Col>
                      <Col>5 Toilets</Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_2.jpeg" alt="House" />
                  <CardBody>
                    <Row>
                      <Col className="text-left">
                        <CardTitle>$3,500</CardTitle>
                        <CardSubtitle>Lekki, Lagos</CardSubtitle>
                      </Col>
                      <Col>
                      <Button color="success">View Property</Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col>4 Beds</Col>
                      <Col>5 Baths</Col>
                      <Col>5 Toilets</Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_3.jpeg" alt="House" />
                  <CardBody>
                    <Row>
                      <Col className="text-left">
                        <CardTitle>$3,500</CardTitle>
                        <CardSubtitle>Lekki, Lagos</CardSubtitle>
                      </Col>
                      <Col>
                      <Button color="success">View Property</Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col>4 Beds</Col>
                      <Col>5 Baths</Col>
                      <Col>5 Toilets</Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_2.jpeg" alt="House" />
                  <CardBody>
                    <Row>
                      <Col className="text-left">
                        <CardTitle>$3,500</CardTitle>
                        <CardSubtitle>Lekki, Lagos</CardSubtitle>
                      </Col>
                      <Col>
                      <Button color="success">View Property</Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col>4 Beds</Col>
                      <Col>5 Baths</Col>
                      <Col>5 Toilets</Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_1.jpeg" alt="House" />
                  <CardBody>
                    <Row>
                      <Col className="text-left">
                        <CardTitle>$3,500</CardTitle>
                        <CardSubtitle>Lekki, Lagos</CardSubtitle>
                      </Col>
                      <Col>
                      <Button color="success">View Property</Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col>4 Beds</Col>
                      <Col>5 Baths</Col>
                      <Col>5 Toilets</Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </section>
           </div>
        {/* <div className="testimonials text-center mx-auto" style={{ marginBottom: '50px'}}>
          <h1 className="mb-4">What They Say About <span>Us</span> </h1> 
          <Swiper {...params}>
            <Card>
              <img className="mx-auto" src="/images/man.png" alt="Man" />
              <CardBody className="pb-0">
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
              <CardFooter>
                <b>John Doe</b>
              </CardFooter>
            </Card>
            <Card>
              <img className="mx-auto" src="/images/woman.png" alt="Woman" />
              <CardBody className="pb-0">
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
              <CardFooter>
                <b>John Doe</b>
              </CardFooter>
            </Card>
            <Card>
              <img className="mx-auto" src="/images/man.png" alt="Man" />
              <CardBody className="pb-0">
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
              <CardFooter>
                <b>John Doe</b>
              </CardFooter>
            </Card>
          </Swiper>
        </div> */}
        <div className="latest">
          <h1 className="mb-4 text-center">Latest News from <span>Us</span> </h1>
          <Container className=" d-flex">
            <Row>
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_1.jpeg" alt="House" />
                  <CardBody className="pb-0">
                    <CardTitle>Lorem Ipsum donor <br></br> sit amet</CardTitle>
                    <CardText> amet consectetur adipisicing elit. Illo deserunt expedita distinctio numquam.</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button color="success"><i>Read More</i></Button>
                  </CardFooter>
                </Card>
              </Col>
            
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_1.jpeg" alt="House" />
                  <CardBody className="pb-0">
                    <CardTitle>Lorem Ipsum donor <br></br> sit amet</CardTitle>
                    <CardText> amet consectetur adipisicing elit. Illo deserunt expedita distinctio numquam.</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button color="success"><i>Read More</i></Button>
                  </CardFooter>
                </Card>
              </Col>
            
              <Col className="">
                <Card>
                  <CardImg top width="100%" className="rounded" src="/images/house_1.jpeg" alt="House" />
                  <CardBody className="pb-0">
                    <CardTitle>Lorem Ipsum donor <br></br> sit amet</CardTitle>
                    <CardText> amet consectetur adipisicing elit. Illo deserunt expedita distinctio numquam.</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button color="success"><i>Read More</i></Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          
          </Container>
        </div>
        <div className="subscribe flex-column d-flex justify-content-center align-items-center">
          <h4>Special Hotel Deals and Offer</h4>
          <p>Enter your email address to receive secret hot deals</p>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="email" placeholder="Enter your email address" />
            </FormGroup>
            <Button>Subscribe</Button>
          </Form>
          
        </div>
      </Fragment>
    );
  }
}

export default App;
