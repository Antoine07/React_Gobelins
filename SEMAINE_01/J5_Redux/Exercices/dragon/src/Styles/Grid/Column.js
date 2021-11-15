import styled from 'styled-components';

const Column = styled.div`
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1;
    margin: .5rem;

    background-color: #efefef;
    padding: .2rem;
    max-width: calc(100% / ${props => props.number ?? 1});
    @media screen and (min-width: 800px) {
        .column {
          flex: 1;
        }
      }
`;

export default Column;