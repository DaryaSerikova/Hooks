import React, { Component, useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((v) => v + 1)}>+</button>
        <button
          onClick={() => setVisible(false)}>hide</button>
          {/* <ClassCounter value={value}/> */}
          <Notification/>
          {/* <HookCounter value={value} /> */}
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

const Notification = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(
      () => setVisible(false), 2500);//mount and update
    return () => clearTimeout(timeout);//unmount
  }, []);

  return (
    <div>
      {visible && <p>Hello</p>}
    </div>
  );
};

const HookCounter = ({ value }) => {

  useEffect(() => () => console.log('mount'), []);

  useEffect(() => () => console.log('update'));

  useEffect(() => () => console.log('unmount'), []);

  return <p> {value} </p>;
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class: mount');
  }

  componentDidUpdate(props) {
    console.log('class: unpdate');
  }

  componentWillUnmount() {
    console.log('class: unmount');
  }

  render() {
    return <p>{this.props.value}</p>;
  }

}

export default App;