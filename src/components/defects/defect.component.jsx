import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../../redux/defects/defects.actions';

class Defect extends Component {

    constructor(){
        super()
        this.state = {
            id : '',
            ChgStatus : '',
            Desc : '',
            Priority : '',
            Status : '',
            defCat : ''
        }
    }

    handleChange = () =>{
        const { id,ChgStatus,Desc,Priority,defCat } = this.props.defect;
        if( ChgStatus === 'CloseTicket')
        {
            this.setState({ 
                id : id,
                Desc :Desc,
                Priority :Priority,
                defCat : defCat,
                Status : 'Resolved',
                ChgStatus : 'No Action Pending'
             } , () => this.props.updateStatus(this.state))
        }
        
        
    }

    render(){
        const { ChgStatus,Desc,Priority,Status,defCat } = this.props.defect;
        return (
            <tr>
                <td style={{ width: "20%" }}>{defCat}</td>
                <td style={{ width: "35%", textAlign: "left" }}>{Desc}</td>
                <td style={{ width: "5%" }}>{Priority}</td>
                <td style={{ width: "20%" }}>{Status}</td>
                <td style={{ width: "20%" , cursor : "pointer" , color: "blue"}} 
                onClick={this.handleChange}>{ChgStatus}</td>
            </tr>
        )
    }  
} 

const mapStateToProps = state => ({
    defects : state.defectsReducer.defects
})

const mapDispatchToProps = dispatch => ({
    updateStatus : (defect) => dispatch(updateStatus(defect))
})

export default connect(mapStateToProps,mapDispatchToProps)(Defect);