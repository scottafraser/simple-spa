import React, {Component} from "react";
import reallyAdorablePuppy from '../assets/images/download.jpeg';
import Pupper from './Pupper';
import Doggo from './Doggo';

class NewDogComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            morePuppies: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            morePuppies: true
        });
        console.log('morePuppies is currently set to:' + this.state.morePuppies);
    }

    render(){
    let currentlyVisibleContent = null;
    if (this.state.morePuppies) {
      currentlyVisibleContent = < Doggo / > ;
    } else {
      currentlyVisibleContent = < Pupper / > ;
    }
    return (
      <div>
        {currentlyVisibleContent}
        <strong onClick={this.handleClick}>Click me to change my state!</strong>

      </div>
    );
}
}
export default NewDogComponent
