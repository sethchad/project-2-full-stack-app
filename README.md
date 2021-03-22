# Project 2 - Full Stack Application 

## Project Description
This full stack application keeps track of a to-do list for multiple users in different groups, and allows tasks to be created, assigned, and completed. 

## Project Links
- [Github Repo](https://github.com/sethchad/project-2-full-stack-app)
- [Deployed Site](https://seth-chadwick-task-app.herokuapp.com/)

## Wireframe
![Wireframe of Task App](https://github.com/sethchad/project-2-full-stack-app/blob/main/images/task_app_wireframe.jpg)

## User Stories
1. As an unregistered user, I want to be able to create an account and see the task list.
2. As a registered user, I want to be able to sign in and see the full task list. 
3. As a registered user, I want to be able to sign in and see what tasks I created. 
4. As a registered user, I want to be able to change my username and password. 
5. As a registered user, I want to be able to sign in and change my personal information. 
6. As a registered user, I want to be able to add a new task to the list.
7. As a registered user, I want to be able to complete a task from the list. 
8. As a registered user, I want to be able to edit a task. 
9. As a registered user, I want to see what group I'm in, and who else is in that group. 
10. As a registered user, I want to see what otehr groups are available, and who is in them.
11. As a registered user, I want to be able to create a new group, and move myself to that group. 
12. As a registered user, I want to be able to delete my account. 

## Technologies
- Node.js
- Express
- EJS
- EJS Partials
- Sequelize
- User Authentication using bcrypt and JWT (implemented, but deactivated)

## Approach
I wanted to create a useful app, and a to-do list (in this deployment, using household chores as the example) that multiple people have access to, where tasks can be created, assigned to someone, and completed, seemed to fill a need. In a household with more than one person, there are often chores or tasks that are added by one person, and completed by another. Having a way to track what needs to be done and by who is very useful, and also translatable to any situation with multiple users and multiple tasks. Users can also assigned to a group, in this deployment, I used the Brady Bunch family, and divided users into "Brady Ladies" and "Brady Gentleman", and a user can see which group they are assigned to and change that assignment. This is conceptually the same managing business tasks, such as multiple shifts of employees in a warehouse, and the tasks are picks that need to be completed. 

While a user can easily see what tasks they added to the list (on their profile page), I ran into difficulty in the join table that links users to assigned tasks. While the join table is separate from the User or Task tables, the association overrode the data of who created the task, so I was able to see one but not the other. The migration and model to generate the UserTasks join table are still in the code, but the associtations in the User and Task model have been commented out. 

Additionally, the packages and code for JWT Authentication are in place, with signup and login routes running through the authController, and authenticated routes and JWT tokens. These have been tested and do work, but have been commented out for ease of demonstrating app functionality in class, since I would not have been able to use sequelize seeder files for adding users. 

