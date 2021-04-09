import React  from 'react'
import { Link } from "react-router-dom";

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                TAF Admin
                        </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Dashboard
                            </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Browse
                            </Link>
                </li>
                <li>
                    <Link
                        to="/products/1"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Search
                            </Link>
                </li>
                <li>
                    <Link
                        to="/users"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Users
                            </Link>
                </li>
                {/* <li>
                    <Link
                        to="/mediaRecorderTest"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        mediaRecorderTest
                            </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default NavigationMenu