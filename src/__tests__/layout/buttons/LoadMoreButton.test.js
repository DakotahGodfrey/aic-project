import { store } from 'app/store';
import LoadMoreButton from 'components/layout/buttons/LoadMoreButton';
import { defaultTheme } from 'styles/themes';
import { render, screen } from 'test-utils';

describe('LoadMoreButton', () => {
  it('should render', () => {
    render(<LoadMoreButton onClick={() => {}} />, {
      theme: defaultTheme,
      store: store,
    });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('should render with the correct children', () => {
    render(<LoadMoreButton onClick={() => {}} />, {
      theme: defaultTheme,
      store: store,
    });
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/Load more/i);
  });
  it('should render with the correct aria-label', () => {
    render(<LoadMoreButton onClick={() => {}} />, {
      theme: defaultTheme,
      store: store,
    });
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Load More');
  });
});
