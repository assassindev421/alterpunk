import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                {/* <div className="footer_cols">
                <a className="logo"><img src="./assets/images/mark.png" className=""  /></a>
                <ul className="footer-menu hide-mob">
                    <li><a href="#lore">Lore</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#team">Team</a></li>
                </ul>
                </div> */}
                <div className="footer-bottom">
                    <ul>
                        <li>Alter EgoPunk 2022 ©.</li>
                        <div className="header-social">
                            <a href='https://discord.gg/Fqu2FVWYYM' target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                            <a href='https://twitter.com/AlterEgoPunks_' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer