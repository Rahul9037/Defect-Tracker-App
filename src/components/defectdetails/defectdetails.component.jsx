import React from 'react';
import { connect } from 'react-redux';
import './defectdetails.styles.css';
import Defect from '../defects/defect.component';
import { getFilteredDefects } from '../../redux/defects/defects.actions';

const DefectDetails = ({ defects, filteredDefects, getFilteredDefects }) => {

    const handleChange = (e) => {
        let { name, value } = e.target;
        if(name === "Priority" && value !== "All")
        {
            value = parseInt(value);
        }
        getFilteredDefects(value)
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
                <table className="table-scroll">
                    <thead>
                        <tr>
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody className="body-half-screen">
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
    defects: state.defectsReducer.defects,
    filteredDefects: state.defectsReducer.filteredDefects
})

const mapDispatchToProps = Dispatch => ({
    getFilteredDefects: value => Dispatch(getFilteredDefects(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(DefectDetails);