import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Allicante" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Choose the location:  " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose the location: 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Braila">Braila</option>
            <option value="Carouge">Carouge</option>
            <option value="Allicante">Allicante</option>
            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
