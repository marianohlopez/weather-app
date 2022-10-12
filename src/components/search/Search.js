import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import geoApiOptions from "../api";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${geoApiOptions.url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            }
        })
        .catch(err => console.log(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
    }

    return (
        <AsyncPaginate 
            placeholder="Buscar por ciudad"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;