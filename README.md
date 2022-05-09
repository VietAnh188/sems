# SYSTEM INTEGRATION PRACTICES

# DUY TAN UNIVERSITY

## SEMS PROJECT

### AUTHOR

-   Anh, Le Viet

### UI/UX DESIGN

-   https://www.figma.com/community/file/1101191280311497100

### BUILT WITH

This section will list the main frameworks/libraries used in the project. Here are some specific examples:

-   [React.js](https://reactjs.org/)
-   [Redux.js](https://redux.js.org/)
-   [React-router-dom](https://reactrouter.com/)
-   [Sass](https://sass-lang.com/)
-   [Node.js](https://nodejs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [express.js](https://expressjs.com/)
-   [typeorm](https://typeorm.io/)

### SYSTEM REQUIREMENTS:

Installed Nodejs, npm or yarn

### GETTING STARTED

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### BACKEND API

-   Auth

|  #  | Http method | Api                | Description          |
| :-: | :---------- | :----------------- | :------------------- |
|  1  | post        | /api/auth/login    | login                |
|  2  | post        | /api/auht/register | create a new account |

-   Department

|  #  | Http method | Api                               | Description                                                              |
| :-: | :---------- | :-------------------------------- | :----------------------------------------------------------------------- |
|  1  | get         | /api/department                   | get all existing department in database                                  |
|  2  | get         | /api/department/:id               | get one existing department in database                                  |
|  3  | get         | /api/department/:id/persons       | get all person whose department id is equal to id                        |
|  4  | get         | /api/department/group/gender      | response an array grouped by gender of all person in the department      |
|  5  | get         | /api/department/group/workingtype | response an array grouped by workingtype of all person in the department |
|  6  | post        | /api/department                   | create a new department                                                  |
|  7  | put         | /api/department/:id               | update department                                                        |
|  8  | delete      | /api/department/:id               | delete department                                                        |

-   Role

|  #  | Http method | Api           | Description       |
| :-: | :---------- | :------------ | :---------------- |
|  1  | post        | /api/role     | create a new role |
|  2  | put         | /api/role/:id | update role       |
|  3  | delete      | /api/role/:id | delete role       |

-   Person

|  #  | Http method | Api                                            | Description                                        |
| :-: | :---------- | :--------------------------------------------- | :------------------------------------------------- |
|  1  | get         | /api/person                                    | get all existing person in database                |
|  2  | get         | /api/person/:id                                | get one person                                     |
|  3  | get         | /api/person/search                             | this api used for search feature in frontend       |
|  4  | get         | /api/person/group/hiring                       | response an array grouped by hiring (month , year) |
|  5  | post        | /api/person                                    | create a new person                                |
|  6  | put         | /api/person/:personId/account/:accountId       | connect person to account                          |
|  7  | put         | /api/person/:personId/department/:departmentId | connect person to department                       |
|  8  | put         | /api/person/:personId/ethnicity/:ethnicityId   | connect person to ethnicity                        |
|  9  | put         | /api/person/:personId/role/:roleId             | connect person to role                             |
| 10  | put         | /api/person/:id                                | update person                                      |

-   Ethnicity

|  #  | Http method | Api                        | Description                            |
| :-: | :---------- | :------------------------- | :------------------------------------- |
|  1  | get         | /api/ethnicity/all/persons | reponse all person with all ethnicity  |
|  2  | get         | /api/ethnicity/:id/persons | response all persons in a ethnicity    |
|  3  | get         | /api/ethnicity             | get all existing ethnicity in database |
|  4  | post        | /api/ethnicity             | create new ethnicity                   |
|  5  | put         | /api/ethnicity/:id         | update a ethnicity                     |
|  6  | delete      | /api/ethnicity/:id         | delete a ethnicity                     |
