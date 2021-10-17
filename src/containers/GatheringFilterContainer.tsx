import React from "react";
import {GatheringFilter} from '../components/index';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';

function GatheringFilterContainers(){
    const filters = useSelector((state: RootState)=> state.gathering.filters);

    const onClickFilter = ()=>{

    }
    
    return (
        <GatheringFilter filters={filters} onClickFilter={onClickFilter}></GatheringFilter>
    );
}

export default GatheringFilterContainers;