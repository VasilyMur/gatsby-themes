import React from 'react';
import { colors } from 'gatsby-theme-livestream';

export default ({ children }) => {
    return(
        <div style={{ padding: '2rem', backgroundColor: colors.primary, border: '2px solid #000' }}>
            <h2>Hey!!</h2>
            { children }
        </div>
    )
};
