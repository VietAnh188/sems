import { useEffect, useState } from 'react';

const useToggle = initialState => {
    const [toggle, setToggle] = useState(initialState);

    const handleToggle = state => {
        setToggle(state);
    };

    useEffect(() => {
        setToggle(initialState);
    }, [initialState]);

    return [toggle, handleToggle];
};

export default useToggle;
