import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './daleel.png';
import oracle_header from './oracle_slide.jpg';
import aldaleel_header from './aldaleel_slide.png';
import odoo_header from './odoo_header.jpg';
import partners from './partners.jpg';
import fujitsu from './fujitsu-logo.png';
import oracle from './oracle-gold-partner.png';
import dell from './dell-logo.png';
import odoo from './odoo-partner.png';
import profinch from './profinch.png';
import aldaleel_solutions from './aldaleel-solution.png';
import core_banking from './core-banking.jpg';
import dell_slide from './dell_slide.jpg';
import fujitsu_logo from './fujitsu_slide.jpg';
import {Grid,Label,Navbar,NavDropdown,NavItem,MenuItem,Nav,ButtonGroup,DropdownButton,Well,Carousel,Button,ListGroup,ListGroupItem,Panel,PageHeader,Image,Media} from 'react-bootstrap';
import { Col, Container, Row, Footer, MDBBtn, MDBListGroup, MDBListGroupItem, MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import TabsPage from "./TabsPage";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Route,Switch,Redirect,withRouter} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { SocialIcon } from 'react-social-icons';
import ReactLoading from 'react-loading';

class App extends Component {
    constructor(props) {
    super(props);
    this.scrollTo = React.createRef();
    this.state = {
        date: new Date()
    };
//     this.scrollDown = this.scrollDown.bind(this);
//     this.scroll = this.scroll.bind(this);
  }

//   scrollDown(){
//       ReactDOM.findDOMNode(this.scrollTo).scrollIntoView({block: 'end', behavior: 'smooth'});
//   }


//   scroll(e){
//     e.preventDefault();
//     h = document.documentElement.scrollHeight;
//     y += step;
//      window.scrollBy(0, step)
//      if(y >= h )
//        {clearTimeout(t); y = 0; return;}
//      t = setTimeout(function(){scroll()},20);
//
//   }




