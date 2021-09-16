# DEMO-NAME

Courses Solution.

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

1- Create Signin/Signup buttons in Navbar with thier modals
<br/>
2- Create Forms with username and password fields
<br/>
3- Create authStore and a signup method
<br/>
4- Create handleSubmit method with authStore.signup
<br/>
5- Create instance.js in authStore, import it and use it in authStore and courseStore
<br/>
6- Create sign in method and use it in the modal
<br/>
7- Install jwt-decode and use it in authStore
<br/>
8- Create user state in authStore and set the inital value to null
<br/>
9- Import authStore in Navbar and create a condition to check for a user and change the buttons to welcome + username and change nav to observable
<br/>
10- Do the same in CoursesList for the add course button
<br/>
11- Create setUser function in authStore and set the headers
<br/>
12- Create Signout method in authStore and button in navbar
<br/>
13- Save the token in localStorage in setUser method
<br/>
14- Create the checkForToken method that compares the exp date and call it
<br/>
15- Remove the token from localStorage in the signout method

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
