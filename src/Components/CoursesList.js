import React, { useState } from 'react';
import CourseItem from './CourseItem';
import { Button } from 'react-bootstrap';
import AddCourseModal from './AddCourseModal';
import courseStore from '../stores/courseStore';
import { observer } from 'mobx-react';
import authStore from '../stores/authStore';
function CoursesList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const courses = courseStore.courses.map((course) => (
    <CourseItem course={course} />
  ));
  return (
    <section id="courses" class="course-area pt-140 pb-170 hero-area bg_cover">
      <div class="container">
        {authStore.user && (
          <Button variant="warning" onClick={openModal}>
            Add Course
          </Button>
        )}

        <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
        <div class="row mb-30 mt-30">{courses}</div>
      </div>
    </section>
  );
}

export default observer(CoursesList);
