import React, {useEffect} from 'react';
import Traced from '../../image/Traced.png'
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../redux/action/corsesAction";
import Loader from "../../loader/loader";


const About = () => {
    const about = useSelector(state => state.aboutReducer)
    console.log(about)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAbout())
    },[])

    return (
        about.length === 0 ? <Loader/> :
        <section id="about">
            <div className="about--box">
                <div className="container">
                        <h1 className="about--box--title">О нас</h1>
                </div>
            </div>
            <div className="about2--block">
                <div className="container">

                    <div className="about2--block--arch">
                        <div>
                            <img src={Traced} alt="" className="about2--block--arch--img"/>
                        </div>
                        <div className="about2--block--arch--box">
                                {
                                    about.map(el=> (
                                        <p className="about2--block--arch--box--desc" dangerouslySetInnerHTML={{__html:el.text}}/>
                                    ))
                                }
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;