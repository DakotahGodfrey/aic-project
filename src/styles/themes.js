const defaultTheme = {
  textColor: '#222',
  secondaryColor: '#fff',
  navBG: '#111',
  lightColor: '#eee',
  brandColor: '#B50938',
  brandColorFaded: 'rgba(181,9,56, 0.7)',
  serifFonts: `Georgia, "Times New Roman", Times, serif`,
  sansSerifFonts: `Helvetica, sans-serif`,
  mutedText: '#666',
  linkHover: '#22959c',
  lightGrey: '#F3F3F3',
};
const darkTheme = {
  textColor: '#eee',
  navBG: '#111',
  secondaryColor: '#151515',
  lightColor: '#eee',
  brandColor: '#B50938',
  brandColorFaded: 'rgba(181,9,56, 0.7)',
  serifFonts: `Georgia, "Times New Roman", Times, serif`,
  sansSerifFonts: `Helvetica, sans-serif`,
  mutedText: '#ddd',
  linkHover: '#22959c',
  lightGrey: '#F3F3F3',
};

const getFromTheme = (propName) => (props) => props.theme[propName];
export { defaultTheme, darkTheme, getFromTheme };
