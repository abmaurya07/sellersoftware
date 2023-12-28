// App.js

import { Provider } from 'react-redux';
import store from './src/store';
import PostsList from './src/features/posts/PostsList'; 

export default function App() {
  return (
    <Provider store={store}>
      <PostsList />
    </Provider>
  );
}
