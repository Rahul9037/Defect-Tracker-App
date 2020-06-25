import { DefectActionTypes } from './defets.types';

export const getFilteredDefects = value =>({
    type : DefectActionTypes.GET_FILTERED_DEFECTS,
    data : value
});

export const updateStatus = defect => ({
    type : DefectActionTypes.UPDATE_DEFECT,
    data : defect
})

export const addDefect = defect => ({
    type : DefectActionTypes.ADD_DEFECT,
    data : defect
})