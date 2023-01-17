import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Navigation = () => {

    const [showNav, setShowNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (position > scrollPosition) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        console.log(showNav);
    }, [showNav])

   

    

    return (
        <Wrapper>
           
            {!showNav && <Icon>
                <MenuSquare />
            </Icon>}
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: transparent;
    height: 70px;
    width: 100%;
    position: fixed;
    
    
`
const Icon = styled.div`
    background-color: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    
`
const MenuSquare = styled.div`
    background-color: transparent;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    
`

export default Navigation;