import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityData: [],
            showModal: false
        }
    }

    getData = async (e) => {
        e.preventDefault();
        let q1 = document.getElementById('control').value;
        if (q1.toUpperCase() === 'US') {
            let url = `${process.env.SEARCHURL_US}key=${process.env.TOKEN}q=${q1}`;
            axios.get(url);
        } else if (q1.toUpperCase() === 'EUROPE') {
            let url = `${process.env.SEARCHURL_EU}key=${process.env.TOKEN}q=${q1}`;
            axios.get(url);
        } else { return alert(" error: Unable to geocode "); }
    }

    handleClose = () => {
        this.setState({ showModal: false })
      }

    render() {
        return (
            <>
                <Form className='form'>
                    <Form.Group className="mb-3" >
                        <Form.Label>City Explorer: </Form.Label>
                        <Form.Control id="control" type="explorer" placeholder="Enter city name ..." />
                    </Form.Group>
                    <Button onSubmit={(e) => { this.getData(e) }} className='button' variant="primary" type="submit">
                        Explorer!
                    </Button>
                </Form>

                <Modal show={this.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Main;