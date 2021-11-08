import React from "react";

function Footer() {
    return(
        <footer >
            <ul className = "flex-row">
            {/* <!-- Icons that link to modes of contact */}
                <li><a href="mailto:caseybot11@gmail.com"><img src="https://img.icons8.com/color/48/000000/apple-mail.png" width ="32px" height="30px" alt ="Email"/></a></li>
                <li><a href="https://github.com/kcshellacool" target="_blank"  rel="noreferrer"><img src ="https://img.icons8.com/windows/32/000000/github.png" alt ="GitHub"></img></a></li>
                <li><a href="https://www.linkedin.com/in/casey-hu-e-i-t-40a8a0a9/" target="_blank"  rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin.png" width ="32px" height="30px" alt = "LinkedIn"></img></a></li> 
            </ul>
        </footer>
    );
}

export default Footer;