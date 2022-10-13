import { Fragment } from "react"
import * as r from "../gols"

export const Rodadas = ({grupo, time1, time2, time3, time4}) => (
    <Fragment>
    <tr>
    <td rowSpan={2}>
        <strong>{grupo}</strong>
    </td>
    <td align="right" width={150}>{time1}</td><td>{r.gAt1r1} x {r.gAt2r1}</td><td align="left" width={150}>{time2}</td>
    <td align="right" width={150}>{time1}</td><td>{r.gAt1r2} x {r.gAt3r2}</td><td align="left" width={150}>{time3}</td>
    <td align="right" width={150}>{time1}</td><td>{r.gAt1r3} x {r.gAt4r3}</td><td align="left" width={150}>{time4}</td>
    </tr>
    <tr>
    <td align="right">{time3}</td><td>{r.gAt3r1} x {r.gAt4r1}</td><td align="left">{time4}</td>
    <td align="right">{time2}</td><td>{r.gAt2r2} x {r.gAt4r2}</td><td align="left">{time4}</td>
    <td align="right">{time2}</td><td>{r.gAt2r3} x {r.gAt3r3}</td><td align="left">{time3}</td> 
</tr>
<tr>
    <td colSpan={10}><hr></hr></td>
</tr>
    </Fragment>
)