import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
   margin: 2rem;
   padding: 1rem;
`;

const Col = ({ children }) => {
    return (
       <Wrapper>
           {children}
       </Wrapper>
    );
}

export default Col;