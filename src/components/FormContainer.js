import { render } from '@testing-library/react';
import { FiSend } from "react-icons/fi"
import React from 'react';
import { Navbar,Nav,NavDropdown, Modal, Form, Button } from 'react-bootstrap';

class FormContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen:false,
            form: {
                name: "",
                content: "",
            }
        }

        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalOpen(){
        this.setState({isModalOpen: true});
    }
    handleModalClose(){
        this.setState({isModalOpen: false});
    }
    handleInputChange = (item,e)=>{
        const inputs = Object.assign({},this.state.form)
        inputs[item] = e.target.value;
        this.setState({
            form: inputs
        });
    }
    handlePostSubmit = (e)=>{
        e.preventDefault();
        this.props.createPost(this.state.form)
        this.setState({
            form: {
                name:"",
                content:"",
            },
            isModalOpen: false
        })

    }
    

    render() {
        

        let modal;
        if (this.state.isModalOpen){
            modal = (
                
                <Modal.Dialog id="Modal" backdrop="true">
                    <Form>
                        <Modal.Header>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>name</Form.Label>
                                <Form.Control label="name" type="name" value={this.state.form["name"]}
                                    onChange = {(e) => this.handleInputChange("name",e)}
                                />
                            </Form.Group>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>content</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    label="content" type="content" value={this.state.form["content"]}
                                    onChange={(e) => this.handleInputChange("content",e)}
                                />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick = {this.handleModalClose}>Cancel</Button>
                            <Button variant="primary" type="submit" data-toggle="modal" data-target="#sampleModal" data-backdrop="true"
                                onClick = {(e) => this.handlePostSubmit(e)}>Go!</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Dialog>
                    
                
            );
        }
        return(
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">LTWU</Navbar.Brand>
                <Button variant="info" data-toggle="modal" data-backdrop="true" data-target="#Modal" data-backdrop="true" onClick={this.handleModalOpen}>New Post <FiSend /></Button>
                
            </Navbar>
            {modal}
            </>
        );
    }
}

export default FormContainer;