import { store } from 'app/store';
import SiteNav from 'components/layout/navigation/SiteNav';
import { defaultTheme } from 'styles/themes';
import { screen, render, fireEvent } from 'test-utils';

const siteLinks = [
  { id: 1, path: '/test', display: 'Test' },
  { id: 2, path: '/test2', display: 'Test2' },
  { id: 3, path: '/test3', display: 'Test3' },
];

let theme = 'default';
const toggleTheme = jest.fn(() => {
  theme = theme === 'default' ? 'dark' : 'default';
  console.log(theme);
});

describe('<SiteNav />', () => {
  it.skip('throws an error if an array of links are not provided', () => {
    expect(() => {
      render(<SiteNav />);
    }).toThrow();
  });
  it('matches the snapshot', () => {
    const { container } = render(<SiteNav links={siteLinks} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders an accessible navigation element', () => {
    render(<SiteNav links={siteLinks} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('navigation')).toBeTruthy();
  });
  it('renders a link to the home page', () => {
    render(<SiteNav links={siteLinks} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/'
    );
  });
  it('renders a link for each item in the links prop with the correct text content', () => {
    render(<SiteNav links={siteLinks} />, {
      theme: defaultTheme,
      store: store,
    });
    siteLinks.forEach((link) => {
      expect(screen.getByRole('link', { name: link.display })).toHaveAttribute(
        'href',
        link.path
      );
    });
  });

  it('renders a menu button if the screen size is smaller thanthe breakpoint', () => {
    window.innerWidth = 500;
    const { rerender } = render(<SiteNav links={siteLinks} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    window.innerWidth = 1000;
    rerender();
    expect(
      screen.queryByRole('button', { name: /menu/i })
    ).not.toBeInTheDocument();
  });

  it('renders a list of links when the menu button is clicked and screen  size is small', () => {
    window.innerWidth = 500;
    render(<SiteNav links={siteLinks} />, {
      theme: defaultTheme,
      store: store,
    });

    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(screen.queryAllByRole('link')).toHaveLength(1);
    fireEvent.click(menuButton);
    expect(screen.getAllByRole('link')).toHaveLength(siteLinks.length + 1);
  });
  it('renders a button with the text set to close when the menu button is clicked', () => {
    window.innerWidth = 500;
    render(<SiteNav links={siteLinks} />, {
      theme: defaultTheme,
      store: store,
    });
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeTruthy();
    fireEvent.click(menuButton);
    expect(screen.getByRole('button', { name: /close/i })).toBeTruthy();
    fireEvent.click(menuButton);
    expect(screen.getByRole('button', { name: /menu/i })).toBeTruthy();
  });

  it('renders a themeToggle Button', () => {
    const { rerender } = render(
      <SiteNav links={siteLinks} theme={theme} toggleTheme={toggleTheme} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    const themeToggle = screen.getByRole('button', { name: /mode_night/i });
    expect(themeToggle).toBeTruthy();
    fireEvent.click(themeToggle);
    expect(toggleTheme).toHaveBeenCalled();
    theme = 'dark';
    rerender(
      <SiteNav links={siteLinks} theme={theme} toggleTheme={toggleTheme} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getByRole('button', { name: /light_mode/i })).toBeTruthy();
  });
});
