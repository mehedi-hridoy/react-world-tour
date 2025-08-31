import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log("add this as visited country")
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlag = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlag)
    }

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countires: {visitedCountries.length}</h5>
                <ul>
                   {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>) }
                  
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }

            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;