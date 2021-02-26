import React from 'react'
import {style} from './style'
import CreateMenu from './createMenu'

const Menu=()=>{
    return(
        <div><p style={style.header}>MENU</p>
        <p style={style.orderOnline}>Get orders online</p>
        <CreateMenu />
        </div>
    )
}
export default Menu