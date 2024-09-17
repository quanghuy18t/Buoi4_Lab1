import { Provider } from 'react-redux';
import StackNavigation from './src/navigators/StackNavigation';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}