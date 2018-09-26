'use strict';

const e = React.createElement;

class ContainerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*
  <div>
    <h1>Hello World!</h1>
  </div>
  */
  render() {
    return (
      e(
        'div',
        null,
        e(
          'h1',
          null,
          'Hello World!'
        )
      )
    )
  }
}

// Find all DOM containers, and render Like buttons into them.
ReactDOM.render(e(ContainerComponent), document.querySelector('#container-component'))
