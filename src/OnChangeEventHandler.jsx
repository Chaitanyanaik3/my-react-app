import React,{useState} from 'react'
function OnChangeEventHandler(){
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [payment, setPayment] = useState("Visa");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return( <div>
                <input value={name} onChange={handleNameChange}>
                </input>
                <p>Name: {name}</p>
                <input value={quantity} onChange={handleQuantityChange} type="number">
                </input>
                <p>Quantity: {quantity}</p>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an Option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>
                <label>
                    <input  type="radio" value="Pick up" 
                            checked={shipping === "Pick up"}
                            onChange={handleShippingChange}>
                    </input>
                    Pick up
                </label><br/>
                <label>
                    <input  type="radio" value="Delivery" 
                            checked={shipping === "Delivery"}
                            onChange={handleShippingChange}>
                    </input>
                    Delivery
                </label>
                <p> Shipping:{shipping}</p>
            </div>);
}
export default OnChangeEventHandler