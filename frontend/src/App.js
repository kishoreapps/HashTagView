
import './App.css';
import SearchAppBar from './components/SearchBar';
import ContentBox from './components/ContentBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchAppBar></SearchAppBar>
        <ContentBox></ContentBox>
      </header>
    </div>
  );
}

export default App;
