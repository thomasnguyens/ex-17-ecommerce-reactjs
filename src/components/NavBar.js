// import { Link } from "react-router-dom"; // need to import from react dom

// adding a navbar!
const MyNavBar = (navs) => {
    return ( 
        <div className="container">
            {/* <Link className="navbar-brand" to="#">Navbar </Link> */}
            <nav className="navbar navbar-white navbar-expand-md bg-white justify-content-start">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <h1 className="text-color"> innisfree </h1>
                </a>
                {/* used for navbar toggler (responsive) */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" > {/* aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"*/}
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="Navbar">
                    <ul className="navbar-nav mr-auto mb-2 mb-md-0"> {/* Navbar formatting */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#home"> {/* href allows for url name [can be used in searchParams hook]*/}
                            <span className="fa fa-home fa-lg">
                                {navs.home}
                            </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about"> {/* href allows for url name [can be used in searchParams hook]*/}
                            <span className="fa fa-info fa-lg">
                                {navs.about}
                            </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#products"> 
                            <span className="fa fa-list fa-lg">
                                {navs.product} 
                            </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact"> 
                            <span className="fa fa-address-card fa-lg">
                                {navs.contact} 
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>


            </nav>
        </div>
     );
}
 
export default MyNavBar