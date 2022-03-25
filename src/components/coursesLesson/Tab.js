import React from "react";

import {
    TabHeaderContainer,
    StylizedTab,
    StyledTabPanel,
    TabsHolder,
    inactiveTab
} from "./TabNav";


export const Tab = ({label, active, onClick}) =>{
return(
    <StylizedTab
    role="tab"
    active={active}
    onClick={onClick}
    inactiveStyle = {inactiveTab}
    >
        {label}
    </StylizedTab>
)
}

export const Tabs = ({selectedTab, onChange , children}) =>{
    const tabs = children.map((child) =>{
        const handleClick = (e) =>{
            onChange (e, child.props.value);
        }
        return React.cloneElement(child,{
            active: child.props.value === selectedTab,
            onClick: handleClick
        });
    });
    return(
        <TabHeaderContainer>
            <TabsHolder>
                {tabs}
            </TabsHolder>
        </TabHeaderContainer>
    )
}

export const TabPanel = ({children , value , selectedIndex}) =>{
    const hidden = value !== selectedIndex;

    return(
        <StyledTabPanel hidden={hidden} active={!hidden}>
            {children}
        </StyledTabPanel>
    )
}