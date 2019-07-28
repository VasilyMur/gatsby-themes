import React from 'react';
import colors from '../tokens/colors.js';

export default ({ children }) => {
    return(
        <div style={{ padding: '1rem', backgroundColor: colors.primary }}>
            { children }
        </div>
    )
};
