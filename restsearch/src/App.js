import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class="s01">
      <form>
        <fieldset>
          <legend>Discover Bengaluru</legend>
        </fieldset>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <input id="search" type="text" placeholder="What are you looking for?" />
          </div>
          <div class="input-field second-wrap">
            <input id="location" type="text" placeholder="location" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">Suggest!</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
