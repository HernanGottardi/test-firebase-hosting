import React from "react"
import {SearchForm} from "./SearchForm"
import { Outlet } from "react-router-dom";


export function Layout()
{

  return (
  <div>
    <header>
      <SearchForm/>
    </header>
    <Outlet></Outlet>
  </div>
  )
}

