import './App.css';
// Add comment

function App() {

  function reloadPage() {
    // window.location.reload(false);
    window.location.href = ""
  }

  return (
    <div className="App">
      <header className="App-header">
        < button onClick = {
          reloadPage
        } >
          Reload Page
        </button>
      </header>
    </div>
  );
}

export default App;
