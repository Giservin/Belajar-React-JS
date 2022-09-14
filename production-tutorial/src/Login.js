import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function loginHandler(e){
        e.preventDefault();

        const checkLogin = true;
        if(checkLogin) {
            // redirect dgn method useNavigate() dari react-router-dom
            navigate('/dashboard');
        }
    }
    return (
        <form onSubmit={loginHandler}>
            <label for="name">Username</label>
            <input type="text" name="username" id="name"></input>
            <label for="pw">password</label>
            <input type="password" name="password" id="pw"></input>
            <button>Login</button>
        </form>
    );
}