import React from "react"
import "./Navbar.css"
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                <img src="/images/Logo.png" alt="" />
                </div>
                <div className="navbar-middle">
                    <div className="middle-text">روايات مترجمة</div>
                    <div className="middle-text">روايات عربية</div>
                    <div className="middle-text">قصص قصيرة</div>
                    <div className="middle-text">شعر</div>
                    <div className="middle-text">مقالات</div>
                    <div className="middle-text">كتب مخفضة</div>
                </div>
                <div className="navbar-right">
                    <img src="/images/cart1.png" alt="" />
                    <img src="/images/user1.png" alt="" />
                </div>
                <div className="navbar-menu">
                   <img src="/images/menu.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar




















