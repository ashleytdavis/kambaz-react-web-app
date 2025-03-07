import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <div id="wd-account-navigation" className="d-flex flex-column">
            {links.map((link: any) => (
                <Link to={`/Kambaz/Account/${link}`} key={link} > {link} </Link>
            ))}
        </div>
    );
}
