Build a React Application using React Native Router and Redux.  
It will get the App state data and display them.

But first a little about the Redux implementation...  my my own future reference.

React Redux
connect() function

npm install --save react-redux redux

react-redux is a Redux binding for React that allows us to efficiently connect React with Redux.

The most important function is connect() that:
– connects React Components with a Redux Store.
– returns a new connected Component class without modifying the Component class passed to it.

This is how we use the connect function
In this example we use mapStateToProps to connect Redux state to the React BookList Component props.  
However, we need to do also make make the Redux store available to the connect call.  See below.
*******************************************************************
...
import { connect } from 'react-redux';

//////////////*********  mapStateToProps gets books props from state
const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(state.books, state.filter)
  };
};

const BookList = (props) => {
  return (
    <View>
      Use {props.books}
    </View>
  );
}

/////////////// *********  the connect() function accepts the mapStateToProps function as a parameter
//  and applies it to BookList.  That is it passes the state to BookList as a prop.  This returns a new
//  connected React component that can work with the React state

export default connect(mapStateToProps)(BookList);
*******************************************************************

connect() can be used with a number of arguments depending on the use case

connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options] )

2 Important functions
- mapStateToProps(state) //  connects Redux state to React Component Props.  The returned props of this
function are a plane object, which will be merged into the connected Components props, to get
access to the Redux Store.

- mapDispatchToProps(dispatch)  //  connects Redux action to React props.  The connected React Component
will dispatch Redux actions.

ONE MORE THING
To make make the Redux store available to the connect call in the Component hierarchy,
we wrap a parent or child component in Provider //  <Provider />.

PROVIDER
Provider is a high order component that wraps a React application and makes it aware of the entire
Redux store.  It provides the store to the child components of the App.

********************************************************************
//  App.js
import { Provider } from 'react-redux';

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider
);

//  AppRouter.js
const AppRouter = () => (
  ...
  <Route path='/' component={DashBoard} exact={true} />
  <Route ... />
);

//  DashBoard.js
const DashBoard = () => {
  <View>
    <BookList />
  </View>
}
********************************************************************
