import * as ActionTypes from './actionTypes';

function actionCreator(type, payload) {
    return {
        type,
        payload
    }
}

export const addButtonClicked = () => actionCreator(ActionTypes.ADD_CLICKED);
export const cancelButtonClicked = () => actionCreator(ActionTypes.CANCEL_CLICKED);
export const saveButtonClicked = record => actionCreator(ActionTypes.SAVE_CLICKED, record);
export const deleteButtonClicked = id => actionCreator(ActionTypes.DELETE_CLICKED, id);
export const editButtonClicked = record => actionCreator(ActionTypes.EDIT_CLICKED, record);