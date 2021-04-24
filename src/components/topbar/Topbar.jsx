import './topbar.scss'
import { Email, Call } from '@material-ui/icons';


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " +(menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">JennTech</a>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>jenntech2018@gmail.com</span>
                </div>
                    <div className="itemContainer">
                        <Call className="icon"/>
                        <span>971-517-2417</span>
                    </div>
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
