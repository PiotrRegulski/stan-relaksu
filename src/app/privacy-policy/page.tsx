import ToHomePage from '@/components/layout/ToHomePage';
import React from 'react';

const pages = () => {
    return (
        <div className='flex justify-center items-center h-96 mx-auto my-auto flex-col'>
            <p>Dokument w przygotowaniu </p>
            <ToHomePage>Wróć do strony głównej</ToHomePage>
        </div>
    );
};

export default pages;