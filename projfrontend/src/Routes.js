import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AWS from "./user/AWS"
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/Photos";
import Selectedphotos from "./user/Selected";
import Videos from "./user/Video";
import AdminDashBoard from "./admin/AdminDashBoard";
import UserSelectedImages from "./admin/UserSelectedImages"
import userEdit from "./admin/userEdit"
import AddMoreImages from "./admin/addMoreImages"
import { signin } from "./auth/helper";
// import { signin } from "./auth/helper";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/AWS" exact component={AWS} />
        <Route path="/home" exact component={Home} />
        <Route path="/addcustomer" exact component={AWS} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/user/dashboard" exact component={UserDashBoard} />
       
        <PrivateRoute path="/userImages" exact component={UserDashBoard} />
        <PrivateRoute path="/user/selected" exact component={Selectedphotos} />
        <PrivateRoute path="/user/videos" exact component={Videos} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/userSelectedImages/:userId" exact component={UserSelectedImages} />
        <AdminRoute path="/userEdit/:userId" exact component={userEdit} />
        <AdminRoute path="/userAddImages/:userId" exact component={AddMoreImages} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;