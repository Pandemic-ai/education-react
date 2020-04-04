import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Main from "./VIews/Main";
import Dashboard from "./VIews/Dasboard";
import Login from "./Auth/Login";
import Header from "./Layout/Header";
import Tutorial from "./VIews/Teacher/Tutorial";
import Note from "./VIews/Student/Note";
import Create from "./VIews/Student/Create";
import ClassMate from "./VIews/Student/ClassMate";
import Tutorial1 from "./VIews/Student/Tutorial";
import TutorialDetails from "./VIews/Student/TutorialDetails";
import Tutorial2 from "./VIews/Student/Tutorial2";
import AddStudent from "./VIews/Admin/AddStudent";
import AddTeacher from "./VIews/Admin/AddTeacher";
import Notification from "./VIews/Admin/Notification";
import Message from "./VIews/Admin/Message";
import Notificationlist from "./VIews/Student/Notificationlist";
import TeacherList from "./VIews/Student/TeacherList";
import Upload from "./VIews/Teacher/Upload";
import Notfound from "./VIews/Notfound";
import Results from "./VIews/Exam/Results";
import Question from "./VIews/Exam/Question";
import ExamList from "./VIews/Exam/ExamList";
import VirtualClass from "./VIews/VirtualClass/VirtualClassroom";
// import Calender from "./VIews/Admin/Calender";

import "./App.css";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback="loading">
          <BrowserRouter>
            {localStorage.getItem("Exam") ? (
              " "
            ) : (
              <Header loggedIn={localStorage.getItem("Token") != null} />
            )}

            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login/" component={Login} />
              <PrivateRoute path="/dashboard/" component={Dashboard} />
              <PrivateRoute path="/tutorial/" component={Tutorial} />
              <PrivateRoute path="/createnote/" component={Note} />
              <PrivateRoute path="/note/" component={Create} />
              <PrivateRoute path="/classmate/" component={ClassMate} />
              <PrivateRoute path="/list/tutorial/" component={Tutorial1} />
              <PrivateRoute path="/title/detail/" component={TutorialDetails} />
              <PrivateRoute path="/addstudent/" component={AddStudent} />
              <PrivateRoute path="/addteacher/" component={AddTeacher} />
              <PrivateRoute path="/chat/" component={Message} />
              <PrivateRoute path="/notification/" component={Notification} />
              <PrivateRoute path="/teacher/" component={TeacherList} />
              <PrivateRoute path="/classroom/" component={VirtualClass} />
              <PrivateRoute path="/upload/" component={Upload} />
              <PrivateRoute path="/second/tutorial/" component={Tutorial2} />
              <PrivateRoute path="/result/" component={Results} />
              <PrivateRoute path="/exam/question/" component={Question} />
              <PrivateRoute path="/list/exam/" component={ExamList} />
              <PrivateRoute path="*" component={Notfound} />

              {/* <PrivateRoute path="/calender/" component={Calender} /> */}
              <PrivateRoute
                path="/studentnotification/"
                component={Notificationlist}
              />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default App;
