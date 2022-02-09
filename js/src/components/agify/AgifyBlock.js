import React from "react";
import AgifyResult from "./AgifyResult";

/**
 * Allow a user to enter a team.
 */
class Agify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loaded: false,
      agifyData: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Sets the state of the name variable on change.
   *
   * @param evt
   */
  handleChange(evt) {
    this.setState({ name: evt.target.value });
  }

  /**
   * Fetches the age data from Agify and sets the
   * state variables.
   *
   * @param evt
   */
  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.name);
    fetch(`https://api.agify.io?name=${this.state.name}`)
      .then(response => response.json())
      .then(data =>
        {
          this.setState({ agifyData: data, loaded: true });
        }
      );
  }

  render() {
    const { agifyData, loaded } = this.state;

    let t = null;
    if (loaded) {
      t = (
        <div>
          <AgifyResult agifyData={agifyData} />
          <hr />
        </div>
      );
    }

    const output = (
      <div>
        { t }
        <form onSubmit={ this.handleSubmit }>
          <label>Enter your name and I'll predict your age!
            <br />
            <input
              type="text"
              value={ this.state.value }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <input type="submit" value="Search" />
        </form>
      </div>
    );

    return (
      output
    )
  }
}

export default Agify;