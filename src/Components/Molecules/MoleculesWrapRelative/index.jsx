import React from 'react';

const Index = ({ children, absoluteClass }) => {
    return (
        <div className={`content`}>
            {children}
        </div>
    );
}

export default Index;
