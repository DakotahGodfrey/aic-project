import { store } from 'app/store';
import ArtworkInfo from 'components/layout/sections/ArtworkInfo';
import { defaultTheme } from 'styles/themes';
import { screen, render } from 'test-utils';

const artworkData = {
  title: 'Artwork Title',
  artist_display: 'Artist Name',
  date_display: 'Date',
  artist_title: 'Artist Title',
  place_of_origin: 'Place of Origin',
  medium_display: 'Medium display',
  dimensions: 'Dimensions text',
  credit_line: 'credit line text',
  main_reference_number: 'main reference number 34',
  publication_history: 'publication history',
  exhibition_history: 'exhibition history',
  provenance_text: 'provenance text',
};

describe('<ArtworkInfo />', () => {
  it.skip('throws an error if no artworkData is provided', () => {
    expect(() => {
      render(<ArtworkInfo />, { theme: defaultTheme, store: store });
    }).toThrow();
  });
  it('matches the snapshot', () => {
    const { container } = render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(container).toMatchSnapshot();
  });
  it('renders an h1 withthe artwork title', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('heading')).toHaveTextContent(artworkData.title);
  });
  it('renders the date_display', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.date_display)).toBeTruthy();
  });
  it('renders the artist_display', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.artist_display)).toBeTruthy();
  });
  it('renders the artist title if it exists', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.artist_title)).toBeTruthy();
  });
  it('renders the place_of_origin if it exists', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.place_of_origin)).toBeTruthy();
  });
  it('renders the medium_display if it exists', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.medium_display)).toBeTruthy();
  });
  it('renders the dimensions  if it exists', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.dimensions)).toBeTruthy();
  });
  it('renders the credit_line if it exists', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.credit_line)).toBeTruthy();
  });
  it('renders the main_reference_number if it exists', () => {
    render(<ArtworkInfo artworkData={artworkData} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByText(artworkData.main_reference_number)).toBeTruthy();
  });
});
