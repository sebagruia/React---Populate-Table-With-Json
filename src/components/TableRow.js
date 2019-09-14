import React from 'react';

const TableRow = ({result})=>{
    return(
       <div>
           {result()}
       </div>
    );


}

export default TableRow;