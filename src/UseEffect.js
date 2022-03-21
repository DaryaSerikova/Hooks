import React, { Component, useState, useEffect, useCallback } from "react";

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    console.log('value', value)
    return (
      <div>
        <button
          onClick={() => setValue((v) => v + 1)}>+</button>
        <button
          onClick={() => setVisible(false)}>hide</button>
          {/* <ClassCounter value={value}/> */}
          {/* <Notification/> */}
          {/* <HookCounter value={value} /> */}
          <PlanetInfo id={value}/>
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

// const Notification = () => {
//   const [visible, setVisible] = useState(true);
//   useEffect(() => {
//     const timeout = setTimeout(
//       () => setVisible(false), 2500);//mount and update
//     return () => clearTimeout(timeout);//unmount
//   }, []);

//   return (
//     <div>
//       {visible && <p>Hello</p>}
//     </div>
//   );
// };

const getPlanet = (id) => { //async??
  // console.log(id);
  return fetch(`https://swapi.dev/api/planets/${id}/`)
  .then(res => res.json())
  .then(data => data);
};

const useRequest = (request) => {
  const [dataState, setDataState] = useState(null);
  console.log('test');

  useEffect(() => {
    let cancelled = false;

    request()
      .then(data => !cancelled && setDataState(data));
    return () => cancelled = true; //clean
  }, [ request ]);

  return dataState;
}

const usePlanetInfo = (id) => {
 const request = useCallback(() => getPlanet(id), [ id ]);
  
  return useRequest(request);

  // const [name, setName] = useState(null);

  // useEffect(() => {
  //   console.log(name, id-1);
  //   let cancelled = false;

  //   fetch(`https://swapi.dev/api/planets/${id}/`)
  //     .then(res => res.json())
  //     .then(data => !cancelled && setName(data.name));
  //   return () => cancelled = true; //clean
  // }, [id]);

  // return name;
};

const PlanetInfo = ({id}) => {

  // const name = usePlanetInfo({id});
  const data = usePlanetInfo(id);
  // console.log(id)

    return (
      <div>{id} {data && data.name}</div>
    );
};

// const HookCounter = ({ value }) => {

//   useEffect(() => () => console.log('mount'), []);

//   useEffect(() => () => console.log('update'));

//   useEffect(() => () => console.log('unmount'), []);

//   return <p> {value} </p>;
// };

// class ClassCounter extends Component {
//   componentDidMount() {
//     console.log('class: mount');
//   }

//   componentDidUpdate(props) {
//     console.log('class: unpdate');
//   }

//   componentWillUnmount() {
//     console.log('class: unmount');
//   }

//   render() {
//     return <p>{this.props.value}</p>;
//   }

// }

export default App;