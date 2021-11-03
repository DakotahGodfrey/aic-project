import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';
import TitleBlock from 'components/layout/headers/TitleBlock';
import AccordionCard from 'components/layout/cards/AccordionCard';
const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: max-content auto;
  font-size: 1.7rem;
  gap: 1.5rem 0;
  margin-top: 2rem;
  padding: 0.5rem;
  color: ${getFromTheme('textColor')};
  dt {
    padding: 1rem 2rem 0 0;
    font-weight: 900;
    border-top: 1px solid #b3b3b3;
  }
  dd {
    padding-top: 1rem;
    border-top: 1px solid #b3b3b3;
  }
`;

const ArtworkInfo = ({ artworkData, columns = 3 }) => {
  const {
    title,
    date_display,
    artist_display,
    artist_title,
    place_of_origin,
    medium_display,
    dimensions,
    credit_line,
    main_reference_number,
    publication_history,
    exhibition_history,
    provenance_text,
  } = artworkData;
  return (
    <>
      <div>
        <div>
          {title && (
            <TitleBlock>
              <h1>{title}</h1>
              <p>{date_display}</p>
              <p className='artist-display'>{artist_display}</p>
            </TitleBlock>
          )}
          <DescriptionList>
            <dt>Artist</dt>
            <dd>{artist_title && artist_title}</dd>
            <dt>Origin</dt>
            <dd>{place_of_origin && place_of_origin}</dd>
            <dt>Medium</dt>
            <dd>{medium_display && medium_display}</dd>
            <dt>Dimensions</dt>
            <dd>{dimensions && dimensions}</dd>
            <dt>Credit Line</dt>
            <dd>{credit_line && credit_line}</dd>
            <dt>Reference Number #</dt>
            <dd>{main_reference_number && main_reference_number}</dd>
          </DescriptionList>
        </div>
        {publication_history && publication_history !== null && (
          <AccordionCard
            heading={'Publication History'}
            body={publication_history.split('\n')}
            isArray
          />
        )}
        {exhibition_history && exhibition_history !== null && (
          <AccordionCard
            heading={'Exhibition History'}
            body={exhibition_history.split('\n')}
            isArray
          />
        )}
        {provenance_text && provenance_text !== null && (
          <AccordionCard heading={'Provenance'} body={provenance_text} />
        )}
      </div>
    </>
  );
};

export default ArtworkInfo;
