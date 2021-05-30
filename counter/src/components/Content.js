import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';


function Content() {

      
    const Title = styled.h1`color: #aac9f0;`

    const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
`
const ParagraphTitle = styled(SubTitle)`
color: grey;
`

    const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #f0aeaa;
    border-radius: 15px;  
    `

    // const Button = styled.button`
    // background-color: white;
    // display: flex;
    // padding: 5px;
    // margin:5px;
    // justify-content: center;
    
    // `
    return (
        <Section>
            <Title>Section</Title>
            <SubTitle>I am a subtitle</SubTitle>
            <Button text='me first' primary/>
            <Button text='me second'/>
            <Icon primary />
            <Icon />
            <ParagraphTitle>I am a paragraph</ParagraphTitle>
            
            

        </Section>
           
            
            
      
    )
}

export default Content
