// import logo from './logo.svg';
import React from 'react';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Movie from './Movie';
// import Music from './Music';


// Render: componentWillMount() -> render() -> componentDidMount()

// Update: ComponentWillRecieveProps() -> shouldComponentUpdate() == true -> componentWillUpdate()
// -> render() -> componentDidUpdate()
class App extends React.Component {
  state = {}

  componentDidMount() {
    console.log('did mount');
    this._getMovies();
  }

  _renderMovies = () => {
    console.log('_renderMovies');
    const movies = this.state.movies.map((movie) => {
      console.log("movie===", movie)
      return <Movie
              title={movie.title_english}
              poster={movie.medium_cover_image}
              key={movie.id}
              genres={movie.genres}
              synopsis={movie.synopsis}
            />
    })
    return movies
  }

  _getMovies = async () => {
    console.log('_getMovies');
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    console.log('_callApi');
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'App' : 'App-loading'}>
        {this.state.movies ? this._renderMovies() : 'Loading'}

        {/* <BrowserRouter>
          <Link to="/movie">To movie</Link>
          <br/>
          <Link to="/music">To music</Link>
          <Switch>
            <Route path="/movie" render={props => <Movie {...props} />}/>
            <Route path="/music" render={props => <Music {...props} />}/>
          </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
