import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import LeftNavigation from "./components/LeftNavigation/LeftNavigation";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LeftNavigation />
        <Body titleValue={x => this.setState({ title: x })} />
        <Footer />
      </div>
    );
  }
}

// const App = props => {
//   return (
//     <div className="App">
//       <Header />
//       <LeftNavigation />
//       <div id="heart" />
//       <h1>Welcome onboard with Reactjs Course</h1>
//       <p id="body-paragraph">This is the course for learning Reactjs Library</p>
//       <Footer />
//     </div>
//   );
// };

export default App;
