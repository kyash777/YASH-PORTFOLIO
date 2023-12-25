import {AppBar,Box,Toolbar,styled} from "@mui/material"
// import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"



const Component=styled(AppBar)`
    background:#FFFFFF;
    color:#000;

`
const Container=styled(Toolbar)`
    justify-content:center;
    & > a{
        padding:20px;
        color:#000;
        text-decoration:none;
        @media (max-width: 768px) {
            font-size:12px;
            padding:5px;
        }
    }
    
`

const Header=()=>{
    return (
        <Component>
            <Container className="navbar">
                <NavLink to="/">ABOUT</NavLink>
                <NavLink to="/skills" >SKILLS</NavLink>
                <NavLink target="_blank" to="https://drive.google.com/file/d/1kMjcY5MBIG1CK5aGQZj8LuKIE_6BHju4/view?usp=sharing" >RESUME</NavLink>
                <NavLink to="/projects" >PROJECTS</NavLink>
            </Container>
        </Component>
    )
}

export default Header;