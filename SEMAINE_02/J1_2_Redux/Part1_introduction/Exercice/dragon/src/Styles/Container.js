import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: .5rem;
`;

// Composition en React mettre un composant dans un autre
// children est une propiété qui est définie par React pour faire de la composition
const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}


export default Container;
