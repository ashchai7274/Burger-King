import carousel from '../styles/carousel.css'

const Carousel = () => {
    return ( 
        <div className="body">
         <div className="main">
            <h1> Start your</h1>
            <h1> BK® order.</h1>
            <button className="btn3">Order Pickup</button><br /><br />
            <button className="btn4">Order Delivery</button>
        </div>

        <div className="img">
            <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ebf010cdf5b1d00f1906481669f067a4e83409eb-800x450.gif?w=900&q=90&fit=max&auto=format" alt="" />
                
        </div>
       </div>
     );
}
 
export default Carousel;