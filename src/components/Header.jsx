import avatar from '../assets/avatar.jpg'
import mailBtnIcon from '../assets/mail.svg'
import liBtnIcon from '../assets/li.png'


export default function Header() {
    return (
        <header>
            <img src={ avatar } />
            <h1>Ella von Schönau</h1>
            <h3>Frontend Developer</h3>
            <h4><a href="https://ellasenovska.pythonanywhere.com">portfolio website</a></h4>
            <div className="buttons-wrapper">
                <a href="mailto:ellsen(a)seznam.cz" type="button" className="email-btn" id="email-btn"><span className="btn-icon"><img src={ mailBtnIcon } /></span>Email</a>
                <a href="https://www.linkedin.com/in/ella-senovska/" type="button" className="linked-btn" id="linked-btn"><span className="btn-icon"><img src={ liBtnIcon } /></span>LinkedIn</a>
            </div>
        </header>
    )
}