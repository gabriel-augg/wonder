import { Link } from "react-router-dom"

import logo from "../../assets/img/logo.svg"

export default function Logo(){
    return(
        <div>
            <Link to="/">
                <img src={logo} width={130} alt="logo" />
            </Link>
        </div>
    )
}