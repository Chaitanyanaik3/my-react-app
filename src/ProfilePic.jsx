function ProfilePic(){
    const imageUrl = "./src/assets/My pic.jpg";
    const hideImg = (e) => {
        e.target.style.display = "none";
    }
    return(<img onClick={(e) => hideImg(e)} src={imageUrl} alt="ProfilePic"></img>);
}
export default ProfilePic
