import axios from "axios"
import { useEffect, useState } from "react"
import * as r from "./rodadas"

export function Simulacao() {
    const [teams, setTeams] = useState([]);
    // Etapa para consumir a api
    useEffect(() => {
        axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams',{
            headers: {
                'git-user': 'theossalmeida'
            }
        })
            .then(({data}) => {
                setTeams(data);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  
    var lista = []
    for (const pais in teams["Result"]) {
        lista.push(teams["Result"][pais]["Name"])
    };

    // Etapa para sortear os grupos
    var grupoA = [];
    var grupoB = [];
    var grupoC = [];
    var grupoD = [];
    var grupoE = [];
    var grupoF = [];
    var grupoG = [];
    var grupoH = [];

    var x = 0 // variavel de apoio para o sorteio
    while (x < 32) {
        var y = Math.floor(Math.random()*((31-x)- 0 + 1)) + 0  
        if (x <= 3) {
            grupoA.push(lista[y])
            console.log(grupoA, x)
        } else if (x > 3 && x <= 7) {
            grupoB.push(lista[y])
        } else if (x > 7 && x <= 11) {
            grupoC.push(lista[y])
        } else if (x > 11 && x <= 15) {
            grupoD.push(lista[y])
        } else if (x > 15 && x <= 19) {
            grupoE.push(lista[y])
        } else if (x > 19 && x <= 23) {
            grupoF.push(lista[y])
        } else if (x > 20 && x <= 27) {
            grupoG.push(lista[y])
        } else if (x > 27 && x <= 31) {
            grupoH.push(lista[y])
        }
        lista.splice(y, 1)
        x += 1
    }

    return (
        <div>
            <div class="faseDeGrupos">
                <div class="titulo">Grupos sorteados: </div>
                <table class="grupo">
                    <tr>
                        <td>Grupo A :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoA[0]}.png`} />{grupoA[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoA[1]}.png`} />{grupoA[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoA[2]}.png`} />{grupoA[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoA[3]}.png`} />{grupoA[3]} </td>
                    </tr>
                    <tr>
                        <td>Grupo B :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoB[0]}.png`} />{grupoB[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoB[1]}.png`} />{grupoB[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoB[2]}.png`} />{grupoB[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoB[3]}.png`} />{grupoB[3]} </td>
                    </tr>
                    <tr>
                        <td>Grupo C :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoC[0]}.png`} />{grupoC[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoC[1]}.png`} />{grupoC[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoC[2]}.png`} />{grupoC[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoC[3]}.png`} />{grupoC[3]} </td>
                    </tr>
                    <tr>
                        <td>Grupo D :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoD[0]}.png`} />{grupoD[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoD[1]}.png`} />{grupoD[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoD[2]}.png`} />{grupoD[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoD[3]}.png`} />{grupoD[3]} </td>
                    </tr>
                    <tr>
                        <td>Grupo E :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoE[0]}.png`} />{grupoE[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoE[1]}.png`} />{grupoE[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoE[2]}.png`} />{grupoE[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoE[3]}.png`} />{grupoE[3]} </td>
                    </tr>
                    <tr>
                        <td>Grupo F :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoF[0]}.png`} />{grupoF[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoF[1]}.png`} />{grupoF[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoF[2]}.png`} />{grupoF[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoF[3]}.png`} />{grupoF[3]} </td>
                    </tr>
                    <tr>
                        <td>Grupo G :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoG[0]}.png`} />{grupoG[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoG[1]}.png`} />{grupoG[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoG[2]}.png`} />{grupoG[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoG[3]}.png`} />{grupoG[3]} </td>
                    </tr>
                    <tr>
                        <td>Grupo H :</td>
                        <td><img class="flagPais" src={`../imgs/${grupoH[0]}.png`} />{grupoH[0]}</td>
                        <td><img class="flagPais" src={`../imgs/${grupoH[1]}.png`} />{grupoH[1]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoH[2]}.png`} />{grupoH[2]} </td>
                        <td><img class="flagPais" src={`../imgs/${grupoH[3]}.png`} />{grupoH[3]} </td>
                    </tr>
                </table>
            </div>
            <div class="resultadosGrupos">
                <table class="rodadasGrupo">
                    <thead>
                        <th></th>
                        <th colSpan={3}>Rodada 1</th>
                        <th colSpan={3}>Rodada 2</th>
                        <th colSpan={3}>Rodada 3</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo A</strong>
                            </td>
                            <td align="right" width={150}>{grupoA[0]}</td><td>{r.grupoAtime1r1} x {r.grupoAtime2r1}</td><td align="left" width={150}>{grupoA[1]}</td>
                            <td align="right" width={150}>{grupoA[0]}</td><td>{r.grupoAtime1r2} x {r.grupoAtime3r2}</td><td align="left" width={150}>{grupoA[2]}</td>
                            <td align="right" width={150}>{grupoA[0]}</td><td>{r.grupoAtime1r3} x {r.grupoAtime4r3}</td><td align="left" width={150}>{grupoA[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoA[2]}</td><td>{r.grupoAtime3r1} x {r.grupoAtime4r1}</td><td align="left">{grupoA[3]}</td>
                            <td align="right">{grupoA[1]}</td><td>{r.grupoAtime2r2} x {r.grupoAtime4r2}</td><td align="left">{grupoA[3]}</td>
                            <td align="right">{grupoA[1]}</td><td>{r.grupoAtime2r3} x {r.grupoAtime3r3}</td><td align="left">{grupoA[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo B</strong>
                            </td>
                            <td align="right">{grupoB[0]}</td><td>{r.grupoBtime1r1} x {r.grupoBtime2r1}</td><td align="left">{grupoB[1]}</td>
                            <td align="right">{grupoB[0]}</td><td>{r.grupoBtime1r2} x {r.grupoBtime3r2}</td><td align="left">{grupoB[2]}</td> 
                            <td align="right">{grupoB[0]}</td><td>{r.grupoBtime1r3} x {r.grupoBtime4r3}</td><td align="left">{grupoB[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoB[2]}</td><td>{r.grupoBtime3r1} x {r.grupoBtime4r1}</td><td align="left">{grupoB[3]}</td>
                            <td align="right">{grupoB[1]}</td><td>{r.grupoBtime2r2} x {r.grupoBtime4r2}</td><td align="left">{grupoB[3]}</td>
                            <td align="right">{grupoB[1]}</td><td>{r.grupoBtime2r3} x {r.grupoBtime3r3}</td><td align="left">{grupoB[2]}</td>
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo C</strong>
                            </td>
                            <td align="right">{grupoC[0]}</td><td>{r.grupoCtime1r1} x {r.grupoCtime2r1}</td><td align="left">{grupoC[1]}</td>
                            <td align="right">{grupoC[0]}</td><td>{r.grupoCtime1r2} x {r.grupoCtime3r2}</td><td align="left">{grupoC[2]}</td>
                            <td align="right">{grupoC[0]}</td><td>{r.grupoCtime1r3} x {r.grupoCtime4r3}</td><td align="left">{grupoC[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoC[2]}</td><td>{r.grupoCtime3r1} x {r.grupoCtime4r1}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoC[1]}</td><td>{r.grupoCtime2r2} x {r.grupoCtime4r2}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoC[1]}</td><td>{r.grupoCtime2r3} x {r.grupoCtime3r3}</td><td align="left">{grupoC[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo D</strong>
                            </td>
                            <td align="right">{grupoD[0]}</td><td>{r.grupoDtime1r1} x {r.grupoDtime2r1}</td><td align="left">{grupoD[1]}</td>
                            <td align="right">{grupoD[0]}</td><td>{r.grupoDtime1r2} x {r.grupoDtime3r2}</td><td align="left">{grupoD[2]}</td>
                            <td align="right">{grupoD[0]}</td><td>{r.grupoDtime1r3} x {r.grupoDtime4r3}</td><td align="left">{grupoD[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoD[2]}</td><td>{r.grupoDtime3r1} x {r.grupoDtime4r1}</td><td align="left">{grupoD[3]}</td>
                            <td align="right">{grupoD[1]}</td><td>{r.grupoDtime2r2} x {r.grupoDtime4r2}</td><td align="left">{grupoD[3]}</td>
                            <td align="right">{grupoD[1]}</td><td>{r.grupoDtime2r3} x {r.grupoDtime3r3}</td><td align="left">{grupoD[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo E</strong>
                            </td>
                            <td align="right">{grupoE[0]}</td><td>{r.grupoEtime1r1} x {r.grupoEtime2r1}</td><td align="left">{grupoE[1]}</td>
                            <td align="right">{grupoE[0]}</td><td>{r.grupoEtime1r2} x {r.grupoEtime3r2}</td><td align="left">{grupoE[2]}</td>
                            <td align="right">{grupoE[0]}</td><td>{r.grupoEtime1r3} x {r.grupoEtime4r3}</td><td align="left">{grupoE[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoE[2]}</td><td>{r.grupoEtime3r1} x {r.grupoEtime4r1}</td><td align="left">{grupoE[3]}</td>
                            <td align="right">{grupoE[1]}</td><td>{r.grupoEtime2r2} x {r.grupoEtime4r2}</td><td align="left">{grupoE[3]}</td>
                            <td align="right">{grupoE[1]}</td><td>{r.grupoEtime2r3} x {r.grupoEtime3r3}</td><td align="left">{grupoE[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo F</strong>
                            </td>
                            <td align="right">{grupoF[0]}</td><td>{r.grupoFtime1r1} x {r.grupoFtime2r1}</td><td align="left">{grupoF[1]}</td>
                            <td align="right">{grupoF[0]}</td><td>{r.grupoFtime1r2} x {r.grupoFtime3r2}</td><td align="left">{grupoF[2]}</td>
                            <td align="right">{grupoF[0]}</td><td>{r.grupoFtime1r3} x {r.grupoFtime4r3}</td><td align="left">{grupoF[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoF[2]}</td><td>{r.grupoFtime3r1} x {r.grupoFtime4r1}</td><td align="left">{grupoF[3]}</td>
                            <td align="right">{grupoF[1]}</td><td>{r.grupoFtime2r2} x {r.grupoFtime4r2}</td><td align="left">{grupoF[3]}</td>
                            <td align="right">{grupoF[1]}</td><td>{r.grupoFtime2r3} x {r.grupoFtime3r3}</td><td align="left">{grupoF[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo G</strong>
                            </td>
                            <td align="right">{grupoG[0]}</td><td>{r.grupoGtime1r1} x {r.grupoGtime2r1}</td><td align="left">{grupoG[1]}</td>
                            <td align="right">{grupoG[0]}</td><td>{r.grupoGtime1r2} x {r.grupoGtime3r2}</td><td align="left">{grupoG[2]}</td>
                            <td align="right">{grupoG[0]}</td><td>{r.grupoGtime1r3} x {r.grupoGtime4r3}</td><td align="left">{grupoG[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoG[2]}</td><td>{r.grupoGtime3r1} x {r.grupoGtime4r1}</td><td align="left">{grupoG[3]}</td>
                            <td align="right">{grupoG[1]}</td><td>{r.grupoGtime2r2} x {r.grupoGtime4r2}</td><td align="left">{grupoG[3]}</td>
                            <td align="right">{grupoG[1]}</td><td>{r.grupoGtime2r3} x {r.grupoGtime3r3}</td><td align="left">{grupoG[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo H</strong>
                            </td>
                            <td align="right">{grupoH[0]}</td><td>{r.grupoHtime1r1} x {r.grupoHtime2r1}</td><td align="left">{grupoH[1]}</td>
                            <td align="right">{grupoH[0]}</td><td>{r.grupoHtime1r2} x {r.grupoHtime3r2}</td><td align="left">{grupoH[2]}</td>
                            <td align="right">{grupoH[0]}</td><td>{r.grupoHtime1r3} x {r.grupoHtime4r3}</td><td align="left">{grupoH[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoH[2]}</td><td>{r.grupoHtime3r1} x {r.grupoHtime4r1}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoH[1]}</td><td>{r.grupoHtime2r2} x {r.grupoHtime4r2}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoH[1]}</td><td>{r.grupoHtime2r3} x {r.grupoHtime3r3}</td><td align="left">{grupoC[2]}</td> 
                        </tr>
                    </tbody>    
                </table>
            </div>
        </div>
    )
}
