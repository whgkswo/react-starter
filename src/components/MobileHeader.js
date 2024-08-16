import Logo from "./Logo";
import BackIcon from "./BackIcon";
import '../style/Components.css';
import { Link } from "react-router-dom";

function MobileHeader(){
    return (
        <div>
            <Link to='/' className="mobile-header">
                <img src="meetbti.png" className="small-logo"></img>
                <BackIcon></BackIcon>
            </Link>
        </div>
    );
}
export default MobileHeader;