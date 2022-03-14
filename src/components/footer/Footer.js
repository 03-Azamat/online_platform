import React from 'react';
import logo from "../../image/image 4 (Traced) (1).svg"
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
            <footer className="footer">
                <div className="container">
                        <div className="footer--content--box">
                            <div className="footer--content--box--logo">
                                <img src={logo} alt="img"/>
                            </div>
                            <div className="footer--content--box--start">
                                <h3>Образовательная платорма</h3>
                                <nav>
                                    <Link to="/about" className="footer--content--box--start--ahci ">Главная</Link>
                                    <Link to='#' className="footer--content--box--start--ahci">Курсы</Link>
                                    <Link to='#' className="footer--content--box--start--ahci">Проверка сертификатов</Link>
                                    <button>Вход</button>
                                </nav>
                            </div>
                            <div className="footer--content--box--center">
                                <h3 className="footer--content--box--center--text">Связаться с нами</h3>
                                <p className="footer--content--box--center--text">Если у вас возникли какие-либо
                                    вопросы, пожалуйста, напишите
                                    <a className="footer--content--box--center--email"
                                       href="https://mail@ashimovbayastan@gmail.com">нам: mail@ashimovbayastan@gmail.com</a>
                                </p>
                                <div className="footer--content--box--center--icons">
                                    <SocialMediaIconsReact icon="instagram" borderColor="#01487E" iconColor="white"
                                                           backgroundColor="#01487E" url="https://instagram.com/"
                                                           size="50"/>
                                    <SocialMediaIconsReact icon="facebook" borderColor="white" iconColor="#01487E"
                                                           backgroundColor="white" url="https://facebook.com/" size="32"/>
                                    <SocialMediaIconsReact icon="instagram" borderColor="white" iconColor="#01487E"
                                                           backgroundColor="white" url="https://telegram.com/" size="32"/>
                                    <SocialMediaIconsReact icon="whatsapp" borderColor="white" iconColor="#01487E"
                                                           backgroundColor="white" url="https://whatsapp.com/" size="32"/>
                                    <SocialMediaIconsReact borderColor="#01487E" icon="twitter"
                                                           iconColor="rgba(255,255,255,1)" backgroundColor="#01487E"
                                                           url="https://twitter.com/" size="32"/>
                                </div>
                            </div>
                            <div className="footer--content--end">
                                <h3 className="footer--content--box--end--hed"> Контакт</h3>
                                <a className="footer--content--box--end--text" href="tel:+996 222 533 735">+996 222 533 735</a>
                                <a className="footer--content--box--end--text"
                                   href="https://Ashimov18@gmail.com">Ashimov18@gmail.com</a>
                                <p className="footer--content--box--end--text">Бишкек,Микрорайон Туңгуч,
                                    ул.Лелина 109/3</p>

                            </div>
                        </div>
                </div>
            </footer>

    );
};

export default Footer;