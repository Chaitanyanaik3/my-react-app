function Button(){
     /*let count = 0;
     const handleClick2 = (name) =>{
        if(count < 3){
            count++;
            console.log(`${name} clicked the button`);
        }
        else{
            console.log(`${name} stop clicking me!!`);
        }
     }*/
    const handleClick = (e) => e.target.textContent = "🎆Boom!🎆"
     return(<button onClick={(e)=>handleClick(e)}> Click Me👈</button>);
    }

export default Button