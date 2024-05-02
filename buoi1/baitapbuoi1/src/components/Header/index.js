import logo from "../../assets/image/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars  } from "react-icons/fa";

function Header() {
    return (
        <header className="header">
            <div className="inner-wrap">
                <div className="inner-logo">
                    <a href="">
                        <img src={logo} alt="logo" />
                        <span>SoftwareM4</span>
                    </a>
                </div>
                <div className="inner-menu">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="inner-social">
                    <ul>
                        <li>
                            <a href="" target="_blank">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                            <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="icon-mobile">
                    <FaBars />
                </div>
            </div>
        </header>
    )
}

export default Header;