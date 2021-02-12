# Project 2 - Full Stack Application 

## Project Description
This full stack application keeps track of a to-do list for multiple users in different groups, and allows tasks to be created, assigned, and completed. 

## Project Links
- [Github Repo](https://github.com/sethchad/project-2-full-stack-app)
- [Deployed Site](https://seth-chadwick-task-app.herokuapp.com/)

## Wireframe
![Wireframe of Task App]()

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
- Sequelize
- User Authentication (partially implemented)

## Approach
I wanted to create a useful app, and a to-do list (in this deployment, using household chores as the example) that multiple people have access to, where tasks can be created, assigned to someone, and completed, seemed to fill a need. In a household with more than one person, there are often chores or tasks that are added by one person, and completed by another. Having a way to track what needs to be done and by who is very useful, and also translatable to any situation with multiple users and multiple tasks. Users can also assigned to a group, in this deployment, I used the Brady Bunch family, and divided users into "Brady Ladies" and "Brady Gentleman", and a user can see which group they are assigned to and change that assignment. This is conceptually the same managing business tasks, such as multiple shifts of employees in a warehouse, and the tasks are picks that need to be completed. 

While a user can easily see what tasks they added to the list (on their profile page), I ran into difficulty in the join table that links users to assigned tasks. While the join table is separate from the User or Task tables, the association overrode the data of who created the task, so I was able to see one but not the other. The migration and model to generate the UserTasks join table are still in the code, but the associtations in the User and Task model have been commented out. 

Additionally, the packages and code for JWT Authentication are in place, with signup and login routes running through the authController, and authenticated routes and JWT tokens. These have been tested and do work, but have been commented out for ease of demonstration of app functionality since I would not be able to use sequelize seeder files for adding users. These can be activated by commenting out the non-authenticated routes in the authController and usersController, and replacing the users controller route in the server.js file with the following line of code: 

```
app.use('/users', require('./controllers/usersController.js'));
```



- npm init
- npm install 
- npm install express
- npm install ejs
- npm install method-override
- npm install nodemon -g
- npm install dotenv
- npm install bcryptjs
- npm install jsonwebtoken cookie-parser

Sequelize
- npm install sequelize-cli sequelize pg
- npx sequelize init
- npx sequelize model:generate --name Task --attributes name:string,frequency:integer
- npx sequelize model:generate --name User --attributes nameFirst:string,nameLast:string,username:string,password:string,groupId:integer
- npx sequelize model:generate --name Group --attributes name:string
- npx sequelize model:generate --name UserTask --attributes userId:integer,taskId:integer
    * create model and migration files 
    * update migration files with defaultValues for createdAt and updatedAt columns
    * update static associations in model files 
- npx sequelize seed:generate --name demo-tasks
- npx sequelize seed:generate --name demo-users
- npx sequelize seed:generate --name demo-groups
    * add initial data to task, user, and group seed files
- npx sequelize db:migrate && npx sequelize db:seed:all
    * create the database tables and seed with intial data
    * To back out migrations and seeding--> npx sequelize db:migrate:undo:all


