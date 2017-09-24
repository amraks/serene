import React from 'react';
import { Modal, Button, Popover, Navbar, Tooltip, OverlayTrigger, Form, FormGroup, FormControl, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Login extends React.Component {

  constructor(props, ctx) {
      super(props);
      console.log('login constructor called');
      this.login = this.login.bind(this);
  }

  login() {
    console.log('Logging user in');
    console.log('email:', this.refs.email.value);
    console.log('passwd:', this.refs.password.value);
  }

  render() {
    console.log('Login modal render');
    return (
      <Modal show={this.props.showLoginCallback()} onHide={this.props.setLoginModalStateCallback}>
        <Modal.Header closeButton>
          <Modal.Title>Log into your account!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Navbar.Form>
            <Form horizontal onSubmit={this.login}>
              <FormGroup>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Email" ref="email" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" ref="password" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={10}>
                  <Button type="submit">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </Navbar.Form>
          <Link to="/signup">
            Don't have an account? Sign up
          </Link>
        </Modal.Body>
      </Modal> 
    ) 
  }
}
