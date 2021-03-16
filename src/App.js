import * as React from "react";
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Header from '../src/components/Header'; 
// import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import {UserList} from './posts';
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <ToastProvider>
    <Router>
      <Switch>
        <Route path='/' component={Header}/>
      </Switch>
    </Router>
    
  </ToastProvider>
  
  // <Admin dataProvider={dataProvider}>
  //   <Resource name="users" list={UserList}/>
  //   <Resource name="posts" list={ListGuesser} />
  // </Admin>
);

export default App;