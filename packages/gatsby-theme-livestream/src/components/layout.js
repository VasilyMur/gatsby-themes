import React from 'react';
// import { MDXProvider } from '@mdx-js/react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import H1 from './h1';

// const components = {
//     h1: H1,
//     p: props => <p style={{
//         fontSize: '1.8rem'
//     }}
//     {...props}
//     />
// }
const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  maxWidthSingle: '840px',
  maxWidthFront: '600px',
  innerPadding: '4rem 2rem',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  /* color: ${props => props.theme.black}; */
  color: #646464;
`;

const Content = styled.div`
  min-height: 82vh;
`;


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.8rem;
  line-height: 1.8;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
}
a {
  text-decoration: none;
  /* color: ${theme.black}; */
  color: #000;
}
p {
  margin: 20px 0;
}
strong {
  /* color: ${theme.black}; */
  color: #000;
}
main a {
  border-bottom: 2px solid ${theme.red};
}
 
h1 {
  font-size: 3.5rem;
  font-family: 'Roboto', sans-serif;
  margin: 1.5rem 0 1rem;
  text-align: center;
  font-weight: 700;
  font-style: italic;
  color: #000;
  @media (max-width: 800px) {
    font-size: 2.5rem;
    margin: 0 0 1.5rem;
    line-height: 1.2;
    }
}

h2,h3,h4,h5,h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  text-align: left;
  font-style: italic;
  color: #000;
  @media (max-width: 800px) {
    line-height: 1.2;
    }
}

h2 {
  font-size: 2.6rem;
  @media (max-width: 800px) {
    font-size: 2.2rem;
    }
}

h3 {
  font-size: 2.2rem;
  @media (max-width: 800px) {
    font-size: 2rem;
    }
}

table {
  text-align: left;
  width: 100%;
  thead {
    background: ${theme.red};
    color: #fff;
  }
  th {
    padding: 4px;
  }
}


ol {
  padding: 18px;
    li {
      list-style: decimal;
    }
    ul {
      padding-left: 20px;
      li {
        list-style: square; 
      }
    }
  }



`;


export default ({ children }) => {
    return(
        <ThemeProvider theme={theme}> 
            <StyledPage>
                <Content>
                <GlobalStyle />
                    <section style={{ display: 'block', maxWidth: '650px', margin: '2rem auto', fontFamily: 'san-serif' }}>
                        { children }
                    </section>
                </Content>
             </StyledPage>
        </ThemeProvider>

    // <MDXProvider components={components}>

    // </MDXProvider>
    )
};




