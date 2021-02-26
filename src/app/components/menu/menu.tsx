import React from 'react'
import {style} from './style'
import CreateMenu from './createMenu'
import AddMenuItem from './addMenuItem'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { withRouter, RouteComponentProps } from "react-router";

const Menu=()=>{
    return(
        <div><p style={style.header}>MENU</p>
        <p style={style.orderOnline}>Get orders online</p>
        <CreateMenu />
        </div>
    )
}
export default withRouter(Menu)