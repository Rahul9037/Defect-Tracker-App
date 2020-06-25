
import {DefectActionTypes} from './defets.types';

const INITIAL_STATE = {
    defects : [
        { "id" : 1,"defCat" : "UI", "Desc" : "And develop other functionalities too by dividing it into different components.", "Priority" : 1, "Status" : "Open", "ChgStatus" : "CloseTicket"},
        { "id" : 2,"defCat" : "Backend", "Desc" : "different components.", "Priority" : 2, "Status" : "Open", "ChgStatus" : "CloseTicket"},
        { "id" : 3,"defCat" : "Backend", "Desc" : "And develop other functionalities too by dividing it into different components.And develop other functionalities", "Priority" : 4, "Status" : "Close", "ChgStatus" : "OpenTicket"},
        { "id" : 4,"defCat" : "Redux", "Desc" : "And develop other functionalities too by dividing it into different components.And develop other functionalitiesAnd develop other functionalities", "Priority" : 1, "Status" : "Resolved", "ChgStatus" : "CloseTicket"},
        { "id" : 5,"defCat" : "Component", "Desc" : "And develop other functionalities too by dividing", "Priority" : 3, "Status" : "Open", "ChgStatus" : "CloseTicket"},
        { "id" : 6,"defCat" : "Component", "Desc" : "And ", "Priority" : 3, "Status" : "Open", "ChgStatus" : "CloseTicket"},
        { "id" : 7,"defCat" : "TestCategory", "Desc" : "And develop other functionalities too by dividing", "Priority" : 3, "Status" : "Open", "ChgStatus" : "CloseTicket"},
        { "id" : 8,"defCat" : "TestCategory", "Desc" : "And develop other functionalities too by dividing", "Priority" : 3, "Status" : "Open", "ChgStatus" : "CloseTicket"}
    
    ],
    filteredDefects : []
};

const defectsReducer = (state = INITIAL_STATE,action) => {
    let newDefectList = [];
    function compare(a,b) {
        if (a.id < b.id)
           return -1;
        if (a.id > b.id)
          return 1;
        return 0;
      }
    switch(action.type)
    {
        case DefectActionTypes.GET_FILTERED_DEFECTS :

            if(action.data === 'All')
            {
                newDefectList = state.defects;
            }
            state.defects.filter( defect => {
                
                if(defect.defCat === action.data)
                {
                    newDefectList.push(defect)
                }
                else if(defect.Priority === action.data)
                {
                    newDefectList.push(defect)
                }
                else
                {
                    return;
                }
            })
            newDefectList.sort(compare);
            if(newDefectList.length === 0)
            {
                alert("No Entry Found")
            }
            return {
                ...state,
                filteredDefects : newDefectList,
            }

        case DefectActionTypes.UPDATE_DEFECT :
            newDefectList = state.defects.filter( defect => defect.id !== action.data.id)  
            newDefectList.push(action.data);
            newDefectList.sort(compare); 
            return {
                ...state,
                defects : newDefectList,
                filteredDefects : []
            }

        case DefectActionTypes.ADD_DEFECT :
            
            return {
                ...state,
                defects : [ ...state.defects , { id : state.defects.length+1 , ...action.data}],
                filteredDefects : []
            }

        default :
            return state
    }

}

export default defectsReducer;