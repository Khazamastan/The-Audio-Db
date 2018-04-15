import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { 
  makeSelectSearchText,
  makeSelectLoading,
  makeSelectError,
  makeSelectTracks,
} from './selectors';

import { makeSelectAlbums } from "containers/Artist/selectors";

import { getAlbumRequest } from 'containers/Album/actions';
import { closeModal } from 'containers/App/actions';
import { makeSelectCurrentAlbum } from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from 'components/LoadingIndicator';
import Pagination from "components/Pagination";
import UserCard from "components/UserCard";
import styled from 'styled-components';
import PerfectScrollbar from 'perfect-scrollbar';
import ReactDOM from 'react-dom'

const TrackList = styled.ul`
  position : relative;
  max-height : 360px;
  min-height : 360px;
  overflow-y : auto;
  padding : 0px 20px;
  margin : 15px;
`
class ArtistPage extends React.Component {
  constructor(props){
    super(props);
    const { query } = this.props;
  }
  PER_PAGE = 10;
  state = { query : "", currentPage : 0 };
  paginate (array, page_size, page_number) {
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }
  onChangePage(page){
    this.setState({currentPage : page-1})
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.query){
      this.setState({query : nextProps.query})
    }
  }
  componentDidMount(){
    const albumId = this.props.currentAlbum.idAlbum;
    this.props.getAlbumRequest(albumId);
    const container = ReactDOM.findDOMNode(this.refs.myRef)
    this.ps = new PerfectScrollbar(container);
  }
  componentDidUpdate(){
    if(this.refs.myRef && this.ps){
      this.ps.update();
    }
  }
  render() {
    let { loading, error, tarcks } = this.props, userListContent;
    const {currentPage, query} = this.state, totalCount = tarcks && tarcks.length || 0;

    if(tarcks && tarcks.length){
      tarcks = this.paginate(tarcks, this.PER_PAGE, currentPage);
    }
    const renderUserList = () => {
      if(loading) {
        return (<LoadingIndicator 
                  top="30"
                  color="#000"
                  key="LoadingIndicator"/>
              );
      }
      if(tarcks){
          return tarcks.map((value,i) => {
            return (<UserCard 
                      {...this.props} 
                      key={i+value.idTrack} 
                      viewType="Track" {...value}
                    />)
          });
      }
    }

    userListContent = (
      <div>
        <div className='skelecon-screen'>
          <div className="modal-heading">
            Tack Listing
          <a className="close-button pull-right margin-right-5" onClick={this.props.closeModal}>&#10006;</a>
          </div>
          <div className="space-between pad20">
            <h4>{this.props.currentAlbum.strAlbum}</h4>
            <span>Released : {this.props.currentAlbum.intYearReleased} </span>
          </div>
          <TrackList ref={"myRef"}>
            {renderUserList()}
          </TrackList>
          {(totalCount && (totalCount > this.PER_PAGE) && !loading) ?
            <Pagination
              onChangePage={this.onChangePage.bind(this)}
              count={totalCount}
              currentPage={currentPage + 1}
            />
            :
            null
          }
        </div>
        <br />
      </div>);

    return userListContent;
  }

}



ArtistPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  getAlbumRequest: PropTypes.func,
  query: PropTypes.string,
  albums: PropTypes.any,
  loggedInUser:   PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};


export function mapDispatchToProps(dispatch) {
  return {
    getAlbumRequest: (query) => {
      dispatch(getAlbumRequest(query))
    },
    closeModal : () =>{
      dispatch(closeModal())
    }
  };
}

const mapStateToProps = createStructuredSelector({
  query: makeSelectSearchText(),
  tarcks: makeSelectTracks(),
  album: makeSelectAlbums(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  currentAlbum : makeSelectCurrentAlbum(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'album', reducer });
const withSaga = injectSaga({ key: 'album', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArtistPage);
