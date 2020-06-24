import React from 'react';
import {connect} from 'react-redux';
import './defectdetails.styles.css';
import Defect from '../defects/defect.component';
import {getFilteredDefects} from '../../redux/defects/defects.actions';

const DefectDetails = ({defects,filteredDefects,getFilteredDefects}) => {

    const handleChange = (e) => {
            const { name , value } = e.target;
            getFilteredDefects({ name , value})
    }

    return (
        <div>
            <div className="filter">
                <div className="homepage-header">
                    Filter Details
                </div>
                <div className="priority">
                    <label > Priority </label>
                    <select name="Priority" id="Priority" onChange={handleChange}>
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="category">
                    <label > Category </label>
                    <select name="defCat" id="defCat" onChange={handleChange}>
                        <option value="All">All</option>
                        <option value="UI">UI</option>
                        <option value="Backend">Backend</option>
                        <option value="Component">Component</option>
                        <option value="Redux">Redux</option>
                        <option value="TestCategory">TestCategory</option>
                    </select>
                </div>
            </div>
            <div>
                <table  className="defects-table">
                    <thead>
                        <tr>
                            <th style={{width :"20%"}} >Defect Category</th>
                            <th style={{width :"35%"}}>Description</th>
                            <th style={{width :"5%"}} >Priority</th>
                            <th style={{width :"20%"}} >Status</th>
                            <th style={{width :"20%"}} >Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            (!(Array.isArray(filteredDefects) && filteredDefects.length === 0)) ? 
                            filteredDefects.map( defect => <Defect key={defect.id} defect={defect}/>)
                            :
                            defects.map( defect => <Defect key={defect.id} defect={defect}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    defects : state.defectsReducer.defects,
    filteredDefects : state.defectsReducer.filteredDefects
})

const mapDispatchToProps = Dispatch => ({
    getFilteredDefects : filter => Dispatch(getFilteredDefects(filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(DefectDetails);