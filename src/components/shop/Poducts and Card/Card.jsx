
import './Card.css'

const Card = ({card}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(let singleProduct of card){
        // console.log(singleProduct);
     totalPrice = totalPrice + singleProduct.price;
     totalShipping = totalShipping + singleProduct.shipping; 
    }
    let tax = totalPrice * 5/100
    let grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='card'>
            <h1>Order Summary</h1>

            <div>
                <p>Selected items : {card.length}</p>
                <p>Total price : $ {totalPrice}</p>
                <p>Shipping charge : $ {totalShipping}</p>
                <p>Tax ( 5 % ) : $ {tax.toFixed(2)}</p>
                <p>Grand Total : $ {grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Card;