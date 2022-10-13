import { Fragment } from "react"

export const ClassGrupos = ({grupo, time1, time2, time3, time4}) => (
    <Fragment>
    <table id="grupo A" className="classGrupos">
        <thead>
            <th>{grupo}</th>
            <th>Pontos</th>
            <th>SG</th>
        </thead>
        <tbody>
            <tr class="classificados">
                <td>{time1.name}</td>
                <td>{time1.pontos}</td>
                <td>{time1.sg}</td>
            </tr>
            <tr class="classificados">
                <td>{time2.name}</td>
                <td>{time2.pontos}</td>
                <td>{time2.sg}</td>
            </tr>
            <tr>
                <td>{time3.name}</td>
                <td>{time3.pontos}</td>
                <td>{time3.sg}</td>
            </tr>
            <tr>
                <td>{time4.name}</td>
                <td>{time4.pontos}</td>
                <td>{time4.sg}</td>
            </tr>
        </tbody>
    </table>
    </Fragment>
)