import React, {useEffect, useState, Component} from 'react';
import './header.css';

const Pages = {
  TIRE: 1,
  FORK: 2,
  SHOCK: 3,
}

const Navbar = (props) => {

  return (
    <div>
      <div class="navbar">
        <button onClick={()=>props.setPage(Pages.TIRE)}>Tire</button>
        <button onClick={()=>props.setPage(Pages.FORK)}>Fork</button>
        <button onClick={()=>props.setPage(Pages.SHOCK)}>Shock</button>
      </div>
    </div>
  );
}

export default class Header extends Component {
    render() {
        return <Navbar />
    }
}