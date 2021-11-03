import { store } from 'app/store';
import TextHero from 'components/layout/headers/TextHero';
import { defaultTheme } from 'styles/themes';
import { render, screen } from 'test-utils';

describe('TextHero', () => {
  it('should render a header', () => {
    render(<TextHero />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
  it('should render an h1 element with text content equal to the heading prop', () => {
    render(<TextHero heading='Test' />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('heading')).toHaveTextContent('Test');
  });
  it('should render an element with text content equal to the message prop', () => {
    render(<TextHero message='Test' />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
