import css from "./App.module.scss"
import {Link, Outlet} from "react-router-dom";
import React from "react";

const Routes = {
  ABOUT: "/about",
  SHOP: "/shop",
  CART: "/cart",
}

export const App = () => {
  return (
    <>
      <Link to={Routes.ABOUT}>About</Link>
      <br/>
      <Link to={Routes.SHOP}>Shop</Link>
      <br/>
      <Link to={Routes.CART}>Cart</Link>
      <button className={css.button}>22</button>
      <Outlet/>
    </>
  )
}

