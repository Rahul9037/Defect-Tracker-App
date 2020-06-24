import { DefectActionTypes } from './defets.types';

export const getFilteredDefects = filter =>({
    type : DefectActionTypes.GET_FILTERED_DEFECTS,
    data : filter
});

export const updateStatus = defect => ({
    type : DefectActionTypes.UPDATE_DEFECT,
    data : defect
})

export const addDefect = defect => ({
    type : DefectActionTypes.ADD_DEFECT,
    data : defect
})