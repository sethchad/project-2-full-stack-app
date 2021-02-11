# project-2-full-stack-app

## Packages
- npm init
- npm install 
- npm install express
- npm install ejs
- npm install method-override
- npm install nodemon -g
- npm install dotenv

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


