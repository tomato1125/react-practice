import './App.css';
import Link from './components/link.js'

const checkIn = () => {
  let pass = prompt("パスワードを入力してください:","");
  if(pass != null) window.location.href = "https://yu-sei-m.github.io/" + pass;
}

// function App() {
const App = () => {
  const logo = '/images/logo.png';
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <p>
          <b>フィットネス・エンジニアの勉強会</b>
        </p>
        <Link text="はじめて学ぶReact" onClick={()=>checkIn()}/>
      </header>
    </div>
  );
}

export default App;
