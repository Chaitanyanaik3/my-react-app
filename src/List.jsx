
function List(props){
    
    const itemList = props.items;
    const category = props.category;
    // fruits.sort();
    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // alphabetical order
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); // reverseOrder (descending order)
    //fruits.sort((a,b) => a.calories - b.calories);// numeric order
    // FOR FILTERING CERTAIN RECORDS WE USE fruits.filter(arrow function(condition))
   const listItems = itemList.map(item => <li key=  {item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b></li>);
   return(  <>
                <h3 className="list-category" >{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>
   );
}
export default List