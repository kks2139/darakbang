import React from "react";
import {GatheringFilter} from '../index';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';

function GatheringFilterContainers(){
    const filters = useSelector((state: RootState)=> state.gathering.filters);

    const onClickFilter = ()=>{

    }
    
    return (
        <GatheringFilter filters={filters} onClickFilter={onClickFilter}></GatheringFilter>
    );
}

export default GatheringFilterContainers;