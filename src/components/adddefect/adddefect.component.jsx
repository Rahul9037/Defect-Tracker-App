import React, { Component } from 'react';
import { connect } from 'react-redux';
import './adddefect.styles.css';
import Header from '../header/header.component';
import {addDefect} from '../../redux/defects/defects.actions';

class AddDefect extends Component {

    constructor() {
        super()
        this.state = {
            ChgStatus: 'CloseTicket',
            Desc: '',
            Priority: '',
            Status: 'Open',
            defCat: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {

        const { Desc ,defCat ,Priority } = this.state;
        if(defCat === '' || Priority === '')
        {
            alert("Defect Caterogy and Priority are required")
        }
        else if(Desc === '')(
            alert("Please enter the Description")
        )
        else
        {
            this.props.addDefect(this.state);
            this.props.history.push('/home');
        }
        
    }

    render() {
        const { Desc ,defCat ,Priority} = this.state;
        return (
            <div>
                <Header />

                <div className="filter" style={{ height: "400px" }}>
                    <div className="homepage-header">
                        Add Defect
                    </div>
                    <form>
                        <div className="category">
                            <label> Category </label>
                            <select name="defCat" id="defCat" onChange={this.handleChange} defaultValue={"Select an Option"}>
                                <option value="Select an Option" disabled >Select an Option</option>
                                <option value="UI">UI</option>
                                <option value="Backend">Backend</option>
                                <option value="Component">Component</option>
                                <option value="Redux">Redux</option>
                                <option value="TestCategory">TestCategory</option>
                            </select>
                        </div>
                        <div className="desc">
                            <label>Description </label>
                            <textarea name="Desc" type="text" placeholder="Enter Description" onChange={this.handleChange} required></textarea>
                        </div>
                        <div className="priority">
                            <label> Priority </label>
                            <select name="Priority" id="Priority" onChange={this.handleChange} defaultValue={"Select an Option"}>
                                <option value="Select an Option" disabled >Select an Option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="add-button" onClick={this.handleSubmit}>
                            Add Defect
                    </div>
                    </form>
                </div>
            </div>

        )
    }

}

const mapDispatchToProps = Dispatch => ({
    addDefect : defect => Dispatch(addDefect(defect))
})

export default connect(null,mapDispatchToProps)(AddDefect);