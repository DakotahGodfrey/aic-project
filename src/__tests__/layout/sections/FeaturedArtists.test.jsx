import { store } from 'app/store';
import FeaturedArtists from 'components/layout/sections/FeaturedArtists';
import { defaultTheme } from 'styles/themes';
import { render, screen } from 'test-utils';
const artists = [
  { id: '1', title: 'artist 1' },
  { id: '2', title: 'artist 2' },
  { id: '3', title: 'artist 3' },
];
const coverImages = [
  { id: '1', image_id: '1', thumbnail: { alt_text: 'image1alt' } },
  { id: '2', image_id: '2', thumbnail: { alt_text: 'image2alt' } },
  { id: '3', image_id: '3', thumbnail: { alt_text: 'image3alt' } },
];
describe('<FeaturedArtists />', () => {
  it.skip('throws an error if no featured artists', () => {
    expect(() => {
      render(<FeaturedArtists />, { theme: defaultTheme, store: store });
    }).toThrow();
  });
  it.skip('throws an error if no cover images', () => {
    expect(() => {
      render(<FeaturedArtists artists={artists} />, {
        theme: defaultTheme,
        store: store,
      });
    }).toThrow();
  });
  it('matches the snapshot', () => {
    const wrapper = render(
      <FeaturedArtists artists={artists} coverImages={coverImages} />,
      { theme: defaultTheme, store: store }
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a link to /artists/:id for each artist', () => {
    render(<FeaturedArtists artists={artists} coverImages={coverImages} />, {
      theme: defaultTheme,
      store: store,
    });
    for (let i = 0; i < artists.length; i++) {
      expect(screen.getAllByRole('link')[i]).toHaveAttribute(
        'href',
        `/artists/${artists[i].id}`
      );
    }
  });
  it('renders an img for each cover image with the correct alt_text', () => {
    render(<FeaturedArtists artists={artists} coverImages={coverImages} />, {
      theme: defaultTheme,
      store: store,
    });
    for (let i = 0; i < coverImages.length; i++) {
      expect(screen.getAllByRole('img')[i].src).toContain(
        coverImages[i].image_id
      );
      expect(screen.getAllByRole('img')[i].alt).toEqual(
        coverImages[i].thumbnail.alt_text
      );
    }
  });
  it('renders an element with the artists title', () => {
    render(<FeaturedArtists artists={artists} coverImages={coverImages} />, {
      theme: defaultTheme,
      store: store,
    });
    for (let i = 0; i < artists.length; i++) {
      expect(screen.getByText(artists[i].title)).toBeInTheDocument();
    }
  });
});
