import React from "react";
import { Grid, Header, Container, Button, } from "semantic-ui-react";
import Square from "./Square";
import O from "../images/O.png";
import X from "../images/X.png";
import Zoie from "../images/Zoie.jpg"


class Game extends React.Component {
  state = {
    divs: [
      {id: 1, clicked: false},
      {id: 2, clicked: false},
      {id: 3, clicked: false},
      {id: 4, clicked: false},
      {id: 5, clicked: false},
      {id: 6, clicked: false},
      {id: 7, clicked: false},
      {id: 8, clicked: false},
      {id: 9, clicked: false}
    ],
    arrUserChoices: [],
    arrCompChoices: [],
  }

  squarePressed = (i) => {
    const oppo = !i.clicked
    this.setState({divs: this.state.divs.map( div => {
      if (div.id === i.id) {
        return {id: i.id, clicked: oppo}
      } else {
        return div
      }
    })})
    this.setState({arrUserChoices: [i.id, ...this.state.arrUserChoices]}, () => this.compChoice())
  }

  gameLogic = () => {

  }

  compChoice = () => {
    const available = this.state.divs.filter( div => { // array of available divs
      if (div.clicked === false) {
        return div
      }
    }) 

    const randNumber = Math.floor(Math.random()*available.length) //arr index number

    this.setState({divs: this.state.divs.map( div => {
      if (div.id === available[randNumber].id) {
        return {id: div.id, clicked: !div.clicked}
      }
      return div
    })})

    this.setState({ arrCompChoices: [available[randNumber].id, ...this.state.arrCompChoices]})
    

  }



  render() {
    return(
      <>
    
      <Header style={{textAlign: "center", marginTop: "25px"}}>
        <h1>Tic Tac Toe</h1>
      </Header>
        <Container >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Grid columns={3} style={{width: "450px"}}>
              <Grid.Row>
                {this.state.divs.map(div => ( <Square key={div.id} div={div} squarePressed={this.squarePressed}/> ))}
              </Grid.Row>
            </Grid>
          </div>
        </Container>
        
      </>
      
    );
  };
};


export default Game;