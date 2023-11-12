import axios from 'axios';
import { useCallback, useEffect, useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case 'FAILED':
            return {
                ...state,
                isError: true,
            };
        default:
            throw Error('something went wrong');
    }
};

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
};

export const useDataHook = () => {
    const [url, setUrl] = useState(
        'https://jsonplaceholder.typicode.com/users'
    );
    // const [data, setData] = useState([]);

    const [data, dispatch] = useReducer(reducer, initialState);
    const [query, setQuery] = useState(null);

    const getData = useCallback(async () => {
        try {
            const data = (await axios.get(url)).data;
            dispatch({ type: 'SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FAILED' });
        }
    }, [url]);

    const handleQuery = (e) => {
        const { value } = e.target;
        if (isNaN(+value) || +value > 10) {
            alert('Type number from 1 to 10');
            return;
        }

        setQuery(e.target.value);
    };

    useEffect(() => {
        dispatch({ type: 'FETCHING' });
        setUrl(
            `https://jsonplaceholder.typicode.com/users/${query ? query : ''}`
        );
        getData();
    }, [getData, query]);

    return { data, query, handleQuery };
};
