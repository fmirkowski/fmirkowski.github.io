import { HashRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Bio from './components/Bio';
// import Products from './components/Products';
// import Resume from './components/Resume';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Bio />} />
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;