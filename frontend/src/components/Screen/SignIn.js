import React, { useState, useEffect } from 'react';
import styles from './Signin.module.css';
import { Link } from "react-router-dom";
import { signin } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux';



function SignIn(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userSignin = useSelector(state => state.userSignin)
    const { loading, userInfo, error } = userSignin
    const dispatch = useDispatch();
       
useEffect(() => {
 if(userInfo)
{
    props.history.push("/")
}
        return () => {
            //
        }
    }, [userInfo])

    const submitHandler = (event) => {
       event.preventDefault();
        dispatch(signin(email, password))
    }

    return (

        <div style={{ marginTop: "6rem" }} >
            <h1 style={{ textAlign: "center" }}>SIGN IN</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <ul className={styles.formcontainer}>
    <li>{loading && <div>loading...</div>}</li>
             {error && <div>{error}</div>}
    
                    <li>
                        <label>
                            Email
    </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </li>
                    <li>
                        <label>
                            Password
    </label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </li>
                    <li>
                        <button type="submit" className={styles.Signinbutton} >LOGIN</button>
                    </li>
                    <li>
                        New to Amazona?

                    </li>
                    <li>
                        <button className={styles.Signupbutton}>  <Link to="/register" style={{ color: "white" }} >Sign Up</Link></button>
                    </li>
                </ul>
            </form>



            <footer className={styles.footer}>
                All right reserved
        </footer>

        </div>
    )
}

export default SignIn;