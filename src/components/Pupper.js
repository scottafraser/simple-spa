import React, {
    Component
} from "react";
import reallyAdorablePuppy from '../assets/images/download.jpeg';

class Pupper extends Component {
  

  render() {
    return (
      <div>
        <img src={reallyAdorablePuppy}/>
      </div>
    );
  }
}
 
export default Pupper;