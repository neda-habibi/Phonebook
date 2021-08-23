import * as actionTypes from './actionTypes';
import * as modes from '../components/Modes';


export const DEFAULT_EDITING_RECORD_VALUES = {
    name: '',
    id: '',
    phone: ''
}

class PhoneBookRecord {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        this.id = Math.random().toString();
    }
}


export function reducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_CLICKED:
            return {
                ...state,
                mode: modes.ADD_MODE
            };

        case actionTypes.CANCEL_CLICKED:
            return {
                ...state,
                mode: modes.SEARCH_MODE
            };

        case actionTypes.DELETE_CLICKED:
            return {
                ...state,
                mode: modes.SEARCH_MODE,
                records: state.records.filter(record => record.id !== action.payload)
            };

        case actionTypes.EDIT_CLICKED:
            return {
                ...state,
                mode: modes.ADD_MODE,
                editingRecord: action.payload
            };

        case actionTypes.SAVE_CLICKED:
            return handleSave(state, action.payload);

        default:
            return state;
    }
}

function handleSave(state, { id, name, phone }) {
    const { records } = state;
    let newRecords = [];

    if (!!id) {
        const index = records.findIndex(item => item.id === id)
        if (index !== -1) {
            newRecords = [...records]
            newRecords.splice(index, 1, new PhoneBookRecord(name, phone))
        }
    }
    else {
        newRecords = [...records, new PhoneBookRecord(name, phone)];
    }
    return {
        ...state,
        mode: modes.SEARCH_MODE,
        editingRecord: DEFAULT_EDITING_RECORD_VALUES,
        records: newRecords
    }
}