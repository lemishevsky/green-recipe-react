
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux'
import { isLoggedFetchAC } from '../../redux/actions/actions';

class HomeRoute extends React.Component {
  async componentDidMount() {
        //проверка авторизации
        this.props.isLoggedFetch()
      }
    
  
  render() {
    const Component = this.props.Component;
    return (
      <Route
      {...this.props}
      render={props => (
          this.props.isLoggedIn === true
          ? <Component {...props} />
          : this.props.loadingFetch
          ? <span className={'statustext'}>loading</span>
          : <Redirect to='/' />
        )}
        />
    )
  }
}

function mapStateToProps(store) {
  return {
    isLoggedIn: store.isLoggedIn,
    loadingFetch: store.loadingFetch,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    isLoggedFetch: () => dispatch(isLoggedFetchAC())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute)

