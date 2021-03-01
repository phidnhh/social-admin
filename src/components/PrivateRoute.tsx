import React from 'react'
import { Route, RouteProps } from "react-router-dom";
import { Login } from '../pages/Account';

export const PrivateRoute = ({children, ...res}: RouteProps): JSX.Element => {
  return (
    <Route render={() => true? children: <Login/>}></Route>
  )
}
