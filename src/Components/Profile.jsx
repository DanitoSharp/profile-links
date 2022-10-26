import React, { Component } from 'react';
import Profile_img from './img/profile_img.jpg';
import Github_img from './img/image_2.png';
import Ingress_img from './img/image_1.png';
import profile from './Profile.css';

class Profile extends Component {
    state = { 
     } 
    render() { 
        return (
            <div className="Profile-container">
                <div className="pic-name">
                    <img src={Profile_img} alt="Profile Image" id="profile_img" />
                    <span>Daniel Chibueze Ekeleme</span>
                    <span id="twitter">Twitter: Danito_sharp</span>
                    <span id="slack">Slack: Daniel Chibueze Ekeleme</span>
                </div>
                <div className="btns">

                    <a href="https://twitter.com/danito_sharp" className="butt">Twitter Link</a>

                    <a href="https://training.zuri.team/" className="butt" id="btn_zuri">Zuri Team</a>

                    <a href="https://books.zuri.team/" className="butt" id="books">Zuri Books</a>

                    <a href="https//books.zuri.team/python-for-beginners?ref_id=Danielekeleme" id="book_python" className="butt">Python Books</a>

                    <a href="https://background.zuri.team" className="butt" id="pitch">Background Check for Codes</a>

                    <a href="https://books.zuri.team/design-rules" className="butt" id="book_design">Design Books</a>

                    <a href="#"><img src={Github_img} alt="Github" id="loogo" /></a>
                </div>
                <div className="foot">
                    <p>Zuri<span className='redDot'>.</span>Internship</p>

                    <span className="hng-write">HNG Internship 9 Frontend Task</span>

                    <img src={Ingress_img} alt="Ingressive" width="230px" height="50px" />
                </div>
            </div>

        );
    }
}
 
export default Profile;