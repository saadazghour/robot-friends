import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';



class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("componentDidMount");

    fetch('https://jsonplaceholder.typicode.com/users')   // whe're fetch data here
    .then((response) => response.json())    // whe're getting a response here
    .then((users) => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    // console.log(event.target.value)
    this.setState({ searchField: event.target.value })
    // const { robots, searchField } = this.state

    // const robots_filtered = robots.filter((robot) => {
    //   // return console.log(robot);
    //   return robot.name.toLowerCase().includes( searchField.toLowerCase())
    // })

    // console.log(robots_filtered);
  }


  render() {

    const { robots, searchField } = this.state

    const robots_filtered = robots.filter((robot) => {
      // return console.log(robot);
      return robot.name.toLowerCase().includes( searchField.toLowerCase())
    })

    // console.log("render");

    if ( robots.length === 0 ) {
      return <h1 className='tc'>Loading !!</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robot Friends</h1>
          <SearchBox searchChange={ this.onSearchChange }/>
          <Scroll>
            <CardList robots={ robots_filtered }/>
          </Scroll>
        </div>
      )
    }
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
