import './topbar.scss'
import { Email, Call, LinkedIn } from '@material-ui/icons';


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " +(menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">JennTech</a>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span><a href="https://mail.google.com/mail/u/0/#inbox/FMfcgxwLttGdGHNFKgXQppdgPFXrDLbc?compose=GTvVlcSMSckJXNnXKbhtrbHDHFQpsjSJXScZnbSDhGBqlplVDbKTGJtPlPwZqQwqtwzghblFMbhpq">jenntech2018@gmail.com</a></span>
                </div>
                    <div className="itemContainer">
                        <Call className="icon"/>
                        <span>971-517-2417</span>
                    </div>
                    <div className="itemContainer"></div>
                        <LinkedIn className="icon"/>
                        <span><a href="https://www.linkedin.com/in/jen-schneider-688769204/">LinkedIn</a></span>
                    </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="line1"></span> 
                       <span className="line2"></span> 
                       <span className="line3"></span> 
                    </div>
                </div>
            </div>
        </div>
    )
}
