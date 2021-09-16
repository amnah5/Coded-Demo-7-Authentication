import React from 'react';

export default function CourseItem(props) {
  const course = props.course;
  return (
    <div class="col-xl-4 col-lg-4 col-md-6">
      <div class="single-course wow fadeInUp" data-wow-delay=".2s">
        <div class="course-img">
          <a href="course-single.html">
            <img src={course.image} alt="" />
          </a>
        </div>
        <div class="course-info">
          <h4>
            <a href="course-single.html">{course.title}</a>
          </h4>
          <div class="course-meta">Instructor : {course.instructor}</div>
        </div>
      </div>
    </div>
  );
}
