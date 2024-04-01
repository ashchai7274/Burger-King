import footer from '../styles/footer.css'

const Footer = () => {
    return ( 
        <div className="foot">
            <div className="footer">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=900&q=80&fit=max&auto=format" alt="" />
            </div>
            <div className="list">
                <h1>Save $$$<br /> With offers on demand </h1>
                <img src="/burger_assets/appleicon.jpeg" alt="" />
               <p className='para'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
                </p>
            </div>
        </div>
     );
}
 
export default Footer;