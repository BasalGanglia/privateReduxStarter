import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCH2z_8iMqwouNLAyOaklhp3aQE9rvFdR0';
import SearchBar from './components/search_bar';
// Create new component.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));  