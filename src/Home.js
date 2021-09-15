import { Component } from "react";
import fire from "./config/fire";
import './Home.css';

class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
            <div className="background">
                <nav class="nav container">
                    <a href="#" class="nav__logo">
                        Alan English
                    </a>
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list grid">
                            <li class="nav__item">
                                <a href="#about" class="nav__link active-link">
                                    About
                                </a>
                            </li>
                            <li class="nav__item">
                                <a href="#playlist" class="nav__link">
                                    Listening Playlist
                                </a>
                            </li>
                            <li class="nav__item">
                                <a href="#" className="logout" onClick={this.logout}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                        <i class="uil uil-times nav__close" id="nav-close"></i>
                    </div>
                </nav>

                
            </div>
        )
    }
}

export default Home;