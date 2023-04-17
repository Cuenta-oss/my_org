import "./footer.css"

export const Footer = () => {
    return <footer className="section__footer">
        <div className="section__footer-social">
            <a href=""><img src="/img/facebook.png" alt="facebook-icon" /></a>
            <a href=""><img src="/img/instagram.png" alt="instagram-icon" /></a>
            <a href=""><img src="/img/twitter.png" alt="twitter-icon" /></a>
        </div>
        <div className="section__footer-icon">
            <a href=""><img src="/img/Logo.png" alt="" /></a>
        </div>
        <div className="section__footer-copyrigth"><p>Desarrollado por <a href="https://github.com/Cuenta-oss" target="_blank">Eliecer Diaz</a></p></div>
    </footer>;
}