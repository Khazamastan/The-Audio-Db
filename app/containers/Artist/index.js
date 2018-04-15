import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import debounce from "lodash/debounce";
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { 
  makeSelectSearchText, 
  makeSelectartists, 
  makeSelectLoading, 
  makeSelectError,
  makeSelectAlbums,
  makeSelectalbumsLoading
} from './selectors';
import { searchRequest, getAlbumsRequest } from './actions';
import { openModal } from "containers/App/actions"
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from 'components/LoadingIndicator';
import Pagination from 'components/Pagination';
import UserCard from "components/UserCard";
import { Link } from 'react-router-dom'
import Utils from 'utils/Utils';


class ArtistPage extends React.Component {
  constructor(props){
    super(props);
    const { query } = this.props;
    this.onChangeQuery = this.onChangeQuery.bind(this);
  }
  PER_PAGE = 5;
  state = { query : "", currentPage : 0 };
  onChangeQuery = function(e){
    const query = e.target.value;
    this.setState({ query });
    this.debounceSearch(query);
  }
  debounceSearch = debounce(function(query) {
    const { loggedInUser } = this.props;
    this.props.searchRequest(query, loggedInUser);
  }.bind(this), 300);
  onChangePage(page){
    this.setState({currentPage : page-1})
  }
  paginate (array, page_size, page_number) {
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.query){
      this.setState({query : nextProps.query})
    }
  }
  componentDidMount(){
    var params = Utils.getQueryParameters();
    this.props.searchRequest(params.idArtist);
  }
  render() {
    let { loading, error, artists, albums, albumsLoading } = this.props, userListContent;
    const {currentPage} = this.state,
    totalCount = albums && albums.length || 0;
    let content = [];
    const renderUserList = () => {
      if(loading) {
        return <LoadingIndicator top="20" key="LoadingIndicator"/>;
      }
      let plantContent, albumsContent;
      if(artists){
        plantContent= artists.map(value => {
          return <UserCard secondaryText={"info"} {...this.props} key={value.idArtist} {...value}/>
        });
        plantContent = (<div key="artists">{plantContent}</div>);
      }
      if(albumsLoading){
        albumsContent = <LoadingIndicator top="10" key="LoadingIndicator"/>
      }
      if(albums){
        albums = this.paginate(albums, this.PER_PAGE, currentPage);
        albumsContent = albums.map(value => {
          return <UserCard 
              {...this.props} 
              strAlbumThumb={value.idAlbum} 
              viewType="Album" 
              key={value.idAlbum} 
              className="space-between"
              {...value}
            />
        });

        albumsContent= (<div key="albums">{albumsContent}</div>);
      }
      return <div>
        {plantContent}
        <h1>Albums</h1>
        {albumsContent}
      </div>;
    };
    const { query } = this.state;

   
    userListContent = (
      <div>
        <br/>
        <div className='skelecon-screen'>
          <Link to="" className="go-back">&#8629; Back To Search</Link>
          <ul>
            {renderUserList()}
          </ul>
          {(totalCount && (totalCount > this.PER_PAGE) && !loading) ?
            <Pagination 
              onChangePage={this.onChangePage.bind(this)}
              count={totalCount} 
              currentPage={currentPage+1}
            />
            :
            null
          }
        </div>
        <br/>
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
  searchRequest: PropTypes.func,
  query: PropTypes.string,
  artists: PropTypes.any,
  loggedInUser:   PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};


export function mapDispatchToProps(dispatch) {
  return {
    searchRequest: (query) => {
      dispatch(searchRequest(query))
    },
    getAlbums: (artistId) => {
      dispatch(getAlbumsRequest(artistId))
    },
    openModal: (idAlbum) => {
      dispatch(openModal(idAlbum))
    },
  };
}

const mapStateToProps = createStructuredSelector({
  query: makeSelectSearchText(),
  artists: makeSelectartists(),
  albums: makeSelectAlbums(),
  loading: makeSelectLoading(),
  albumsLoading : makeSelectalbumsLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'artist', reducer });
const withSaga = injectSaga({ key: 'artist', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArtistPage);
