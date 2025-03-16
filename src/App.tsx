import { HashRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Bio from './components/Bio';
import Products from './components/Products';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </HashRouter>
  );
}

export default App;