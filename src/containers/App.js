import React, {Component} from 'react';
import  Table from './Table';
import {dataJson} from '../components/dataJson';

class App extends Component{
    constructor(){
        super();
        this.state = {
            dataBase:[]
        }
    }

    componentDidMount(){
        this.setState({dataBase:dataJson});
    }

    render(){
        
        const result = () => {
            const table = document.getElementById('populatedTable');
            this.state.dataBase.map((team, i) => {
                const tableRowHtml = `  <td class="id">${i+1}</td>
                                        <td class="name">${team.name}</td>
                                        <td class="win">${team.win}</td>
                                        <td class="loss">${team.loss}</td>
                                        <td class="points">${team.points}</td> `;
                const newTableRow = document.createElement('tr');
                newTableRow.classList.add('tableCellContainer');
                newTableRow.innerHTML = tableRowHtml;
                table.append(newTableRow);
        
            })
        }
        
        
        const filterMechanismForNumbers = () => {
            const idInput = document.querySelector('.id-input');
            console.log(idInput);
            const allTableCelsId = document.querySelectorAll('.id');
            if (typeof parseInt(idInput.value) === "number" && parseInt(idInput.value) > 0 && idInput.value !== '') {
                for (let cell of allTableCelsId) {
                    if (parseInt(cell.innerText) !== parseInt(idInput.value)) {
                        cell.parentElement.classList.add('hidden');
                    } else {
                        cell.parentElement.classList.remove('hidden');
                    }
        
                };
            } else if (idInput.value === '') {
                for (let cell of allTableCelsId) {
                    cell.parentElement.classList.remove('hidden');
                }
        
            };
        }
        
        
        
        const filterMechanismForStrings = () => {
            const allTableCelsName = document.querySelectorAll('.name');
            const teamNameinput = document.querySelector('.teamName-input');
            console.log(teamNameinput);
            if (typeof teamNameinput.value === "string" ) {
                for (let cell of allTableCelsName) {
                    if (!cell.innerText.toLowerCase().includes(teamNameinput.value.toLowerCase())) {
                        cell.parentElement.classList.add('hidden')
                    } else if (cell.innerText.toLowerCase().includes(teamNameinput.value.toLowerCase())) {
                        cell.parentElement.classList.remove('hidden');
                    }
        
                }
        
            };
        
        }


        return(

        <Table result = {result} filterMechanismForNumbers={filterMechanismForNumbers} filterMechanismForStrings={filterMechanismForStrings} />

        );
    }

    
}
export default App;

