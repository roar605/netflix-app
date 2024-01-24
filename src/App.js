
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Store from './utils/Store';

function App() {
  return (
    <div>
      <Provider store={Store}>
      <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
