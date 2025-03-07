import { Header } from './header/Header';
import React from 'react';
import { ButtonsGraphicTable } from './buttons/GraphicTable';
import { GenerateTable } from './table/GenerateTable';
import { SliderColumnFilter } from './table/GenerateTable'

function Table() {

    const data = React.useMemo(
        () => [
            { name: "Intern One", age: 20, jobFunction: "Intern", salary: 800, salaryTarget: 1200 },
            { name: "Intern Two", age: 19, jobFunction: "Intern", salary: 900, salaryTarget: 1300 },
            { name: "Junior Dev A", age: 23, jobFunction: "Developer", salary: 1500, salaryTarget: 2000 },
            { name: "Junior Dev B", age: 24, jobFunction: "Developer", salary: 1600, salaryTarget: 2100 },
            { name: "Junior Dev C", age: 23, jobFunction: "Developer", salary: 1700, salaryTarget: 2200 },
            { name: "Junior QA A", age: 22, jobFunction: "QA", salary: 1800, salaryTarget: 2300 },
            { name: "Junior QA B", age: 24, jobFunction: "QA", salary: 1900, salaryTarget: 2400 },
            { name: "Mid Dev A", age: 27, jobFunction: "Developer", salary: 2200, salaryTarget: 2800 },
            { name: "Mid Dev B", age: 28, jobFunction: "Developer", salary: 2400, salaryTarget: 3000 },
            { name: "Mid Dev C", age: 26, jobFunction: "Developer", salary: 2600, salaryTarget: 3200 },
            { name: "Mid QA A", age: 27, jobFunction: "QA", salary: 2500, salaryTarget: 3100 },
            { name: "Mid QA B", age: 29, jobFunction: "QA", salary: 2700, salaryTarget: 3300 },
            { name: "Designer A", age: 26, jobFunction: "Designer", salary: 2300, salaryTarget: 2900 },
            { name: "Designer B", age: 28, jobFunction: "Designer", salary: 2800, salaryTarget: 3400 },
            { name: "Support Lead", age: 30, jobFunction: "Support", salary: 2900, salaryTarget: 3500 },
            { name: "Senior Dev A", age: 32, jobFunction: "Developer", salary: 3200, salaryTarget: 4000 },
            { name: "Senior Dev B", age: 33, jobFunction: "Developer", salary: 3500, salaryTarget: 4200 },
            { name: "Senior Dev C", age: 34, jobFunction: "Developer", salary: 3800, salaryTarget: 4500 },
            { name: "Senior QA", age: 33, jobFunction: "QA", salary: 3300, salaryTarget: 4100 },
            { name: "Tech Lead A", age: 35, jobFunction: "Tech Lead", salary: 4200, salaryTarget: 4800 },
            { name: "Tech Lead B", age: 36, jobFunction: "Tech Lead", salary: 4500, salaryTarget: 5000 },
            { name: "Product Owner", age: 34, jobFunction: "Product", salary: 4000, salaryTarget: 4600 },
            { name: "UX Lead", age: 32, jobFunction: "UX Designer", salary: 3600, salaryTarget: 4300 },
            { name: "UI Lead", age: 33, jobFunction: "UI Designer", salary: 3400, salaryTarget: 4200 },
            { name: "DevOps Lead", age: 35, jobFunction: "DevOps", salary: 4800, salaryTarget: 5500 },
            { name: "Engineering Manager", age: 38, jobFunction: "Manager", salary: 5500, salaryTarget: 6500 },
            { name: "Product Manager", age: 37, jobFunction: "Manager", salary: 5200, salaryTarget: 6000 },
            { name: "CTO", age: 42, jobFunction: "Executive", salary: 8000, salaryTarget: 9000 }
        ], []
    )
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'name',
                filter: 'fuzzyText',
            },
            {
                Header: 'Idade',
                accessor: 'age',
                Filter: SliderColumnFilter,
            },
    
            {
                Header: 'Função',
                accessor: 'jobFunction',
                filter: 'fuzzyText',
            },
            {
                Header: 'Salário',
                accessor: 'salary',
                filter: 'fuzzyText',
                Cell: ({ value }) => { return `R$ ${value?value:0}` }         
            },
            {
                Header: 'Meta',
                accessor: 'salaryTarget',
                filter: 'fuzzyText', 
                Cell: ({ value }) => { return `R$ ${value?value:0}` }         
            },
        ],
        []
    )
    
    return (
        <>
            <Header title='TABELA'/>
            <ButtonsGraphicTable textButtonLeft="Gráfico" textButtonRight="Tabela"/>
            <GenerateTable columns={columns} data={data}/>
        </>
    );
}

export { Table }