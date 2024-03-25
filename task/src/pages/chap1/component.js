import React from 'react';
import withLogger from './withLogger';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default withLogger(MyComponent);
