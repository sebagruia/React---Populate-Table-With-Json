import React from 'react';
import TableRow from '../components/TableRow';
import Dropdown from 'react-bootstrap/Dropdown';
import './Table.css';

const Table = ({result, filterMechanismForNumbers, filterMechanismForStrings})=>{
    return(
        <div>
            <table id="populatedTable">
                <thead>
                <tr className="table-head">
                    <th>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            ID
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <input type="number" className="form-control id-input" placeholder="Type an ID" aria-label="Search for ID" aria-describedby="Type an ID and search for it" min="1" max="17" onChange={filterMechanismForNumbers}/>
                        </Dropdown.Menu>
                    </Dropdown>
                    </th>
                    <th>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Team Name
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <input type="search" className="form-control teamName-input" placeholder="Search Team Name" aria-label="Search Team Name" aria-describedby="Type a Team Name to search for" onChange={filterMechanismForStrings}/>
                        </Dropdown.Menu>
                    </Dropdown>
                    </th>
                    <th>Games Win</th>
                    <th>Games Loss</th>
                    <th>Points</th>
                </tr>
            </thead>
            
                <TableRow result={result}/>
            
            </table>
        </div>

    );

    }

export default Table;
