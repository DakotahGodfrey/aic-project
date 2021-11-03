import { store } from 'app/store';
import FeaturedArtworks from 'components/layout/sections/FeaturedArtworks';
import { defaultTheme } from 'styles/themes';
import { render, screen } from 'test-utils';
import placeholder from 'images/placeholder.svg';
import { generatePlaceholderArray } from 'utils/helpers';
const artworks = [
  {
    id: 'a',
    title: 'A',
    image_id: 'absasdfsd',
    thumbnail: {
      alt_text: 'test',
    },
    artist_title: 'testArtistA',
    medium_display: 'testMediumA',
    date_display: 'testDateA',
  },
  {
    id: 'b',
    title: 'B',
    image_id: 'absasdfsd',
    thumbnail: {
      alt_text: 'test',
    },
    artist_title: 'testArtistB',
    medium_display: 'testMediumB',
    date_display: 'testDateB',
  },
];

describe('<FeaturedArtworks />', () => {
  it.skip('throws an error if no featured artworks are provided', () => {
    expect(() => {
      render(<FeaturedArtworks />, { theme: defaultTheme, store: store });
    }).toThrow();
  });

  it('matches the snapshot', () => {
    const { container } = render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(container).toMatchSnapshot();
  });

  it('renders a link to the /gallery/artwork/:id route for each artwork in artworks prop', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    expect(screen.getAllByRole('link')).toHaveLength(artworks.length);
    for (let index = 0; index < artworks.length; index++) {
      expect(screen.getAllByRole('link')[index]).toHaveAttribute(
        'href',
        `/gallery/artwork/${artworks[index].id}`
      );
    }
  });
  it('renders an img element with the src set to url containing the artwork image_id', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    for (let index = 0; index < artworks.length; index++) {
      expect(screen.getAllByRole('img')[index].src).toContain(
        artworks[index].image_id
      );
    }
  });
  it('renders an img with correct alt_text', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    for (let index = 0; index < artworks.length; index++) {
      expect(screen.getAllByRole('img')[index].alt).toContain(
        artworks[index].thumbnail.alt_text
      );
    }
  });
  it('if no alt_text is provided it uses the artwork title as alt text', () => {
    artworks[0].thumbnail = '';
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    expect(screen.getAllByRole('img')[0].alt).toContain(artworks[0].title);
  });
  it('renders an element with the text content set to the artworks title', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    for (let index = 0; index < artworks.length; index++) {
      expect(screen.getAllByText(artworks[index].title)).toHaveLength(1);
    }
  });
  it('renders an element with the text content set to the artworks artist_title', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });
    for (let index = 0; index < artworks.length; index++) {
      expect(screen.getAllByText(artworks[index].artist_title)).toHaveLength(1);
    }
  });
  it('renders an element with the text content set to the artworks medium_display', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    for (let index = 0; index < artworks.length; index++) {
      expect(screen.getAllByText(artworks[index].medium_display)).toHaveLength(
        1
      );
    }
  });
  it('renders an element with the text content set to the artworks date_display', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    for (let index = 0; index < artworks.length; index++) {
      expect(screen.getAllByText(artworks[index].date_display)).toHaveLength(1);
    }
  });
  it('renders a placeholder if no image_id is present', () => {
    artworks[0].image_id = '';
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    expect(screen.getAllByRole('img')[0].src).toContain(placeholder);
  });
  it('renders a placeholder if artworkData is not present', () => {
    artworks[2] = {
      alt_text: 'testing',
    };
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getAllByRole('img')[2].src).toContain(placeholder);
  });
  it('renders a placeholders alt_text', () => {
    artworks[2] = {
      alt_text: 'testing',
    };
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    expect(screen.getAllByRole('img')[2].alt).toContain('testing');
  });
  it('renders the right placeholder text', () => {
    render(<FeaturedArtworks artworks={artworks} />, {
      theme: defaultTheme,
      store: store,
    });

    expect(screen.getByText(/loading/i)).toBeTruthy();
  });
});
