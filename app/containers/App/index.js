/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 // Import all the third party stuff
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { makeIsModelOpen   } from 'containers/App/selectors';
import { closeModal   } from 'containers/App/actions';
import { push } from 'react-router-redux';
import reducer from '../App/reducer';
import injectReducer from 'utils/injectReducer';
//components
// Import route containers
import SearchPage from 'containers/SearchPage/Loadable';
import ArtistPage from 'containers/Artist/Loadable';

import ModalComponent from "components/Modal";


const AppWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  background :transparent url(${ props => props.bg}) center/cover;
  transition : background 0.3s ease-in;
`;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    router: PropTypes.object
  }
  render(){
    const { modalIsOpen } = this.props
    return (
      <AppWrapper>
      <Helmet
        titleTemplate="%s - SWAPI Search"
        defaultTitle="SWAPI Search"
      >
      <meta name="description" content="A SWAPI Search application" />
      </Helmet>
      <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/artist" component={ArtistPage} />
          <Route path="/" component={SearchPage} /> 
      </Switch>
      <ModalComponent modalIsOpen={this.props.modalIsOpen} closeModal={this.props.closeModal} />
      </AppWrapper>
    );
  }
}

App.contextTypes = {  
  store:  PropTypes.object,
  router : PropTypes.object 
};


App.propTypes = {
  modalIsOpen : PropTypes.bool,
};


export function mapDispatchToProps(dispatch) {
  return {
    dispatch : dispatch,
    closeModal : () =>{
      dispatch(closeModal());
    }
  }
}

const mapStateToProps = createStructuredSelector({
  modalIsOpen : makeIsModelOpen(),
});


const withReducer = injectReducer({ key: 'global', reducer });

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default withRouter(compose(
  withReducer,
  withConnect
)(App));
