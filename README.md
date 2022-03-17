# App with Hooks

## useState

const [ value, setValue ] = useState('initial value');
#### `value` 
It is state.
#### `setValue`
It is setState for only one property or many property, but as one whole.

## useContext

## useEffect
  This hook is reminiscent of the Lifecycle Hooks work.
  UseEffect is hook like a combination of componentDidMount(), componentDidUpdate(), componentWillUnmount(). 

  useEffect(() => {
    console.log('useEffect() ');
    return () => console.log('clear');
  }, [ value ]);

  #### `[ value ]` 
  It is the condition under which the update will occur, that is if the value of the variable "value" (and any other variable that will be in these square brackets, i.e. in this array) changes.
  If this array is empty [ ], then useEffect will be called once when the component is created (similar to  componentDidMount())
  Attention! [] is not equal to "empty" or "null". If this value is equal to empty, then useEffect will be called every time the  component is updated.
  If you need component clean, then you can add return of clean function inside useEffect, then component clean will be called before starting new effect




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.