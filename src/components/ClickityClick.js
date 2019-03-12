import React from 'react'

export default class ClickityClick extends React.Component {
  constructor(){
    super()

    this.state = {
      hasBeenClicked: false
    }
  }

  handleClick = () => {
    console.log(this)
    this.setState({hasBeenClicked: true})
    console.log(this.state)
  }

    render(){
        return(
          <div>
            <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
     )
    }
  
}