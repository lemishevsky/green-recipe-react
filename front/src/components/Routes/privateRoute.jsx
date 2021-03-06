import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Preloader/preloader';
import { connect } from 'react-redux';
import { isLoggedFetchAC } from '../../redux/actions/actions';

class PrivateRoute extends React.Component {
  async componentDidMount() {
    // проверка авторизации
    this.props.isLoggedFetch();
  }

  render() {
    const Component = this.props.component;
    return (
      <Route
        {...this.props}
        component={() => {
          return this.props.loadingRoute ? (
              <Preloader />
          ) : this.props.isLoggedIn ? (
            <Component {...this.props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }
}
function mapStateToProps(store) {
  return {
    isLoggedIn: store.isLoggedIn,
    loadingRoute: store.loadingRoute
  };
}
function mapDispatchToProps(dispatch) {
  return {
    isLoggedFetch: () => dispatch(isLoggedFetchAC())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
