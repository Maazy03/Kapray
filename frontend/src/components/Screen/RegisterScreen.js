import React, { useState, useEffect } from 'react';
import styles from './Register.module.css';
import { Link } from "react-router-dom";
import { register } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux';



function RegisterScreen(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ repassword, setrePassword] = useState('')
    
    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo, error } = userRegister
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
        dispatch(register(name,email, password))
    }
console.log("hello1213",userInfo)
    return (

        <div style={{ marginTop: "6rem" }} >
            <h1 style={{ textAlign: "center" }}>SIGN UP</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <ul className={styles.formcontainer}>
    <li>{loading && <div>loading...</div>}</li>
             {error && <div>{error}</div>}
             <li>
                        <label>
                            Name
    </label>
                        <input type="name" name="email" id="email" onChange={(e) => setName(e.target.value)} />
                    </li>
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
                        <label>
                            Confirm Password
    </label>
                        <input type="password" name="repassword" id="repassword" onChange={(e) => setrePassword(e.target.value)} />
                    </li>
                    <li>
                        <button type="submit" className={styles.Registerbutton} >LOGIN</button>
                    </li>
                    <li>
                        Already have an account? <Link to="/signin" style={{ color: "white" }} >Sign In</Link>

                    </li>
                    
                </ul>
            </form>



            <footer className={styles.footer}>
                All right reserved
        </footer>

        </div>
    )
}

export default RegisterScreen;