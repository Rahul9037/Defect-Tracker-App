import React from 'react';
import './homepage.styles.css';
import { Switch , Route } from 'react-router-dom';

import DefectDetails from '../../components/defectdetails/defectdetails.component';
import Header from '../../components/header/header.component';

const HomePage = ({match}) => {
    return (  
            <div>
                <Header />
            <Switch>
                <Route path={`${match.path}`} component={DefectDetails}/>
            </Switch>
        </div>
    )
}

export default HomePage;