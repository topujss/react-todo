import { Component } from 'react';
import Form from '../../components/Form/Form';

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
          <Form />
        </section>
      </>
    );
  }
}
