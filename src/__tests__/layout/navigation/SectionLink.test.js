import { store } from 'app/store';
import SectionLink from 'components/layout/navigation/SectionLink';
import { defaultTheme } from 'styles/themes';
import { render, screen } from 'test-utils';

describe('SectionLink', () => {
  it('should match the snapshot', () => {
    const { container } = render(<SectionLink />, {
      theme: defaultTheme,
      store: store,
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render a heading element with text content equal to the heading prop.', () => {
    render(<SectionLink heading='test' onClick={() => {}} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('heading')).toHaveTextContent('test');
  });
  it('should render a link element with an href equal to the path property of the link prop and text content equal to the text property of the link prop.', () => {
    render(
      <SectionLink
        link={{ path: '/test', text: 'testLink' }}
        onClick={() => {}}
      />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
    expect(screen.getByRole('link')).toHaveTextContent('testLink');
  });
  it('should not render a link if screen size is small', () => {
    window.innerWidth = 320; // mobile
    render(<SectionLink link={{ path: '/test', text: 'testLink' }} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
