import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <Link to="/"><li class="nav-item active">
                                <a class="nav-link" href="#">Accueil</a>
                            </li></Link>
                            <Link to="/About"><li class="nav-item">
                                <a class="nav-link">A propos</a>
                            </li></Link>
                            <Link to="/Dashboard"><li class="nav-item">
                                <a class="nav-link">Dashboard</a>
                            </li></Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;