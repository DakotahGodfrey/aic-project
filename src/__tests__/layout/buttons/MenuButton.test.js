import { render, screen } from 'test-utils';
import MenuButton from 'components/layout/buttons/MenuButtton';
import { store } from 'app/store';
import { defaultTheme } from 'styles/themes';

describe('<MenuButton />', () => {
  it('renders with the text menu if the isActive prop is false and close if true', () => {
    let isActive = false;
    const { rerender } = render(
      <MenuButton isActive={isActive} children={isActive ? 'close' : 'menu'} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/menu/i);
    isActive = true;
    rerender(
      <MenuButton isActive={isActive} children={isActive ? 'close' : 'menu'} />,
      { theme: defaultTheme, store: store }
    );
    expect(button).toHaveTextContent(/close/i);
  });
  it('renders with the correct aria-expanded attribute', () => {
    const { getByRole, rerender } = render(<MenuButton isActive={false} />, {
      theme: defaultTheme,
      store: store,
    });
    const button = getByRole('button');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    rerender(<MenuButton isActive={true} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
