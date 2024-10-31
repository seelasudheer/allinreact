import React, { Component, RefObject } from "react";
import ParentRef from "./ParentRef";

class MainRef extends Component<any, any> {
  firstNameRef: RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);

    this.state = {};
    this.firstNameRef = React.createRef();
  }
  componentDidMount(): void {
    console.log(this.firstNameRef);
    if (this.firstNameRef) this.firstNameRef.current?.focus();
  }
  render() {
    return (
      <div>
        MainRef
        <ParentRef />
        {/* <input type="text" ref={this.firstNameRef} /> */}
      </div>
    );
  }
}

export default MainRef;

// one more method is to callbackRef
// this.cbRef = null
// <input type="text" ref={this.setCbRef} />
