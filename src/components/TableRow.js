import React from 'react';

const TableRow = ({result})=>{
    return(
        <tbody>
            {result()}
        </tbody>
    );
}

export default TableRow;