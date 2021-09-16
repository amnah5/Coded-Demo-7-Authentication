import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import courseStore from '../stores/courseStore';

export default function AddCourseModal(props) {
  const [course, setCourse] = useState({
    title: '',
    image: '',
  });
  const handleChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    courseStore.createCourse(course);
    props.closeModal();
  };
  return (
    <Modal
      show={props.isOpen}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Course title</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Enter course title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="image"
              placeholder="Enter image url"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          Add Course
        </Button>
        <Button variant="warning" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
