import React, { useEffect, useState } from 'react';
import { techBrands } from '../data';
import useMeasure from 'react-use-measure';

function Brands() {
    return (
        <div className="nexcent__clients-slider">
            <div className="nexcent__clients-track">
                {[...techBrands, ...techBrands].map((brand, index) => (
                    <div className="logo-item" key={index}>
                        {<brand.icon className="text-6xl" color={brand.color} />}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Brands;

