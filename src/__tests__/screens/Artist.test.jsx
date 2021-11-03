import { render, screen } from 'test-utils';
import Artist from 'components/screens/Artist';
import { defaultTheme } from 'styles/themes';
import { store } from 'app/store';

let match = {
  params: {},
};
match.params.id = 1;
describe('Artist', () => {
  it('should render', () => {
    const { container } = render(<Artist match={match} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(container).toMatchSnapshot();
  });
  it('renders a header with the correct text', () => {
    const { getByRole } = render(<Artist match={match} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(getByRole('banner')).toHaveTextContent(/related artworks/i);
  });
});
