# Todo App
A simple Todo-List Application

## Project Description
This project is to help showcase understanding of API design and Database Design. The major goal is to learn how to consume API at the backend and rendering the call on the frontend, including helping to understand how to build a scalable software for future purpose.

### This project was built with the following technology;

* For Frontend: React (JS Library) and you can run command `npm install` and `npm start`. Also Install the following for API calls `Axios`, for react-external-link `npm i react-external-link`. For styling `CSS` was used.
* Backend: Built with python and hosted seperately you can click [here](https://github.com/osadolortech/TodoApi) for the repo and the documentation.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000] to view it the your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

* `api/axios.js` - A created baseURL for api axiosInstance call which can always be imported anywhere for functional use. 
```javascript 
import axios from 'axios'

const BaseURL = "https://robottodoapi.herokuapp.com/api/v1/todo/"

const axiosInstance = axios.create({
    baseURL: BaseURL
})

export default axiosInstance

```
* `src/components/GetTasks.js` - A Component that holds part of its function that deletes. 
```javascript
import { useState } from "react";
import axiosInstance from "../api/axios";

const GetTasks = ({ getTask, todos }) => {
  const [selected, setSelected] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(id + "/");
      getTask();
    } catch (error) {
      console.log(error);
    }
  };
```

## Project Link
API URL: [https://robottodoapi.herokuapp.com/api/v1/todo/]


## Solution
Live Solution URL: [https://react-todo-app-six-delta.vercel.app/]


## Contributors/Reviewers
* Frontend by [Ponmile](https://github.com/pjmiles) 
* API by [Osadolortech](https://github.com/osadolortech)
* Reviewer [Asylcreek](https://github.com/Asylcreek)
