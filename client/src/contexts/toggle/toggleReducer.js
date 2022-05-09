import { toggleOpenAction, toggleCloseAction } from './toggleActions';

const toggleReducer = (state, action) => {
    switch (action.type) {
        case toggleOpenAction().type:
            return {
                isToggled: true,
            };
        case toggleCloseAction().type:
            return {
                isToggled: false,
            };
    }
};

export default toggleReducer;
