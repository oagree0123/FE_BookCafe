import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>

      </ConnectedRouter>
    </>
  );
}

export default App;
