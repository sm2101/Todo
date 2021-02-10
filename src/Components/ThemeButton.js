import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeTheme} from '../redux/actions'
const ThemeButton = () => {
    const dispatch = useDispatch()
    const {theme} = useSelector(state => ({...state}))
    return (
        <div className  = {theme.mode?"themebtn themebtn-light":"themebtn themebtn-dark"} onClick = {() => dispatch(changeTheme())}>
           {theme.mode?<i class="ms-Icon ms-Icon--ClearNight" aria-hidden="true"></i>:
            <i class="ms-Icon ms-Icon--Sunny" aria-hidden="true"></i>}

        </div>
    )
}

export default ThemeButton 
