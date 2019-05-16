import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
// import { search_Robots } from '../reducers'
import { setSearchField, requestRobotsData } from '../actions'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
// import { robots } from './robots';


const mapStateToProps = (state) => {  // well get this (state) and searchField property on reducers file
  return {
    searchField: state.search_Robots.searchField,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
  }
  // return searchField: state.serch_Robots.searchField
}


const mapDispatchToProps = (dispatch) => {
  return {

    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

    onRequestRobots: () => dispatch(requestRobotsData())

  }
}



class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {         // don't need this constructor, because no more state with Redux
  //     robots: [],
  //     // searchField: ''
  //   }
  //   // console.log("constructor");
  // }

  componentDidMount() {
    // console.log( this.props.store.getState() );
    // console.log("componentDidMount");

    // fetch('https://jsonplaceholder.typicode.com/users')   // whe're fetch data here
    // .then((response) => response.json())    // whe're getting a response here
    // .then((users) => this.setState({ robots: users }))

    this.props.onRequestRobots()
  }

  // onSearchChange = (event) => {
  //   // console.log(event.target.value)
  //   this.setState({ searchField: event.target.value })
  //   // const { robots, searchField } = this.state

  //   // const robots_filtered = robots.filter((robot) => {
  //   //   // return console.log(robot);
  //   //   return robot.name.toLowerCase().includes( searchField.toLowerCase())
  //   // })

  //   // console.log(robots_filtered);
  // }


  // onSearchChange = (event) => {
  //   // console.log(event.target.value)
  //   this.setState({ searchField: event.target.value })
  // }


  render() {

    // const { robots } = this.state

    const { searchField, onSearchChange, robots } = this.props

    const robots_filtered = robots.filter((robot) => {
      // return console.log(robot);
      return robot.name.toLowerCase().includes( searchField.toLowerCase())
    })

    // console.log("render");

    if ( robots.length === 0 ) {
      return <h2 className='tc'>Loading !!</h2>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robot Friends</h1>
          <SearchBox searchChange={ onSearchChange }/>
          {
            /*
              props
              state
              children
            */
          }
          <Scroll>
            <ErrorBoundary>
              <CardList robots={ robots_filtered }/>
            </ErrorBoundary>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
