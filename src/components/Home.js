import React, { Component } from "react";
import reallyAdorablePuppy from '../assets/images/download.jpeg';
import NewDogControl from './NewDogControl'
 
class Home extends Component {
  

  render() {
    return (
      <div>
        <NewDogControl />
        <br />
        <h2>Watch the puppy grow</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
 
export default Home;