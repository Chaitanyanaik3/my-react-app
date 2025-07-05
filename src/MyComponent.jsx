import React,{useState} from 'react'
function MyComponent(){
    const [name,setName] = useState();
    const [age,incrementAge] = useState(0);
    const [isEmployed,setEmployee] = useState(false);
    const updateName = () => {
        setName("Chaitanya");
    }
    const updateAge = () => {
        incrementAge(age+1);
    }
    const toggleEmployeeStatus = () => {
        setEmployee(!isEmployed);
    }
    return( <div>
                <p>Name:{name}</p>
                <button onClick={updateName}>Set Name</button>
                <p>Age:{age}</p>
                <button onClick={updateAge}>Set Age</button>
                <p>isEmployed:{isEmployed ? "Yes": "No"}</p>
                <button onClick={toggleEmployeeStatus}>Toggle Status</button>
            </div>);
}
export default MyComponent