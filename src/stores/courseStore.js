import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class CourseStore {
  courses = [];

  constructor() {
    makeObservable(this, {
      courses: observable,
      createCourse: action,
      fetchCourses: action,
    });
  }

  createCourse = async (course) => {
    try {
      const res = await axios.post(
        'https://demo-7-authentication-be.herokuapp.com/courses',
        course
      );
      this.courses.push(res.data);
    } catch (error) {
      console.log('CoursesStore -> createCourse -> error', error);
    }
  };

  fetchCourses = async () => {
    try {
      const response = await axios.get(
        'https://demo-7-authentication-be.herokuapp.com/courses'
      );
      this.courses = response.data;
    } catch (error) {
      console.error('CoursesStore -> fetchCourses -> error', error);
    }
  };
}
const courseStore = new CourseStore();
courseStore.fetchCourses();
export default courseStore;
