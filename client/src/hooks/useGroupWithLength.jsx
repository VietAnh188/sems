import { useEffect, useState } from 'react';
import axios from 'axios';

const useGroupWithLength = ({ api }) => {
    const [data, setData] = useState([]);

    const fetchGroupData = async api => {
        const { data } = await axios.get(api);
        const result = data.map(item => {
            for (const key in item) {
                if (Array.isArray(item[key])) item[key] = item[key].length;
            }
            return item;
        });
        return result;
    };

    useEffect(() => {
        fetchGroupData(api)
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, [api]);

    return data;
};

export default useGroupWithLength;
