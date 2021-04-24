import './menu.scss'


export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
           <ul>
            <li>
            <a href="#intro">Intro</a>
            </li> 
            <li>
            <a href="#portfolio">Portfolio</a>
            </li> 
            <li>
            <a href="#works">Projects</a>
            </li>  
            <li>
            <a href="#testimonials">Testimonials</a>
            </li> 
            </ul>
   
        </div>
    )
}
