import React from "react";
import {createGlobalStyle} from 'styled-components'

// Components
import Terminal from "../Terminal"

// Animations
import {Fade} from "react-reveal"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b7d2e0;
  }
`

const INTRO_TEXT = (
  <div>
    <p>
      Hello and welcome to my personal website! I'm currently a student
      at the University of British Columbia studying Computer Science,
      seeking internship opportunities for Summer 2021. Most recently,
      I was a Software Engineer at Rival Technologies.
    </p>
    <p>
      Quick Facts:
      <ul>
        <li>Born in the United States but raised in Canada</li>
        <li>Can speak Japanese fluently</li>
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">My favourite video of all time</a></li>
      </ul>
    </p>
    <p><b>Resume: </b><a href="https://drive.google.com/file/d/1SDX2ujZW5XqUBVU7XsXES9SXp0L09IJd/view?usp=sharing" target="_blank">View</a></p>
  </div>
)

const INTRO_COMMAND = "cat nick.txt";

const About = () => {
  return (
    <div>
      <GlobalStyle />
      <Fade right>
        <Terminal header={"About"} command={INTRO_COMMAND} body={INTRO_TEXT}/>
      </Fade>
    </div>
  )
}

export default About