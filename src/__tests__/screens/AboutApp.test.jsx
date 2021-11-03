import { store } from 'app/store';
import AboutApp from 'components/screens/AboutApp';
import { defaultTheme } from 'styles/themes';
import { render, screen } from 'test-utils';

const heading = 'About';

describe('<AboutApp />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<AboutApp />, {
      theme: defaultTheme,
      store: store,
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders a heading and message', () => {
    render(<AboutApp />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(heading);
  });
});
