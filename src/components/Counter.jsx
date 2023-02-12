import React, { Component } from 'react';

// mounting, umounting, updating, and error handling

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleChangeInc = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };

  handleChangeDec = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter - 1,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <main className="text-center">
          <h1 className="text-center text-9xl font-semibold">{counter}</h1>
          <div className="value text-white">
            <button
              class="inline-flex bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={this.handleChangeInc}
            >
              + +
            </button>
            <button
              className="ml-3 rounded bg-red-500
               px-3 py-1 text-lg"
              onClick={this.handleChangeDec}
            >
              - -
            </button>
          </div>
        </main>
      </>
    );
  }
}

export default Counter;
