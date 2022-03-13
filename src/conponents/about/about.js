import React from 'react';
import Traced from '../../image/Traced.png'

const About = () => {
    return (
        <section id="about">
            <div className="about--box">
                <div className="container">
                    <div className="about--box--content">
                        <h1 className="about--box--content--title">О нас</h1>
                    </div>
                </div>
            </div>
            <div className="about2--block">
                <div className="container">

                    <div className="about2--block--arch">
                        <div>
                            <img src={Traced} alt="" className="about2--block--arch--img"/>
                        </div>
                        <div className="about2--block--arch--box">

                            <p className="about2--block--arch--box--desc">
                                ОАО «Коммерческий банк КЫРГЫЗСТАН» ведет свою историю с 01 января 1988 года в качестве
                                Кирконторы Жилсоцбанка СССР, на основе которой 06 ноября 1990 года был создан Банк,
                                зарегистрированный в МЮ КР как АКБ "Кыргызстан". В 2005 году Банк был преобразован в ОАО
                                "АКБ Кыргызстан", а с 20 ноября 2006 года Банк носит нынешнее название ОАО «Коммерческий
                                банк КЫРГЫЗСТАН», который ведет свою деятельность на основании лицензии на право
                                осуществления банковских операций НБКР № 014.
                            </p>
                            <p className="about2--block--arch--box--desc2">
                                Банк также недавно обновил лицензию на право проведения операций с драгоценными
                                металлами.
                            </p>

                            <p className="about2--block--arch--box--desc3">
                                На сегодняшний день во всех регионах Кыргызстана работают более 100 подразделений, 200
                                банкоматов и более 1000 терминалов обслуживающих платежные карты "Visa" и "Элкарт", 5
                                cистем
                                международных денежных переводов с выходом практически во все страны мира.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;