  render() {

      class Home extends React.Component{
        constructor(props) {
            super(props);
            this.scrollTo = React.createRef();
            this.state = {
                date: new Date()
            };
        }
        componentDidMount(){

        }
        render(){
          const Example = ({ type, color }) => (
              <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
          );
            return(
                <div className="App">
                <SocialIcon url="https://github.com/AldaleelAlraqme" />
                |
                <SocialIcon url="https://www.linkedin.com/company/aldaleel-raqamee-for-it-gis" />
                <header className="App-header" style={{'textAlign':'center'}}>
          <Carousel style={{'position':'relative','top':-100}} indicators={true} controls={true} interval={5000}>
                <Carousel.Item>
                    <img  alt="900x500" src={aldaleel_solutions} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  alt={Example} src={core_banking} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  alt={Example} src={dell_slide} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  alt={Example} src={odoo_header} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  alt={Example} src={fujitsu_logo} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
          <a className="scroll" href="#cont"><span className="span"></span><span className="span"></span><span className="span"></span></a>

          </header>



          {/*<Grid style={{border: '2px solid',display: 'flex', justifyContent: 'center'}} ref={this.scrollTo} id="grid">
            <Row className="show-grid">
                <Col sm={6} md={3} style={{display: 'flex', justifyContent: 'center', padding:10, margin:10}}>*/}
                <MDBContainer id="cont">
                  <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                    <MDBCarouselInner>
                      <MDBCarouselItem itemId="1">
                        <MDBView>
                          <h3 className="h3-responsive" style={{'color':'white'}}>WHO ARE WE</h3>
                          <Well style={{'textAlign':'left','font-size':'25px'}}>A Libyan limited liability company founded in 2013 specialized in the integration
                          and linking of information technologies and geographic information systems
                          according to the latest standards and techniques to serve government institutions
                          and the private sector.
                          Aldaleel pursues the goal of establishing a beneficial partnership with its suppliers
                          and clients</Well>
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="2">
                        <MDBView>
                          <h3 className="h3-responsive" style={{'color':'white'}}>OUR GOALS</h3>
                          <Well style={{'textAlign':'left','font-size':'25px'}}>One main goal is to set up a mechanism by which government organizations can
                          utilize modern technology to run their business in a smooth manner so to integrate
                          to e-government setup.</Well>
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                        <MDBView>
                          <h3 className="h3-responsive" style={{'color':'white'}}>COMPANY POLICY</h3>
                          <Well style={{'textAlign':'left','font-size':'25px'}}>With professional planning and continuous effort we have been able to provide state
                          of the art technology solutions that are needed by public and private organizations
                          that are also suitable for large and small enterprises to help in facilitating business
                          through technological solutions that link different departments to accelerate
                          communication through available applications which helps management in their
                          decision making process “needed information at the right time”.</Well>
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="4">
                        <MDBView>
                          <h3 className="h3-responsive" style={{'color':'white'}}>OUR METHODOLOGY</h3>
                          <Well style={{'textAlign':'left','font-size':'25px'}}>AL DALEEL Company, is committed to provide high-quality services and solutions
                          that meet the needs and expectations of our customers through the following:
                          <ul>
                          <li>Building the capabilities of the company staff and engaging them in the areas
                          of their technical specialties as work require.</li>
                          <li>Contribute to the continuous development of the staff of organizations whose
                          we build their systems, or those that request our services.</li>
                          <li>Applying best practices in business management and professional services.</li>
                          <li>Keep close continues contact with our customers.</li>
                          <li>Establishing partnership with international venders so to provide our clients
                          with the best and latest technology and the required technical support as best
                          as it may be provided.</li>
                          </ul>
                          </Well>
                        </MDBView>
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBContainer>



          <h4><Label bsStyle="primary">Our Partners</Label></h4>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Carousel style={{'backgroundColor':'#baafae',margin:25,padding:10,'maxWidth':900}}>
                <Carousel.Item>
                    <img width={450} height={250} alt="900x500" src={oracle} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={450} height={250} alt="900x500" src={odoo} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={450} height={250} alt="900x500" src={fujitsu} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={450} height={250} alt="900x500" src={dell} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={450} height={250} alt="900x500" src={profinch} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <ScrollUpButton />
          </div>
          </div>
            );

        }
    }


        var step = 20;
        var h,t;
        var y = 0;

        function SmoothScrollDown()
        {
            h = document.documentElement.scrollHeight;
            y += step;
            window.scrollBy(0, step)
            if(y >= h )
                {clearTimeout(t); y = 0; return;}
            t = setTimeout(function(){SmoothScrollDown()},20);
        }

        class Test extends React.Component{
            render(){
                return(
                    <div>this workks</div>
                );
            }
        }

        class Services extends React.Component{
            render(){
                return(
                    <div>
                        <Image alt="900x500" src={aldaleel_solutions} thumbnail style={{textAlign:"center"}}/>
                        <PageHeader>
                            Technical Solutions <small>Services</small>
                        </PageHeader>
                        <Media>
                            <Media.Left>
                            <img width={64} height={64} alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                            <Media.Heading>Technical Solutions</Media.Heading>
                            <p>
                                As technology continues to strengthen our world, Digital Directory continues to develop and refine advanced technologies to help you achieve more productive and effective technical solutions and to help you manage your fleet of equipment and processes with high efficiency.
                            </p>
                            </Media.Body>
                        </Media>
                        <Well>
                            <p>
                                As technology continues to strengthen our world, Digital Directory continues to develop and refine advanced technologies to help you achieve more productive and effective technical solutions and to help you manage your fleet of equipment and processes with high efficiency.
                            </p>
                            <p>
                                From software solutions to micro-enterprises, to providing optimal solutions in the integration of enterprise management
                            </p>
                            <p>
                                Since its establishment, Aldaleel tech Company has achieved a great success in laying the foundations for building an integrated system suitable for preparing institutions and public places through providing advisory services, technical solutions support according to the best standards.
                            </p>
                        </Well>
                        <PageHeader>
                            Technology <small>Services</small>
                        </PageHeader>
                        <Well>
                            <p>
                                Aldaleel  Company provides support services and technical support through the conclusion of contracts with the parties, which made us distinguished in this area. The technical support service is provided either by e-mail, by telephone or by Remote access or by field visit at all times 24/24
                            </p>
                            <p>
                                Through our partnership with Oracle  International, we can provide technical solutions for infrastructure
                            </p>
                            <p>
                                and provide the best financial solutions and the system of consolidation of departments in a single system for public and private institutions
                            </p>

                        <Panel>
                            <Panel.Body>Among our services we offer in order to satisfy you, including:</Panel.Body>
                        </Panel>
                        <ListGroup>
                            <ListGroupItem>Design and installation of systems, databases, computer networks, communications and systems programming for public and private institutions and companies</ListGroupItem>
                            <ListGroupItem>Support services, technical support and after sales services</ListGroupItem>
                            <ListGroupItem>Supply and installation of all equipment, devices and applications of Oracle International Corporation as Aldaleel tech Company is a golden partner of Oracle International GPS mapping</ListGroupItem>
                            <ListGroupItem>Provide GIS services by subscribing to the Aldaleel Cloud</ListGroupItem>
                            <ListGroupItem>Providing support and consulting in the field of information technology, training and qualification of elements and preparation of technical studies</ListGroupItem>
                            <ListGroupItem>Contracting with national and foreign elements to carry out technical works that require special expertise</ListGroupItem>
                            <ListGroupItem>Holding exhibitions, seminars, conferences and workshops in coordination with the relevant authorities.</ListGroupItem>
                        </ListGroup>
                        </Well>
                    </div>
                );
            }
        }

    return (
      <div >
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#aldaleel"><img src={logo} alt="logo" style={{height:25,top:0,left:0}}/></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                <NavItem eventKey={1} href="#">
                    Solutions
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Projects
                </NavItem>
                <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Our Partners</MenuItem>
                    <MenuItem eventKey={3.2}>Our Vision</MenuItem>
                    <MenuItem eventKey={3.3}>News</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>About</MenuItem>
                </NavDropdown>
                <LinkContainer to="/services">
                        <MenuItem eventKey={3.1}>Services</MenuItem>
                </LinkContainer>
                </Nav>
                <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Contact us
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Support
                </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>



        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            {/*<Route path="/services" render={home_header} />
            <Route path="/build/login" component={Login} />
            <Route path="/build" component={Welcome}/>
            <Route path="*" render={alert404} />*/
}
        </Switch>

        <Footer color="grey" className="font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-left">
                <Row style={{'font-size':'20px'}}>
                <Col md="6">
                <h5 className="title">Contact Us</h5>
                <p>
                    15 Yousef eben Tashefeen , Hai Alandalus Street, Gorgee Road, Tripoli, Libya

                    P.O Box:93533

                    T/F: +218 21 477 4882 Ex.:12
                </p>
                <p>info@aldaleel.ly</p>
                </Col>
                <Col md="6">
                <h5 className="title">Links</h5>
                <ul>
                    <li className="list-unstyled">
                    <a href="https://aldaleel.ly/osticket">Ticket System</a>
                    </li>
                    <li className="list-unstyled">
                    <a href="#!">Demo Request</a>
                    </li>
                </ul>
                </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://aldaleel.ly"> aldaleel.ly </a>
                </Container>
            </div>
        </Footer>
      </div>
    );
  }
}

export default App;
