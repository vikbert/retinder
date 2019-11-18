import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from "../../stores/userWidget";

const Login = ({history}) => {
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        const formData = new FormData(e.currentTarget);
        dispatch(login(formData.get('username')));
        history.push('/review');
    };

    const LoginForm = () => (
        <form className="box" onSubmit={handleSubmit}>
            <div className="field has-text-centered">
                <label htmlFor="username" className="label">Enter User Name</label>
                <div className="control">
                    <input type="text" className="input" name={'username'} required minLength={3}/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-success is-fullwidth" type="submit">Enter</button>
                </div>
            </div>
        </form>
    );

    return (
        <>
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <LoginForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
