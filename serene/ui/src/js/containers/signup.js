import React from 'react';
import { Modal, Button, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    console.log(props.showModal());
  }

  close() {
    this.props.toggleModal();
  }

   componentWillUnmount() {
     console.log('will unmount');
   }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <Modal show={this.props.showModal()} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Sign Up Now</p>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" onClick={this.close}>
              <Link to="/">Close</Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

