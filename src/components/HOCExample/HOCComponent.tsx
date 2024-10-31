import React from "react";

type MyComponentState = {
  counterValue: number;
};
type NewComponentProps = {
  skills?: string;
};
const HOCComponent = (OriginalComponent: any) => {
  class NewComponent extends React.Component<NewComponentProps, MyComponentState> {
    constructor(props: any) {
      super(props);
      this.state = {
        counterValue: 0,
      };
    }
    incrementCounter = () => {
      this.setState({
        counterValue: this.state.counterValue + 1,
      });
    };
    render() {
      return (
        <OriginalComponent
          incrementCounter={this.incrementCounter}
          counterValue={this.state.counterValue}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default HOCComponent;
