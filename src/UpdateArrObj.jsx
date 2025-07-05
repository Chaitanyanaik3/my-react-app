import React,{useState} from 'react';
function UpdateArrObj(){

    const [cars,setCars] = useState([]);
    let [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");
    
    function handleAddCar(){
        const newCar = { year: carYear,
                         make: carMake,
                         model: carModel};
        setCars(c => [...c,newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((element,i)=>i !== index ));
    }
    function handleYearChange(event){
        setYear(event.target.value);
    }
    function handleMakeChange(event){
        setMake(event.target.value);
    }
    function handleModelChange(event){
        setModel(event.target.value);
    }
    return (<div>
                <h2>Let's add some cars to cart</h2>
                <ul>
                    {cars.map((car,index)=>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}></input><br/>
                <input type="text" value={carMake} onChange={handleMakeChange}
                        placeHolder="Enter car make"/><br/>
                <input type="text" value={carModel} onChange={handleModelChange}
                        placeHolder="Enter car model"/><br/>
                <button onClick={handleAddCar}>Add car</button>
            </div>);
}
export default UpdateArrObj