import footerContact from "../../../api/footerApi.json"
import { NavLink } from "react-router-dom"

export const Footers = () => {
    return(
        <footer className="footer-section">
            <div className="container grid grid-three-cols">{
                
                footerContact.map((curData , index)=>{
                    const {icon , title , details} = curData
                    return (
                        <div className="footer-Contact" key={index}>
                            <div className="icon">{icon}</div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

                <div className="Copyright-area">
                    <div className="Container">
                        <div className="grid grid-two-cols">
                            <div className="copyright-text">
                                <p>
                                    copyright 2025, All Right Reserved 
                                    <NavLink to="https://www.linkedin.com/in/yash-sharma1401/">
                                        @YashSharma
                                    </NavLink>
                                </p>
                            </div>

                            <div className="footer-menu">
                                <ul>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">AboutUs</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

        </footer>
     )
}