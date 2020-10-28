import React from 'react';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
        <div className="row">
          <div className="col">
            <h2>Synch</h2>
            <Posts />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>ASynch</h2>
            <FetchedPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
