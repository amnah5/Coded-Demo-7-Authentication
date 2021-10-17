import { makeAutoObservable } from "mobx";
import api from "./api";

class CourseStore {
  courses = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  createCourse = async (course) => {
    try {
      const res = await api.post("/courses", course);
      this.courses.push(res.data);
    } catch (error) {
      console.log("CoursesStore -> createCourse -> error", error);
    }
  };

  fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      this.courses = response.data;
    } catch (error) {
      console.error("CoursesStore -> fetchCourses -> error", error);
    }
  };
}
const courseStore = new CourseStore();
courseStore.fetchCourses();
export default courseStore;
