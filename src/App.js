import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Categories from './components/Categories';
import Home from './components/Home';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
