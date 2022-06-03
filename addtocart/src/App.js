import './App.css';
import Addtocart from './Component/Addtocart';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Addtocart />
      </Provider>
    </div>
  );
}

export default App;
