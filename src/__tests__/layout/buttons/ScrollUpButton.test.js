import { store } from 'app/store';
import ScrollUpButton from 'components/layout/buttons/ScrollUpButton';
import { defaultTheme } from 'styles/themes';
import { render, screen, fireEvent } from 'test-utils';

describe('<ScrollUpButton />', () => {
  it('renders a button', () => {
    const { container } = render(<ScrollUpButton />, {
      theme: defaultTheme,
      store: store,
    });
    const button = screen.getByRole('button');
    expect(container.firstChild).toBe(button);
  });

  it('scrolls to the top of the page when clicked and sets focus on an element with the id of home', () => {
    const home = document.createElement('div');
    home.id = 'home';
    window.pageYOffset = 100; // Set the initial scroll position
    document.body.appendChild(home);
    window.scroll = jest.fn(); // Mock the scroll function
    const { container, getByRole } = render(<ScrollUpButton />, {
      theme: defaultTheme,
      store: store,
    });
    jest.spyOn(home, 'focus'); // Mock the focus function
    const button = getByRole('button');
    fireEvent.click(button);
    expect(home.focus).toHaveBeenCalledTimes(1);
    expect(container.scrollTop).toBe(0);
  });

  it('renders with an aria-label', () => {
    const {} = render(<ScrollUpButton />, {
      theme: defaultTheme,
      store: store,
    });
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'scroll to the top');
  });
});
