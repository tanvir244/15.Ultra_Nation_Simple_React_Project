import React from 'react';

const Country = (props) => {
    const {population, region} = props.country;
    const flagStyle = {height: '50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h2>This is {props.country.name.common}</h2>
            <img style={flagStyle} src={props.country.flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;