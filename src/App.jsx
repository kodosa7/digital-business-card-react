// import React from 'react'
import avatar from './assets/avatar.jpg'
import twitterLogo from './assets/tw.svg'
import facebookLogo from './assets/fb.svg'
import instagramLogo from './assets/in.svg'
import githubLogo from './assets/gh.svg'
import mailBtnIcon from './assets/mail.svg'
import liBtnIcon from './assets/li.png'
import './App.css'

export default function App() {
    return (
        <div className="container">
            <header>
                <img src={ avatar } />
                <h1>Ella von Schönau</h1>
                <h3>Frontend Developer</h3>
                <h4><a href="https://ellasenovska.pythonanywhere.com">website</a></h4>
                <div className="buttons-wrapper">
                    <a href="mailto:ellsen(a)seznam.cz" type="button" className="email-btn" id="email-btn"><span className="btn-icon"><img src={ mailBtnIcon } /></span>Email</a>
                    <a href="https://www.linkedin.com/in/ella-senovska/" type="button" className="linked-btn" id="linked-btn"><span className="btn-icon"><img src={ liBtnIcon } /></span>LinkedIn</a>
                </div>
            </header>
            <main>
                <h2>About</h2>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h2>Interests</h2>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Enterpreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </main>
            <footer>
                <div class="footer-icons">
                    <a href=""><img src={ facebookLogo } /></a>
                    <a href=""><img src={ twitterLogo } /></a>
                    <a href=""><img src={ instagramLogo } /></a>
                    <a href="http://github.com/kodosa7/"><img src={ githubLogo } /></a>
                </div>
            </footer>
        </div>
    )
}
