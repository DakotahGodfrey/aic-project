import styled from 'styled-components';
import { getFromTheme } from 'styles/themes.js';

const Table = styled.table`height: max-content;
font-size: 1.6rem;
border-collapse: collapse;
text-align: left;
color: ${getFromTheme('textColor')};
font-family: ${getFromTheme('sansSerifFonts')};
td,
th {
  padding-bottom: 1rem;
}
tr:not(:first-child) {
  td,
  th {
    padding-top: 1rem;
  }
}
tr:not(:last-child) {
  th {
    border-bottom: solid 1px ${(props) => props.theme.mutedText};
  }
  td {
    border-bottom: 1px solid ${(props) => props.theme.mutedText};
  }
`;

export default Table;
