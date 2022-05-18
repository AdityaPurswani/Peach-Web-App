import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();


    const signIn =() => {
        //Sign In the user
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            // console.log(result.user)
        }).catch(err => alert(err.message));
    };
    return (
        <div className="login" width="400px" height="700px" style={{border: '1px solid #ff7c4e'}}>
            <div className="login__logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bopiCB8aLHxtAmhoZKcUIv0YqjNVOrMMOXzDAEcuKwXDrTpElQbFYnENaTwpxq8IivY&usqp=CAU" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            
            </Button>
        </div>
        
    )
}

export default Login
