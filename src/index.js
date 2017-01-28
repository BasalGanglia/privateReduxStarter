import React from 'react';
import ReactDOM from 'react-dom';

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