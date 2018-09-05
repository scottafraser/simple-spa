import React, {
    Component
} from "react";
import reallyAdorablePuppy from '../assets/images/Golden.jpg';

class Doggo extends Component {
  

  render() {
    return (
      <div>
        <img src={reallyAdorablePuppy}/>
      </div>
    );
  }
}
 
export default Doggo;