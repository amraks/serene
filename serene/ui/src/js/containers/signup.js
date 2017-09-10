import React from 'react';
import { Col, Form, FormControl, FormGroup, Navbar, Modal, Button} from 'react-bootstrap';

export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {show: true};
  }

  close() {
    this.setState({show: false});
  }

  signup() {
    console.log('signup submit');
  }

  render() {
    if (!this.state.show) {
      this.props.history.goBack();
    }

    return (
      <Modal show={this.state.show} onHide={this.close}>
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

