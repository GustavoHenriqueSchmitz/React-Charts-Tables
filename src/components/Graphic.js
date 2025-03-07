import React from "react"
import { ButtonsGraphicTable } from "./buttons/GraphicTable"
import { DonutGraphic } from "./graphic/donut/DonutGraphic"
import { ColumnGraphic } from "./graphic/column/ColumnGraphic"
import { Header } from "./header/Header"
import { LineGraphic } from "./graphic/line/LineGraphic"

function Graphic() {

    const salary = React.useMemo(
        () => [2, 5, 8, 10, 3], []
    )
    const employees = React.useMemo(
        () => [
            { name: "Intern One", salary: 800, salaryTarget: 1200 },
            { name: "Intern Two", salary: 900, salaryTarget: 1300 },
            { name: "Junior Dev A", salary: 1500, salaryTarget: 2000 },
            { name: "Junior Dev B", salary: 1600, salaryTarget: 2100 },
            { name: "Junior Dev C", salary: 1700, salaryTarget: 2200 },
            { name: "Junior QA A", salary: 1800, salaryTarget: 2300 },
            { name: "Junior QA B", salary: 1900, salaryTarget: 2400 },
            { name: "Mid Dev A", salary: 2200, salaryTarget: 2800 },
            { name: "Mid Dev B", salary: 2400, salaryTarget: 3000 },
            { name: "Mid Dev C", salary: 2600, salaryTarget: 3200 },
            { name: "Mid QA A", salary: 2500, salaryTarget: 3100 },
            { name: "Mid QA B", salary: 2700, salaryTarget: 3300 },
            { name: "Designer A", salary: 2300, salaryTarget: 2900 },
            { name: "Designer B", salary: 2800, salaryTarget: 3400 },
            { name: "Support Lead", salary: 2900, salaryTarget: 3500 },
            { name: "Senior Dev A", salary: 3200, salaryTarget: 4000 },
            { name: "Senior Dev B", salary: 3500, salaryTarget: 4200 },
            { name: "Senior Dev C", salary: 3800, salaryTarget: 4500 },
            { name: "Senior QA", salary: 3300, salaryTarget: 4100 },
            { name: "Tech Lead A", salary: 4200, salaryTarget: 4800 },
            { name: "Tech Lead B", salary: 4500, salaryTarget: 5000 },
            { name: "Product Owner", salary: 4000, salaryTarget: 4600 },
            { name: "UX Lead", salary: 3600, salaryTarget: 4300 },
            { name: "UI Lead", salary: 3400, salaryTarget: 4200 },
            { name: "DevOps Lead", salary: 4800, salaryTarget: 5500 },
            { name: "Engineering Manager", salary: 5500, salaryTarget: 6500 },
            { name: "Product Manager", salary: 5200, salaryTarget: 6000 },
            { name: "CTO", salary: 8000, salaryTarget: 9000 }
        ], []
    )
    const employeesQuantity = React.useMemo(
        () => [20, 22, 24, 25, 26, 27, 28, 28, 28, 28, 28, 28], []
    )

    return (
        <>
            <Header title="GRÁFICO"/>
            <ButtonsGraphicTable textButtonLeft="Gráfico" textButtonRight="Tabela"/>
            
            <DonutGraphic 
                series={salary} 
                labels={["0 a 1000", "1000 a 2000", "2000 a 3000", "3000 a 5000", "5000 >"]}
            />
            
            <ColumnGraphic 
                seriesData1={[
                    employees[0].salary,
                    employees[1].salary,
                    employees[2].salary,
                    employees[3].salary,
                    employees[4].salary,
                    employees[5].salary,
                    employees[6].salary,
                    employees[7].salary,
                    employees[8].salary
                ]} 
                seriesName1="Salário"
                seriesData2={[
                    employees[0].salaryTarget,
                    employees[1].salaryTarget,
                    employees[2].salaryTarget,
                    employees[3].salaryTarget,
                    employees[4].salaryTarget,
                    employees[5].salaryTarget,
                    employees[6].salaryTarget,
                    employees[7].salaryTarget,
                    employees[8].salaryTarget
                ]}
                seriesName2="Meta Salarial"
                categories={[
                    employees[0].name,
                    employees[1].name,
                    employees[2].name,
                    employees[3].name,
                    employees[4].name,
                    employees[5].name,
                    employees[6].name,
                    employees[7].name,
                    employees[8].name
                ]}
                title="Funcionários | Comparação de Salários'"
            />

            <LineGraphic 
                name="Total de funcionários"
                categories={["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"]}
                data={employeesQuantity} 
                text="Quantidade | Funcionários"
            />
        </>
    )
}

export { Graphic }