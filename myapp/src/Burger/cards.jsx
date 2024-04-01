import cards from '../styles/cards.css'
import data from './carddata';

const Cards = () => {
    return ( 
        <div className="card-main">
             <div className="card-body">
            {
                data.map(x=>{
                    return (
                   <div className="card">
                     <div className="items">
                     <img src={x.src} alt={x.alt}  />
                     <h3>{x.name} </h3>
                     <div className="carditems">
                     <p>{x.heading} </p><br />
                     <strong>{x.price} </strong>
                     <br /><br />
                    <button className="order">Order Now</button>
                    </div>
                    </div>
                   </div>
                    )
                  
                })
            }
            </div>
        </div>
     );
}
 
export default Cards;