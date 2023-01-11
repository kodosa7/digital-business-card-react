import twitterLogo from '../assets/tw.svg'
import facebookLogo from '../assets/fb.svg'
import instagramLogo from '../assets/in.svg'
import githubLogo from '../assets/gh.svg'


export default function Footer() {
    return (
        <footer>
            <div class="footer-icons">
                <a href=""><img src={ facebookLogo } /></a>
                <a href=""><img src={ twitterLogo } /></a>
                <a href=""><img src={ instagramLogo } /></a>
                <a href="http://github.com/kodosa7/"><img src={ githubLogo } /></a>
            </div>
        </footer>
    )
}
