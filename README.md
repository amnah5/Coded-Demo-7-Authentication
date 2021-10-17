# DEMO-NAME

Courses.

## What is this demo?

Courses website where you can add a course as an instructor.

## What are the objectives?

Student should learn how to login/signup with the backend and deal with jwt tokens and persistend logins.

## Backend

Link: https://demo-7-authentication-be.herokuapp.com
<br/>
Endpoints:
<br/>
get /courses , fetchCourses
<br/>
post /courses , createCourse
<br/>
post /signup , signup
<br/>
post /signin , signin

## Steps

1. explore the code/app
2. Create authStore and a signup method
3. `import { observable, makeAutoObservable, action } from 'mobx';`
4. `import axios from "axios";`
5. create user= null
6. constructor
7. sign up , test it 
8. lets put all axios in one place 
9. create instance and import it in course and auth stores
10. we see token , i need to save it and send it all the time with the next api
11. `yarn add jwt-decode`
12. create set user method 
13. go to nav check for a user to show sign out instead of in


## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
