import "./Profile.css";
import pic from "../assets/943.png"
function Profile(){
    return(
        <div className="layout">
            <img src={pic} alt="Profile"/>
            <h1 className="name">Jirawat Rongsupan</h1>
            <hr></hr>
        </div>
    );
} export default Profile;