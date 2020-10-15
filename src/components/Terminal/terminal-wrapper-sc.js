import styled from "styled-components";

const TerminalWrapperSC = styled.div`
.terminal {
  background-color: #35383D;
  color: white;
  padding: 30px;
  border-radius: 5px;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 20px;
  margin-bottom: 5px;
}

.terminal-about {
  min-height: 450px;
}

.terminal-contact {
  min-height: 240px;
}

.terminal-buttons {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  float: right;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: -60px;
}

.terminal-button {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: inherit;
  margin-right: 5px;
}

.terminal-button-close {
  background-color: red;
}

.terminal-button-min {
  background-color: orange;
}

.terminal-button-max {
  background-color: green
}

.terminal-header {
  width: calc(100% + 60px);
  margin: -30px -30px 13px -30px;
  text-align: center;
  border-radius: 4px 4px 0px 0px;
  background-color: white;
  color: #5f5f5f;
  position: relative;
}

@media (min-width: 992px) {
  .terminal {
      margin-left: 100px;
  }

  .terminal-contact {
      position: relative;
      left: 150px;
      top: -50px;
  }
}


@media (min-width: 768px) and (max-width: 991px) {
  .terminal-contact {
      position: relative;
      margin-left: 63%;
      width: 70%;
      margin-top: -13%;
  }

  .terminal {
      max-width: 600px;
  }
}
`

export default TerminalWrapperSC
