import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";
import axios from "axios";

class App extends React.Component {
  state = {
    employee: null,
  };

  componentDidMount() {
    this.getEmployee();
  }

  getEmployee = () => {
    axios
      .get("https://randomuser.me/api?nat=fr")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          employee: data.results[0],
        });
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.employee ? (
          <DisplayEmployee employee={this.state.employee} />
        ) : (
          <p>No data yet</p>
        )}
        <button type="button" onClick={this.getEmployee}>
          Get employee
        </button>
      </div>
    );
  }
}
export default App;
