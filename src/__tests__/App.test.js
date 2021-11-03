import App from 'app/App';
import { store } from 'app/store';
import { defaultTheme } from 'styles/themes';
import { render } from '../test-utils';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />, {
      theme: defaultTheme,
      store: store,
    });
  });
});
