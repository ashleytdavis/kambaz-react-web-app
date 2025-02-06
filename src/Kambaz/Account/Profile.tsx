import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <Form.Control 
                defaultValue="alice" 
                placeholder="username" 
                className="mb-2"
            />
            <Form.Control 
                defaultValue="123" 
                placeholder="password" 
                className="mb-2"
            />
            <Form.Control 
                defaultValue="Alice" 
                placeholder="First Name" 
                className="mb-2"
            />
            <Form.Control 
                defaultValue="Wonderland" 
                placeholder="Last Name" 
                className="mb-2"
            />
            <Form.Control 
                defaultValue="mm/dd/yyyy" 
                type="date" 
                className="mb-2"
            />
            <Form.Control 
                defaultValue="alice@wonderland.com" 
                type="email" 
                className="mb-2"
            />
            <Form.Select className="mb-2">
                <option value="USER">User</option>
            </Form.Select>
            <Link 
                to="/Kambaz/Account/Signin"
                className="btn btn-danger w-100">
                Signout
            </Link>
        </div>
    );
}
