import axios from 'axios';

import { updateError, updateStart, updateSuccess } from '../Slice/userSlice';

export const updateUser = async (user: any, dispatch: any) => {
    dispatch(updateStart());
    try {
        console.log('heheh');

        const res = await axios.post('http://localhost:8000/v1/update', user);

        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
};
