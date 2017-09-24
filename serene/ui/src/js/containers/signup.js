import React from 'react';
import { Col, Form, FormControl, FormGroup, Navbar, Modal, Button} from 'react-bootstrap';

export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    console.log('signup init history', this.props.history);
    this.close = this.close.bind(this);
    this.signup = this.signup.bind(this);
  }

  close() {
    console.log('signup close history', this.props.history);
    this.props.history.goBack();
  }

  signup() {
    console.log('signup submit');
  }

  render() {
    return (
      <Modal show={true} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Navbar.Form>
            <Form horizontal onSubmit={this.signup}>
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
        </Modal.Body>
      </Modal>
    )
  }
}

