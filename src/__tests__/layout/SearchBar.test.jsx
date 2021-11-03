import { store } from 'app/store';
import SearchBar from 'components/layout/Search';
import { defaultTheme } from 'styles/themes';
import { render, screen, fireEvent } from 'test-utils';

const placeholder = 'Search';
const searchHandler = jest.fn();
let value = '';
const changeHandler = jest.fn();

describe('<SearchBar />', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SearchBar
        placeholder={placeholder}
        searchHandler={searchHandler}
        value={value}
        changeHandler={changeHandler}
      />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders an input with type search and the correct placeholder', () => {
    render(
      <SearchBar
        placeholder={placeholder}
        searchHandler={searchHandler}
        value={value}
        changeHandler={changeHandler}
      />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getByRole('searchbox')).toHaveAttribute(
      'placeholder',
      placeholder
    );
  });
  it('renders an input with type search and the correct value', () => {
    render(
      <SearchBar
        placeholder={placeholder}
        searchHandler={searchHandler}
        value={value}
        changeHandler={changeHandler}
      />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getByRole('searchbox')).toHaveAttribute('value', value);
  });
  it('calls the appropriate handler when the input changes', () => {
    render(
      <SearchBar
        placeholder={placeholder}
        searchHandler={searchHandler}
        value={value}
        changeHandler={changeHandler}
      />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'a' } });
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });
  it('renders a submit button that is disabled when the input is empty', () => {
    const { rerender } = render(
      <SearchBar
        placeholder={placeholder}
        searchHandler={searchHandler}
        value={value}
        changeHandler={changeHandler}
      />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    expect(screen.getByRole('button', { name: 'search' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'search' })).toHaveAttribute(
      'disabled'
    );
  });
  it('calls the appropriate handler when the submit button is clicked', () => {
    let value = 'sdfsd';
    render(
      <SearchBar
        placeholder={placeholder}
        searchHandler={searchHandler}
        value={value}
        changeHandler={changeHandler}
      />,
      {
        theme: defaultTheme,
        store: store,
      }
    );
    fireEvent.click(screen.getByRole('button', { name: 'search' }));
    expect(searchHandler).toHaveBeenCalled();
  });
});
