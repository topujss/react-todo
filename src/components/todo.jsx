import axios from 'axios';
import { Component } from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { SiPinboard } from 'react-icons/si';

// whenever send value always use callback function (() => parents) in it's parents component

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      input: {
        title: '',
        status: 'started',
      },
    };
  }

  componentDidMount() {
    try {
      axios
        .get('http://localhost:5050/todo/?_sort=status&_order=desc')
        .then((res) => {
          this.setState((prevState) => ({
            ...prevState,
            todo: [...res.data],
          }));
        })
        .catch((err) => console.error(err.message));
    } catch (error) {
      console.error(error.message);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      input: {
        ...prevState.input,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { input } = this.state;

    try {
      // sending data to server using axios post method
      axios
        .post('http://localhost:5050/todo', input)
        .then((res) => {
          this.setState((prevState) => ({
            ...prevState,
            todo: [...prevState.todo, input],
            input: {
              title: '',
              status: 'started',
            },
          }));
          this.componentDidMount();
        })
        .catch((err) => console.error(err.message));
    } catch (error) {
      console.error(error.message);
    }
  };

  handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:5050/todo/${id}`).then((res) => {
        this.componentDidMount();
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    // get time from date
    setInterval(
      () =>
        this.setState((prevState) => ({
          ...prevState,
          mainTime: new Date().toLocaleTimeString(),
        })),
      1000
    );

    const { todo, mainTime, input } = this.state;

    return (
      <>
        <div className="p-4 md:w-full">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6">
            <h1 className="text-center font-semibold text-2xl capitalize border-b pb-5">To do apps</h1>
            <div className="top">
              <div className="my-6 gap-5">
                <form onSubmit={this.handleSubmit} className="flex justify-between">
                  <input
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={input.title}
                    placeholder="Add a new task"
                    className="w-full rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                  />
                  <div className="right flex">
                    <select
                      name="status"
                      onChange={this.handleChange}
                      value={input.status}
                      className="mx-3 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:shadow-md focus:outline-none focus:border-blue-500  p-2.5"
                    >
                      <option value="started">Started</option>
                      <option value="panding">Panding</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button className="text-white bg-cyan-500 border-0 py-2 px-6  hover:bg-cyan-600 rounded text-lg">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center">
              <h2 className="tracking-widest text-xs uppercase title-font font-medium text-gray-400 mb-1">
                {mainTime}
              </h2>
              <div className="task-list">
                <ul className="bg-white rounded-lg border border-gray-200 text-gray-900">
                  {/* Map start from here */}
                  {todo.map(({ title, status, id }, index) => {
                    let textColor = 'bg-green-500';
                    let bgColor = 'bg-red-500';
                    let strike = 'line-through';

                    switch (status) {
                      case 'started':
                        textColor = 'text-green-500';
                        strike = 'none';
                        bgColor = 'bg-green-200';
                        break;
                      case 'panding':
                        bgColor = 'bg-green-200';
                        textColor = 'text-yellow-500';
                        strike = 'none';
                        break;
                      case 'completed':
                        bgColor = 'bg-green-200';
                        textColor = 'text-red-500';
                        strike = 'line-through';
                        break;

                      default:
                        textColor = 'inherit';
                        bgColor = 'inherit';
                        strike = 'none';
                        break;
                    }

                    return (
                      <li
                        key={index}
                        className={`px-6 py-2 w-full rounded-lg flex justify-between items-center ${textColor} ${strike} `}
                      >
                        <div className="inner-left">
                          <SiPinboard className="inline-block mr-2" />
                          <span className="text-xl align-middle">{title}</span>
                        </div>
                        <div className="inner-right flex gap-2">
                          <span
                            className={`text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap font-bold ${bgColor} rounded-full ${textColor} capitalize`}
                          >
                            {status}
                          </span>
                          <button onClick={() => this.handleDelete(id)}>
                            <FcFullTrash />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Todo;
