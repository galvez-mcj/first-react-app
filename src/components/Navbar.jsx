import reactLogo from '../assets/react.svg'

function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={reactLogo} className="nav-logo" alt="logo"></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar