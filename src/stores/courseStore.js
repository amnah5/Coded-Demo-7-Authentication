import { makeObservable, observable, action } from 'mobx';
import instance from './instance';
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
      const res = await instance.post('/courses', course);
      this.courses.push(res.data);
    } catch (error) {
      console.log('CoursesStore -> createCourse -> error', error);
    }
  };

  fetchCourses = async () => {
    try {
      const response = await instance.get('/courses');
      this.courses = response.data;
    } catch (error) {
      console.error('CoursesStore -> fetchCourses -> error', error);
    }
  };
}
const courseStore = new CourseStore();
courseStore.fetchCourses();
export default courseStore;
