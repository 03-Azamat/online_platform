import React, {useEffect, useState} from 'react';
import Cour from "../../image/cour_logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {Tab, TabPanel, Tabs} from "./Tab";

const CoursesLesson = () => {
    const {params} = useParams()
    const {coursesDetails: lesson} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(lesson, "lesson")
    console.log(params)
    const [activeTab, setActiveTab] = useState(1)

    useEffect(() => {
        dispatch(getCoursesDetails(params))
    }, [])

    const TabsContainer = styled.div`
        display: flex;
      padding: 2px;
    `
    const TabPanelContainer = styled.div`
    height: 100vh;
    `
    const handleChage = (e, value) => {
        setActiveTab(value)
    }

    return (
        <section id="lesson">
            <div className="container">
                <div className="lesson--box">
                <span className="lesson--box--logo">
                        <img src={Cour} alt=""/>
                        <p>Курс</p>
                    </span>
                    <div className="lesson--box--head " >
                        <div className="lesson--box--head--titles">
                            <h1 className="lesson--box--head--titles--title">Aza</h1>
                            <p className="lesson--box--head--titles--desc">
                                “Образование — это умение правильно
                                действовать в любых житейских ситуациях.“
                            </p>
                        </div>
                    </div>



                    <div className="lesson--box--middle">
                        <h1 className="lesson--box--middle__title">Материалы</h1>
                        <div>
                            <TabsContainer>
                                <Tabs selectedTab={activeTab} onChange={handleChage}>
                                    <Tab label="tab1" value={1}></Tab>
                                    <Tab label="tab2" value={2}></Tab>
                                    <Tab label="tab3" value={3}></Tab>
                                </Tabs>
                            </TabsContainer>
                            <TabPanelContainer>
                                <TabPanel value={activeTab} selectedIndex={1}>TAb 1</TabPanel>
                                <TabPanel value={activeTab} selectedIndex={2}>TAb 2</TabPanel>
                                <TabPanel value={activeTab} selectedIndex={3}>TAb 3</TabPanel>
                            </TabPanelContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesLesson;