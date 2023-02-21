import { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle } = this.props;

    return (
      <>
        <h1 className="text-center text-2xl">{title}</h1>
        <p className="text-center text-lg">{subtitle}</p>

        <section className="max-w-screen-sm mx-auto">
          <h1 className="text-center text-2xl text-red-500"> Im at home</h1>
        </section>
      </>
    );
  }
}
