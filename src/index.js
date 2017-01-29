import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCH2z_8iMqwouNLAyOaklhp3aQE9rvFdR0';
import SearchBar from './components/search_bar';

YTSearch({key:API_KEY, term:'surfboards'}, function(data){
    console.log(data);
});

// Create new component.
class App extends Component{
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));  