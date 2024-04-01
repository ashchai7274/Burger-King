import navbar from '../styles/navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="list">

                <div className="menu">
                    <img src="/burger_assets/menu-bar.png" alt="" />
                </div>

                <div className="burger">
                    {/* <img src="/burger_assets/burger-king.png" alt="" /> */}
                </div>

               {/* <div className="buttons">
               <button className="btn1">Sign Up/Sign In</button>
                <button className="btn2">$0.00</button>
               </div> */}

                <button className="btn1">Sign Up/Sign In</button>
                <button className="btn2">$0.00</button>

            </div>

        </div>
     );
}
 
export default Navbar;