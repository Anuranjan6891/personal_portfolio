import React from 'react';
import ProjectsList from './ProjectsList'; // Import your new component

function App() {
  return (
    <div className="App">
      <h1>My Portfolio Projects</h1>
      {/* This renders your projects directly on the screen */}
      <ProjectsList /> 
    </div>
  );
}

export default App;
