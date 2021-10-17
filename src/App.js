import "./App.css";
import "./assets/css/bootstrap-5.0.5-alpha.min.css";
import "./assets/css/animate.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/style.css";
import "./assets/css/style.css.map";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import CoursesList from "./Components/CoursesList";
import { Route, Switch } from "react-router";
function App() {
  //   Link: https://demo-7-authentication-be.herokuapp.com
  // Endpoints:
  // get /courses , fetchCourses
  // post /courses , createCourse
  // post /signup , signup
  // post /signin , signin

  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/courses">
          <CoursesList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
