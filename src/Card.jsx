import profilePic from './assets/My pic.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} className="card-img" alt="profile picture"></img>
            <h2 className="card-title" >Chaitanya Naik</h2>
            <p className="card-text" >I am learning React js today.</p>
        </div>
    );
}
export default Card