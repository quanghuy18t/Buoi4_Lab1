import { Provider } from 'react-redux';
import StackNavigation from './src/navigators/StackNavigation';
import store from './store';
import './src/i18n/i18n.config';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}