import React from "react";
import "./login.scss";
 export const Login=()=>{
    return(
        <div className="main">
            <div className="container">
                <div className="containerHeader">
                    <img src="../../../..//government/gerb.png"/>
                    <h1>Հայաստանի Հանրապետության Կառավարություն</h1></div>
                <div className="containerMain">
                    <img src="../../../..//government/republicsquere.png"/>
                    <form className="loginForm">
                        <h3>Մուտք գործել</h3>
                        <div>
                            <label>Գաղտնանուն</label>
                            <input type="text" placeholder="Գաղտնանուն"/>
                        </div>
                        <div>
                            <label>Գաղտնաբառ</label>
                            <input type="password"/>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>Հիշել</label>
                        </div>
                        <button>Մուտք</button>
                    </form>
                </div>
            </div>
        </div>
    )
}