import React from 'react';

const Index = ({ children }) => {
    return (
        <>
          <p className={`desc`}>
            {children}  
          </p>  
        </>
    );
}

export default Index;
