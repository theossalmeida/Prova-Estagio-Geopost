import { Fragment } from "react"

export const Grupos = ({grupo, time1, time2, time3, time4}) => (
    <Fragment>
    <tr>
        <td>{grupo}</td>
        <td><img class="flagPais" src={`../imgs/${time1}.png`} />{time1}</td>
        <td><img class="flagPais" src={`../imgs/${time2}.png`} />{time2} </td>
        <td><img class="flagPais" src={`../imgs/${time3}.png`} />{time3} </td>
        <td><img class="flagPais" src={`../imgs/${time4}.png`} />{time4} </td>
    </tr>
    </Fragment>
)