import { store } from 'app/store';
import ArtistsGalleryView from 'components/layout/sections/ArtistsGalleryView';
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

describe('<ArtistsGallery />', () => {
  it.skip('throws if no artists are provided', () => {
    expect(() => {
      render(<ArtistsGalleryView />);
    }).toThrow();
  });
  it.skip('throws if no coverImages are provided', () => {
    expect(() => {
      render(<ArtistsGalleryView artists={artists} />);
    }).toThrow();
  });
  it('matches the snapshot', () => {
    const { container } = render(
      <ArtistsGalleryView artists={artists} coverImages={coverImages} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders a link to /artists/:id for each artist', () => {
    const { container } = render(
      <ArtistsGalleryView artists={artists} coverImages={coverImages} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    for (let i = 0; i < artists.length; i++) {
      expect(screen.getAllByRole('link')[i]).toHaveAttribute(
        'href',
        `/artists/${artists[i].id}`
      );
    }
  });
  it('renders an img for each coverImage', () => {
    render(<ArtistsGalleryView artists={artists} coverImages={coverImages} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.queryAllByRole('img')).toHaveLength(3);
  });
  it('renders an img with the correct alt text', () => {
    render(<ArtistsGalleryView artists={artists} coverImages={coverImages} />, {
      theme: defaultTheme,
      store: store,
    });
    for (let index = 0; index < coverImages.length; index++) {
      const img = screen.queryAllByRole('img')[index];
      expect(img).toHaveAttribute('alt', coverImages[index].thumbnail.alt_text);
    }
  });
  it('renders a placeholder if no coverImage is provided', () => {
    coverImages[0].image_id = null;
    const { container } = render(
      <ArtistsGalleryView artists={artists} coverImages={coverImages} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getAllByRole('img')[0].src).toContain('placeholder');
  });
  it('renders an element with the text content set to the artist title', () => {
    const { container } = render(
      <ArtistsGalleryView artists={artists} coverImages={coverImages} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    for (let i = 0; i < artists.length; i++) {
      expect(screen.getByText(artists[i].title)).toBeInTheDocument();
    }
  });
  it('renders a placeholder image with alt text set to loading if no artist id exists', () => {
    artists[0].id = null;
    const { container } = render(
      <ArtistsGalleryView artists={artists} coverImages={coverImages} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getAllByRole('img')[0].src).toContain('placeholder');
    expect(screen.getAllByRole('img')[0].alt).toBe('loading');
  });
  it('renders a message of loading', () => {
    const { container } = render(
      <ArtistsGalleryView artists={artists} coverImages={coverImages} />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
