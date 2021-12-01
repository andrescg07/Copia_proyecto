import {
    Route,
    Redirect
  } from 'react-router-dom';

  let auth = sessionStorage.getItem('token')
  
const PrivateRoute = ({ component:Component, ...rest }) => {
    return (
      <Route {...rest}>{auth ? <Component/>:<Redirect to="/login"/>}</Route>
    );
  }
  
  export default PrivateRoute