import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: '',
        email: '',
        cell: '',
        skill: '',
      },
    };
  }

  render() {
    const { name, email, cell, skill } = this.state.input;

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...prevState.input,
          [name]: value,
        },
      }));
    };
    return (
      <>
        <form action="">
          <div className="shadow shadow-sky-200 rounded p-5 mt-5">
            <div className="my-5">
              <label htmlFor="name" className="block leading-7 font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
                className="w-full border focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-all duration-300 ease-in-out p-2 bg-transparent border-gray-200 rounded-lg "
              />
            </div>
            <div className="my-5">
              <label htmlFor="email" className="leading-7 font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your name"
                id="email"
                value={email}
                onChange={handleInputChange}
                name="email"
                className="w-full border focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-all duration-300 ease-in-out p-2 bg-transparent border-gray-200 rounded-lg "
              />
            </div>
            <div className="my-5">
              <label htmlFor="cell" className="leading-7 font-semibold text-gray-600">
                Cell
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="cell"
                onChange={handleInputChange}
                value={cell}
                name="cell"
                className="w-full border focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-all duration-300 ease-in-out p-2 bg-transparent border-gray-200 rounded-lg "
              />
            </div>
            <div className="my-5">
              <label htmlFor="skill" className="leading-7 font-semibold text-gray-600">
                Skill
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="skill"
                name="skill"
                onChange={handleInputChange}
                value={skill}
                className="w-full border focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-all duration-300 ease-in-out p-2 bg-transparent border-gray-200 rounded-lg "
              />
            </div>
            <button type="submit" className="w-full rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3">
              Submit the form
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
