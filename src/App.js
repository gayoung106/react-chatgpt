const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button> + NEW CHAT </button>
        <ul className="history">
          <li>BLUCH</li>
        </ul>
        <nav>
          <p> Made By GAZERO </p>
        </nav>
      </section>
      <section className="main">
        <h1>GAZERO GPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
          </div>
          <p className="info">
            GAZERO GPT Apir 8 Version. Free Research Preview. Our goal is to
            make AI systems more natural and safe to interact with. Your
            feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
