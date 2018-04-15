import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import debounce from "lodash/debounce";
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectSearchText, makeSelectartists, makeSelectLoading, makeSelectError } from './selectors';
import { searchRequest } from './actions';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from 'components/LoadingIndicator';
import Pagination from 'components/Pagination';
import UserCard from "components/UserCard";

class SearchPage extends React.Component {
  constructor(props){
    super(props);
    const { query } = this.props;
    this.onChangeQuery = this.onChangeQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  PER_PAGE = 10;
  state = { query : "" , currentPage : 0};
  onChangeQuery = function(e){
    const query = e.target.value;
    this.setState({ query });
  }
  onSubmit(){
    this.debounceSearch(this.state.query);
  }
  paginate (array, page_size, page_number) {
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }
  onChangePage(page){
    this.setState({currentPage : page-1})
  }
 
  debounceSearch = debounce(function(query) {
    const { loggedInUser } = this.props;
    this.props.searchRequest(query, loggedInUser);
  }.bind(this), 300);
  getSizedartists(artists){
    const sizes = artists.map((planet) => {
      const population = this.getNumber(planet.population)
      return population;
    });
    const max = Math.max.apply(null, sizes);
    
    var cloned = JSON.parse(JSON.stringify(artists));
    const sizeinPercent = cloned.forEach((planet) => {
      const population = this.getNumber(planet.population)
      if(population){
        planet.size = (planet.population / max);
      }else{
        planet.size = 0;
      }
    });

    return cloned || {};
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.query){
      this.setState({query : nextProps.query})
    }
  }
  
  render() {
    let { loading, error, artists } = this.props, userListContent;
    const {currentPage} = this.state;
    var totalCount = artists && artists.length || 0;

    
    const renderUserList = () => {
      if(loading) {
        return <LoadingIndicator color='#111' top='10' key="LoadingIndicator"/>;
      }
      if(artists){
        artists = this.paginate(artists, this.PER_PAGE, currentPage);
        return (
          <ul>
            {
              artists.map((value,i) => {
                return (<UserCard 
                        viewType="Artist" 
                        key={i+value.idArtist} 
                        {...value}
                      />);
              })
            }
          </ul>
          );
      }
    };
    const { query } = this.state;

   
    userListContent = (
      <div>
        <div className='skelecon-screen'>
            {renderUserList()}
        </div>
    </div>);

    return (
      <div className="search-page">
        <div className="form search">
          <form className="search-form"> 
            <input 
              type="text"
              value={query || ""}
              placeholder="Search By Artist"
              onChange={this.onChangeQuery} 
              className="left-corner"
            />
            <button type="button" onClick={this.onSubmit} className="right-corner">Search</button>
          </form>
          {userListContent}
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
      </div>);
  }

}



SearchPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  searchRequest: PropTypes.func,
  query: PropTypes.string,
  users: PropTypes.any,
  loggedInUser:   PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};


export function mapDispatchToProps(dispatch) {
  return {
    searchRequest: (query, loggedInUser) => {
      dispatch(searchRequest(query, loggedInUser))
    }
  };
}

const mapStateToProps = createStructuredSelector({
  query: makeSelectSearchText(),
  artists: makeSelectartists(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchPage);
