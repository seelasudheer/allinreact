import axios from "axios";
import React, { Component } from "react";
interface MyState {
  count: number;
}

class LifeCycleA extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
      count: 0,
    };
    console.log(props, "props");
  }
  fetchList = async () => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    this.setState({ list: res.data });
  };
  callMe = () => {
    this.setState({
      count: 55,
    });
  };
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(nextProps, "nextState", nextState);
    return true;
  }
  componentDidUpdate(prevState: any, prevProps: any) {
    console.log(prevState, "prevState", prevProps);
  }

  componentDidMount(): void {
    this.fetchList();
  }

  render() {
    const { count }: any = this.state;
    return (
      <div>
        <h6>LifeCycleA</h6>
        <button onClick={this.callMe}>Click Me - {count}</button>
      </div>
    );
  }
}

export default LifeCycleA;
