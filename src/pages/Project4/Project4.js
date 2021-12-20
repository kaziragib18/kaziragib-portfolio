import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalP4 from '../ModalP4/ModalP4';

const Project4 = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="ModalBackground"
        >
            <Modal.Header closeButton className="modalHeader py-1">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <h3 className="textJustify headingText pt-2 text-white">Viberance</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="portfolio Background">
                <div className="row text-white">
                    <ModalP4 />
                </div>

            </Modal.Body>

        </Modal>
    );
}


export default Project4;