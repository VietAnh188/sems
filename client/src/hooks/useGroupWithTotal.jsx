import { useEffect, useState } from 'react';
import axios from 'axios';

const useGroupWithTotal = ({ api }) => {
    const [data, setData] = useState([]);

    const fetchGroupData = async api => {
        const { data } = await axios.get(api);
        const result = data.map(item => {
            for (const key in item) {
                if (Array.isArray(item[key])) {
                    item[key] = item[key].reduce((prev, curr) => {
                        const money = curr.salary.split('$');
                        if (money[1].includes(',')) {
                            curr.salary = Number(money[1].replace(',', ''));
                        } else {
                            curr.salary = Number(money[1]);
                        }
                        return prev + curr.salary;
                    }, 0);
                }
            }
            return item;
        });
        return result;
    };

    useEffect(() => {
        fetchGroupData(api)
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    return data;
};

export default useGroupWithTotal;
