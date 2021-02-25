import { baseApi } from '../../apis/baseApi';

export const fetchBegin = () => ({
    type: 'FETCH_DEFAULT_BEGIN'
});

export const fetchSuccess = (items: any) => ({
    type: 'FETCH_DEFAULT_SUCCESS',
    payload: { items }
});

export const fetchFailure = (error: any) => ({
    type: 'FETCH_DEFAULT_FAILURE',
    payload: { error }
});

export const fetch_default = () => async (dispatch: any) => {
    dispatch(fetchBegin());
    await baseApi.get('/default_path').then((response) => {
        dispatch(fetchSuccess(response.data));
    }).catch((error) => {
        dispatch(fetchFailure(error))
    })
};