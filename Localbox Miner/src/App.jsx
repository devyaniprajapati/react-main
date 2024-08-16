import React, { useContext } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Toggle Example</h1>
      <ThemeToggleButton />
      <p>This is an example of a theme toggle feature using React Context API.</p>
    </div>
  );
};

export default App;


//ghjkf
