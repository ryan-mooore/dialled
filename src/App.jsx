import React, {useEffect, useState, Component} from 'react';
import './App.css';
import Header from './Header'

const MainView = () => {

  const [page, setPage] = useState(1);

  return (
    <div>
      <Header setPage={this.setPage}/>
    </div>
  );
}

export default class App extends Component {
    render() {
        return (<MainView />);
    }
}