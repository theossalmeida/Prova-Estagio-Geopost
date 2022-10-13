import axios from "axios"
import { Component, Fragment, useEffect, useState } from "react"
import * as r from "./gols"
import * as c from "./pontuacao"

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

    // classificacao dos grupos: 
    let classificacaoA = [
        {name: grupoA[0], pontos: c.pontosA1, sg: c.sg_A1},
        {name: grupoA[1], pontos: c.pontosA2, sg: c.sg_A2},
        {name: grupoA[2], pontos: c.pontosA3, sg: c.sg_A3},
        {name: grupoA[3], pontos: c.pontosA4, sg: c.sg_A4},
    ]
    classificacaoA.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoB = [
        {name: grupoB[0], pontos: c.pontosB1, sg: c.sg_B1},
        {name: grupoB[1], pontos: c.pontosB2, sg: c.sg_B2},
        {name: grupoB[2], pontos: c.pontosB3, sg: c.sg_B3},
        {name: grupoB[3], pontos: c.pontosB4, sg: c.sg_B4},
    ]
    classificacaoB.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoC = [
        {name: grupoC[0], pontos: c.pontosC1, sg: c.sg_C1},
        {name: grupoC[1], pontos: c.pontosC2, sg: c.sg_C2},
        {name: grupoC[2], pontos: c.pontosC3, sg: c.sg_C3},
        {name: grupoC[3], pontos: c.pontosC4, sg: c.sg_C4},
    ]
    classificacaoC.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoD = [
        {name: grupoD[0], pontos: c.pontosD1, sg: c.sg_D1},
        {name: grupoD[1], pontos: c.pontosD2, sg: c.sg_D2},
        {name: grupoD[2], pontos: c.pontosD3, sg: c.sg_D3},
        {name: grupoD[3], pontos: c.pontosD4, sg: c.sg_D4},
    ]
    classificacaoD.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoE = [
        {name: grupoE[0], pontos: c.pontosE1, sg: c.sg_E1},
        {name: grupoE[1], pontos: c.pontosE2, sg: c.sg_E2},
        {name: grupoE[2], pontos: c.pontosE3, sg: c.sg_E3},
        {name: grupoE[3], pontos: c.pontosE4, sg: c.sg_E4},
    ]
    classificacaoE.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoF = [
        {name: grupoF[0], pontos: c.pontosF1, sg: c.sg_F1},
        {name: grupoF[1], pontos: c.pontosF2, sg: c.sg_F2},
        {name: grupoF[2], pontos: c.pontosF3, sg: c.sg_F3},
        {name: grupoF[3], pontos: c.pontosF4, sg: c.sg_F4},
    ]
    classificacaoF.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoG = [
        {name: grupoG[0], pontos: c.pontosG1, sg: c.sg_G1},
        {name: grupoG[1], pontos: c.pontosG2, sg: c.sg_G2},
        {name: grupoG[2], pontos: c.pontosG3, sg: c.sg_G3},
        {name: grupoG[3], pontos: c.pontosG4, sg: c.sg_G4},
    ]
    classificacaoG.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoH = [
        {name: grupoH[0], pontos: c.pontosH1, sg: c.sg_H1},
        {name: grupoH[1], pontos: c.pontosH2, sg: c.sg_H2},
        {name: grupoH[2], pontos: c.pontosH3, sg: c.sg_H3},
        {name: grupoH[3], pontos: c.pontosH4, sg: c.sg_H4},
    ]
    classificacaoH.sort(function (a,b) {
        if (b.pontos != a.pontos) {    
            return (b.pontos - a.pontos) 
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    //Fase de Mata-Mata (oitavas):
    let class_oitavas = []
    // 1A x 2B
    function Oitavas1() {    
        if (r.gol_1A != r.gol_2B) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoA[0].name}</td>
                        <td align="center">{r.gol_1A}x{r.gol_2B}</td>
                        <td align="left">{classificacaoB[1].name}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_1A === r.gol_2B) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoA[0].name}</td>
                    <td align="center">{r.gol_1A} ({r.penaltiA1}) x ({r.penaltiB2}) {r.gol_2B}</td>
                    <td align="left">{classificacaoB[1].name}</td>
                </tr>
            </table>
        )}
}
    if ((r.gol_1A+r.penaltiA1) > (r.gol_2B+r.penaltiB2)) {
        class_oitavas.push(classificacaoA[0].name)
    } else {
        class_oitavas.push(classificacaoB[1].name)
    }

    // 2B X 1A
    function Oitavas2() {    
    if (r.gol_1B != r.gol_2A) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoA[1].name}</td>
                    <td align="center">{r.gol_2A}x{r.gol_1B}</td>
                    <td align="left">{classificacaoB[0].name}</td>
                </tr>
            </table>
    )
} else if (r.gol_2A === r.gol_1B) {
    return (
        <table>
            <tr>
                <td align="right">{classificacaoA[1].name}</td>
                <td align="center">{r.gol_2A} ({r.penaltiA2}) x ({r.penaltiB1}) {r.gol_1B}</td>
                <td align="left">{classificacaoB[0].name}</td>
            </tr>
        </table>
    )}
}
    if ((r.gol_1B+r.penaltiB1) > (r.gol_2A+r.penaltiA2)) {
        class_oitavas.push(classificacaoB[0].name)
    } else {
        class_oitavas.push(classificacaoA[1].name)
    }

    // 1C X 2D 
    function Oitavas3() {    
        if (r.gol_1C != r.gol_2D) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoC[0].name}</td>
                        <td align="center">{r.gol_1C}x{r.gol_2D}</td>
                        <td align="left">{classificacaoD[1].name}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_1C === r.gol_2D) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoC[0].name}</td>
                    <td align="center">{r.gol_1C} ({r.penaltiC1}) x ({r.penaltiD2}) {r.gol_2D}</td>
                    <td align="left">{classificacaoD[1].name}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_1C+r.penaltiC1) > (r.gol_2D+r.penaltiD2)) {
        class_oitavas.push(classificacaoC[0].name)
    } else {
        class_oitavas.push(classificacaoD[1].name)
    }

    // 2C X 1D 
    function Oitavas4() {    
        if (r.gol_2C != r.gol_1D) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoC[1].name}</td>
                        <td align="center">{r.gol_2C}x{r.gol_1D}</td>
                        <td align="left">{classificacaoD[0].name}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_2C === r.gol_1D) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoC[1].name}</td>
                    <td align="center">{r.gol_2C} ({r.penaltiC2}) x ({r.penaltiD1}) {r.gol_1D}</td>
                    <td align="left">{classificacaoD[0].name}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_2C+r.penaltiC2) > (r.gol_1D+r.penaltiD1)) {
        class_oitavas.push(classificacaoC[1].name)
    } else {
        class_oitavas.push(classificacaoD[0].name)
    }

    // 1E X 2F 
    function Oitavas5() {    
        if (r.gol_1E != r.gol_2F) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoE[0].name}</td>
                        <td align="center">{r.gol_1E}x{r.gol_2F}</td>
                        <td align="left">{classificacaoF[1].name}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_1E === r.gol_2F) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoE[0].name}</td>
                    <td align="center">{r.gol_1E} ({r.penaltiE1}) x ({r.penaltiF2}) {r.gol_2F}</td>
                    <td align="left">{classificacaoF[1].name}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_1E+r.penaltiE1) > (r.gol_2F+r.penaltiF2)) {
        class_oitavas.push(classificacaoE[0].name)
    } else {
        class_oitavas.push(classificacaoF[1].name)
    }

    // 2E X 1F 
    function Oitavas6() {    
        if (r.gol_2E != r.gol_1F) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoE[1].name}</td>
                        <td align="center">{r.gol_2E}x{r.gol_1F}</td>
                        <td align="left">{classificacaoF[0].name}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_2E === r.gol_1F) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoE[1].name}</td>
                    <td align="center">{r.gol_2E} ({r.penaltiE2}) x ({r.penaltiF1}) {r.gol_1F}</td>
                    <td align="left">{classificacaoF[0].name}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_2E+r.penaltiE2) > (r.gol_1F+r.penaltiF1)) {
        class_oitavas.push(classificacaoE[1].name)
    } else {
        class_oitavas.push(classificacaoF[0].name)
    }

    // 1G X 2H
    function Oitavas7() {    
        if (r.gol_1G != r.gol_2H) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoG[0].name}</td>
                        <td align="center">{r.gol_1G}x{r.gol_2H}</td>
                        <td align="left">{classificacaoH[1].name}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_1G === r.gol_2H) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoG[0].name}</td>
                    <td align="center">{r.gol_1G} ({r.penaltiG1}) x ({r.penaltiH2}) {r.gol_2H}</td>
                    <td align="left">{classificacaoH[1].name}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_1G+r.penaltiG1) > (r.gol_2H+r.penaltiH2)) {
        class_oitavas.push(classificacaoG[0].name)
    } else {
        class_oitavas.push(classificacaoH[1].name)
    }

    // 2G X 1H
    function Oitavas8() {    
        if (r.gol_2G != r.gol_1H) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoG[1].name}</td>
                        <td align="center">{r.gol_2G}x{r.gol_1H}</td>
                        <td align="left">{classificacaoH[0].name}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_2G === r.gol_1H) {
        return (
            <table>
                <tr>
                    <td align="right">{classificacaoG[1].name}</td>
                    <td align="center">{r.gol_2G} ({r.penaltiG2}) x ({r.penaltiH1}) {r.gol_1H}</td>
                    <td align="left">{classificacaoH[0].name}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_2G+r.penaltiG2) > (r.gol_1H+r.penaltiH1)) {
        class_oitavas.push(classificacaoG[1].name)
    } else {
        class_oitavas.push(classificacaoH[0].name)
    }


    // Quartas de final:
    let class_quartas = []
    function Quartas1() {    
        if (r.gol_O11 != r.gol_O12) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[0]}</td>
                        <td align="center">{r.gol_O11}x{r.gol_O12}</td>
                        <td align="left">{class_oitavas[2]}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_O11 === r.gol_O12) {
        return (
            <table>
                <tr>
                    <td align="right">{class_oitavas[0]}</td>
                    <td align="center">{r.gol_O11} ({r.penaltiO11}) x ({r.penaltiO12}) {r.gol_O12}</td>
                    <td align="left">{class_oitavas[2]}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_O11 + r.penaltiO11) > (r.gol_O12 + r.penaltiO12)) {
        class_quartas.push(class_oitavas[0])
    } else { class_quartas.push(class_oitavas[2]) }

    function Quartas2() {    
        if (r.gol_O21 != r.gol_O22) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[1]}</td>
                        <td align="center">{r.gol_O21}x{r.gol_O22}</td>
                        <td align="left">{class_oitavas[3]}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_O21 === r.gol_O22) {
        return (
            <table>
                <tr>
                    <td align="right">{class_oitavas[1]}</td>
                    <td align="center">{r.gol_O21} ({r.penaltiO21}) x ({r.penaltiO22}) {r.gol_O21}</td>
                    <td align="left">{class_oitavas[3]}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_O21 + r.penaltiO21) > (r.gol_O22 + r.penaltiO22)) {
        class_quartas.push(class_oitavas[1])
    } else { class_quartas.push(class_oitavas[3]) }

    function Quartas3() {    
        if (r.gol_O31 != r.gol_O32) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[4]}</td>
                        <td align="center">{r.gol_O31}x{r.gol_O32}</td>
                        <td align="left">{class_oitavas[6]}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_O31 === r.gol_O32) {
        return (
            <table>
                <tr>
                    <td align="right">{class_oitavas[4]}</td>
                    <td align="center">{r.gol_O31} ({r.penaltiO31}) x ({r.penaltiO32}) {r.gol_O31}</td>
                    <td align="left">{class_oitavas[6]}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_O31 + r.penaltiO31) > (r.gol_O32 + r.penaltiO32)) {
        class_quartas.push(class_oitavas[4])
    } else { class_quartas.push(class_oitavas[6]) }

    function Quartas4() {    
        if (r.gol_O41 != r.gol_O42) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[5]}</td>
                        <td align="center">{r.gol_O41}x{r.gol_O42}</td>
                        <td align="left">{class_oitavas[7]}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_O41 === r.gol_O42) {
        return (
            <table>
                <tr>
                    <td align="right">{class_oitavas[5]}</td>
                    <td align="center">{r.gol_O41} ({r.penaltiO41}) x ({r.penaltiO42}) {r.gol_O41}</td>
                    <td align="left">{class_oitavas[7]}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_O41 + r.penaltiO41) > (r.gol_O42 + r.penaltiO42)) {
        class_quartas.push(class_oitavas[5])
    } else { class_quartas.push(class_oitavas[7]) }

    // Semi-final:
    let class_semi = []
    function Semi1() {    
        if (r.gol_S11 != r.gol_S12) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_quartas[0]}</td>
                        <td align="center">{r.gol_S11}x{r.gol_S12}</td>
                        <td align="left">{class_quartas[2]}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_S11 === r.gol_S12) {
        return (
            <table>
                <tr>
                    <td align="right">{class_quartas[0]}</td>
                    <td align="center">{r.gol_S11} ({r.penaltiS11}) x ({r.penaltiS12}) {r.gol_S12}</td>
                    <td align="left">{class_quartas[2]}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_S11 + r.penaltiS11) > (r.gol_S12 + r.penaltiS12)) {
        class_semi.push(class_quartas[0])
    } else { class_semi.push(class_quartas[2]) }

    function Semi2() {    
        if (r.gol_S21 != r.gol_S22) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_quartas[1]}</td>
                        <td align="center">{r.gol_S21}x{r.gol_S22}</td>
                        <td align="left">{class_quartas[3]}</td>
                    </tr>
                </table>
        )
    } else if (r.gol_S21 === r.gol_S22) {
        return (
            <table>
                <tr>
                    <td align="right">{class_quartas[1]}</td>
                    <td align="center">{r.gol_S21} ({r.penaltiS21}) x ({r.penaltiS22}) {r.gol_S21}</td>
                    <td align="left">{class_quartas[3]}</td>
                </tr>
            </table>
        )}
    }
    if ((r.gol_S21 + r.penaltiS21) > (r.gol_S22 + r.penaltiS22)) {
        class_semi.push(class_quartas[1])
    } else { class_semi.push(class_quartas[3]) }

    //Grande Final:
    let campeao = []
    function Final() {    
        if (r.golsA != r.golsB) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_semi[0]}</td>
                        <td align="center">{r.golsA}x{r.golsB}</td>
                        <td align="left">{class_semi[1]}</td>
                    </tr>
                </table>
        )
    } else if (r.golsA === r.golsB) {
        return (
            <table>
                <tr>
                    <td align="right">{class_semi[0]}</td>
                    <td align="center">{r.golsA} ({r.penaltisA}) x ({r.penaltisB}) {r.golsB}</td>
                    <td align="left">{class_semi[1]}</td>
                </tr>
            </table>
        )}
    }
    if ((r.golsA + r.penaltisA) > (r.golsB + r.penaltisB)) {
        campeao.push(class_semi[0])
    } else { campeao.push(class_semi[1]) }


    // Envio para api:

    const envioAPI = [
        {
            "equipeA": class_semi[0],
            "equipeB": class_semi[1],
            "golsEquipeA": r.golsA,
            "golsEquipeB": r.golsB,
            "golsPenaltyTimeA":r.penaltisA,
            "golsPenaltyTimeB": r.penaltisB,
        }
    ]

    useEffect(() => {
        axios.post('https://estagio.geopostenergy.com/WorldCup/InsertFinalResult',
        {
            "equipeA": class_semi[0],
            "equipeB": class_semi[1],
            "golsEquipeA": r.golsA,
            "golsEquipeB": r.golsB,
            "golsPenaltyTimeA":r.penaltisA,
            "golsPenaltyTimeB": r.penaltisB,
        },
        {
            headers: {
                'git-user': 'theossalmeida'
            }
        });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
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
                <a class="titulo">Simulação das Rodadas</a>
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
                            <td align="right" width={150}>{grupoA[0]}</td><td>{r.gAt1r1} x {r.gAt2r1}</td><td align="left" width={150}>{grupoA[1]}</td>
                            <td align="right" width={150}>{grupoA[0]}</td><td>{r.gAt1r2} x {r.gAt3r2}</td><td align="left" width={150}>{grupoA[2]}</td>
                            <td align="right" width={150}>{grupoA[0]}</td><td>{r.gAt1r3} x {r.gAt4r3}</td><td align="left" width={150}>{grupoA[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoA[2]}</td><td>{r.gAt3r1} x {r.gAt4r1}</td><td align="left">{grupoA[3]}</td>
                            <td align="right">{grupoA[1]}</td><td>{r.gAt2r2} x {r.gAt4r2}</td><td align="left">{grupoA[3]}</td>
                            <td align="right">{grupoA[1]}</td><td>{r.gAt2r3} x {r.gAt3r3}</td><td align="left">{grupoA[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo B</strong>
                            </td>
                            <td align="right">{grupoB[0]}</td><td>{r.gBt1r1} x {r.gBt2r1}</td><td align="left">{grupoB[1]}</td>
                            <td align="right">{grupoB[0]}</td><td>{r.gBt1r2} x {r.gBt3r2}</td><td align="left">{grupoB[2]}</td> 
                            <td align="right">{grupoB[0]}</td><td>{r.gBt1r3} x {r.gBt4r3}</td><td align="left">{grupoB[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoB[2]}</td><td>{r.gBt3r1} x {r.gBt4r1}</td><td align="left">{grupoB[3]}</td>
                            <td align="right">{grupoB[1]}</td><td>{r.gBt2r2} x {r.gBt4r2}</td><td align="left">{grupoB[3]}</td>
                            <td align="right">{grupoB[1]}</td><td>{r.gBt2r3} x {r.gBt3r3}</td><td align="left">{grupoB[2]}</td>
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo C</strong>
                            </td>
                            <td align="right">{grupoC[0]}</td><td>{r.gCt1r1} x {r.gCt2r1}</td><td align="left">{grupoC[1]}</td>
                            <td align="right">{grupoC[0]}</td><td>{r.gCt1r2} x {r.gCt3r2}</td><td align="left">{grupoC[2]}</td>
                            <td align="right">{grupoC[0]}</td><td>{r.gCt1r3} x {r.gCt4r3}</td><td align="left">{grupoC[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoC[2]}</td><td>{r.gCt3r1} x {r.gCt4r1}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoC[1]}</td><td>{r.gCt2r2} x {r.gCt4r2}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoC[1]}</td><td>{r.gCt2r3} x {r.gCt3r3}</td><td align="left">{grupoC[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo D</strong>
                            </td>
                            <td align="right">{grupoD[0]}</td><td>{r.gDt1r1} x {r.gDt2r1}</td><td align="left">{grupoD[1]}</td>
                            <td align="right">{grupoD[0]}</td><td>{r.gDt1r2} x {r.gDt3r2}</td><td align="left">{grupoD[2]}</td>
                            <td align="right">{grupoD[0]}</td><td>{r.gDt1r3} x {r.gDt4r3}</td><td align="left">{grupoD[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoD[2]}</td><td>{r.gDt3r1} x {r.gDt4r1}</td><td align="left">{grupoD[3]}</td>
                            <td align="right">{grupoD[1]}</td><td>{r.gDt2r2} x {r.gDt4r2}</td><td align="left">{grupoD[3]}</td>
                            <td align="right">{grupoD[1]}</td><td>{r.gDt2r3} x {r.gDt3r3}</td><td align="left">{grupoD[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo E</strong>
                            </td>
                            <td align="right">{grupoE[0]}</td><td>{r.gEt1r1} x {r.gEt2r1}</td><td align="left">{grupoE[1]}</td>
                            <td align="right">{grupoE[0]}</td><td>{r.gEt1r2} x {r.gEt3r2}</td><td align="left">{grupoE[2]}</td>
                            <td align="right">{grupoE[0]}</td><td>{r.gEt1r3} x {r.gEt4r3}</td><td align="left">{grupoE[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoE[2]}</td><td>{r.gEt3r1} x {r.gEt4r1}</td><td align="left">{grupoE[3]}</td>
                            <td align="right">{grupoE[1]}</td><td>{r.gEt2r2} x {r.gEt4r2}</td><td align="left">{grupoE[3]}</td>
                            <td align="right">{grupoE[1]}</td><td>{r.gEt2r3} x {r.gEt3r3}</td><td align="left">{grupoE[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo F</strong>
                            </td>
                            <td align="right">{grupoF[0]}</td><td>{r.gFt1r1} x {r.gFt2r1}</td><td align="left">{grupoF[1]}</td>
                            <td align="right">{grupoF[0]}</td><td>{r.gFt1r2} x {r.gFt3r2}</td><td align="left">{grupoF[2]}</td>
                            <td align="right">{grupoF[0]}</td><td>{r.gFt1r3} x {r.gFt4r3}</td><td align="left">{grupoF[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoF[2]}</td><td>{r.gFt3r1} x {r.gFt4r1}</td><td align="left">{grupoF[3]}</td>
                            <td align="right">{grupoF[1]}</td><td>{r.gFt2r2} x {r.gFt4r2}</td><td align="left">{grupoF[3]}</td>
                            <td align="right">{grupoF[1]}</td><td>{r.gFt2r3} x {r.gFt3r3}</td><td align="left">{grupoF[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo G</strong>
                            </td>
                            <td align="right">{grupoG[0]}</td><td>{r.gGt1r1} x {r.gGt2r1}</td><td align="left">{grupoG[1]}</td>
                            <td align="right">{grupoG[0]}</td><td>{r.gGt1r2} x {r.gGt3r2}</td><td align="left">{grupoG[2]}</td>
                            <td align="right">{grupoG[0]}</td><td>{r.gGt1r3} x {r.gGt4r3}</td><td align="left">{grupoG[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoG[2]}</td><td>{r.gGt3r1} x {r.gGt4r1}</td><td align="left">{grupoG[3]}</td>
                            <td align="right">{grupoG[1]}</td><td>{r.gGt2r2} x {r.gGt4r2}</td><td align="left">{grupoG[3]}</td>
                            <td align="right">{grupoG[1]}</td><td>{r.gGt2r3} x {r.gGt3r3}</td><td align="left">{grupoG[2]}</td> 
                        </tr>
                        <tr>
                            <td colSpan={10}><hr></hr></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong>Grupo H</strong>
                            </td>
                            <td align="right">{grupoH[0]}</td><td>{r.gHt1r1} x {r.gHt2r1}</td><td align="left">{grupoH[1]}</td>
                            <td align="right">{grupoH[0]}</td><td>{r.gHt1r2} x {r.gHt3r2}</td><td align="left">{grupoH[2]}</td>
                            <td align="right">{grupoH[0]}</td><td>{r.gHt1r3} x {r.gHt4r3}</td><td align="left">{grupoH[3]}</td>
                        </tr>
                        <tr>
                            <td align="right">{grupoH[2]}</td><td>{r.gHt3r1} x {r.gHt4r1}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoH[1]}</td><td>{r.gHt2r2} x {r.gHt4r2}</td><td align="left">{grupoC[3]}</td>
                            <td align="right">{grupoH[1]}</td><td>{r.gHt2r3} x {r.gHt3r3}</td><td align="left">{grupoC[2]}</td> 
                        </tr>
                    </tbody>    
                </table>
            </div>
                <div class="ClassificacaoDosGrupos"> 
                <a class="titulo"><strong>Classificação dos Grupos</strong></a>
                <div class="divClassGrupos">   
                    <table id="grupo A" className="classGrupos">
                        <thead>
                            <th>Grupo A</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoA[0].name}</td>
                                <td>{classificacaoA[0].pontos}</td>
                                <td>{classificacaoA[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoA[1].name}</td>
                                <td>{classificacaoA[1].pontos}</td>
                                <td>{classificacaoA[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoA[2].name}</td>
                                <td>{classificacaoA[2].pontos}</td>
                                <td>{classificacaoA[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoA[3].name}</td>
                                <td>{classificacaoA[3].pontos}</td>
                                <td>{classificacaoA[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="grupo B" className="classGrupos">
                        <thead>
                            <th>Grupo B</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoB[0].name}</td>
                                <td>{classificacaoB[0].pontos}</td>
                                <td>{classificacaoB[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoB[1].name}</td>
                                <td>{classificacaoB[1].pontos}</td>
                                <td>{classificacaoB[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoB[2].name}</td>
                                <td>{classificacaoB[2].pontos}</td>
                                <td>{classificacaoB[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoB[3].name}</td>
                                <td>{classificacaoB[3].pontos}</td>
                                <td>{classificacaoB[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="grupo C" className="classGrupos">
                        <thead>
                            <th>Grupo C</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoC[0].name}</td>
                                <td>{classificacaoC[0].pontos}</td>
                                <td>{classificacaoC[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoC[1].name}</td>
                                <td>{classificacaoC[1].pontos}</td>
                                <td>{classificacaoC[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoC[2].name}</td>
                                <td>{classificacaoC[2].pontos}</td>
                                <td>{classificacaoC[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoC[3].name}</td>
                                <td>{classificacaoC[3].pontos}</td>
                                <td>{classificacaoC[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="divClassGrupos">   
                    <table id="grupo D" className="classGrupos">
                        <thead>
                            <th>Grupo D</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoD[0].name}</td>
                                <td>{classificacaoD[0].pontos}</td>
                                <td>{classificacaoD[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoD[1].name}</td>
                                <td>{classificacaoD[1].pontos}</td>
                                <td>{classificacaoD[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoD[2].name}</td>
                                <td>{classificacaoD[2].pontos}</td>
                                <td>{classificacaoD[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoD[3].name}</td>
                                <td>{classificacaoD[3].pontos}</td>
                                <td>{classificacaoD[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="grupo E" className="classGrupos">
                        <thead>
                            <th>Grupo E</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoE[0].name}</td>
                                <td>{classificacaoE[0].pontos}</td>
                                <td>{classificacaoE[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoE[1].name}</td>
                                <td>{classificacaoE[1].pontos}</td>
                                <td>{classificacaoE[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoE[2].name}</td>
                                <td>{classificacaoE[2].pontos}</td>
                                <td>{classificacaoE[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoE[3].name}</td>
                                <td>{classificacaoE[3].pontos}</td>
                                <td>{classificacaoE[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="grupo F" className="classGrupos">
                        <thead>
                            <th>Grupo F</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoF[0].name}</td>
                                <td>{classificacaoF[0].pontos}</td>
                                <td>{classificacaoF[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoF[1].name}</td>
                                <td>{classificacaoF[1].pontos}</td>
                                <td>{classificacaoF[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoF[2].name}</td>
                                <td>{classificacaoF[2].pontos}</td>
                                <td>{classificacaoF[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoF[3].name}</td>
                                <td>{classificacaoF[3].pontos}</td>
                                <td>{classificacaoF[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="divClassGrupos">   
                    <table id="grupo G" className="classGrupos">
                        <thead>
                            <th>Grupo G</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoG[0].name}</td>
                                <td>{classificacaoG[0].pontos}</td>
                                <td>{classificacaoG[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoG[1].name}</td>
                                <td>{classificacaoG[1].pontos}</td>
                                <td>{classificacaoG[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoG[2].name}</td>
                                <td>{classificacaoG[2].pontos}</td>
                                <td>{classificacaoG[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoG[3].name}</td>
                                <td>{classificacaoG[3].pontos}</td>
                                <td>{classificacaoG[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="grupo H" className="classGrupos">
                        <thead>
                            <th>Grupo H</th>
                            <th>Pontos</th>
                            <th>SG</th>
                        </thead>
                        <tbody>
                            <tr class="classificados">
                                <td>{classificacaoH[0].name}</td>
                                <td>{classificacaoH[0].pontos}</td>
                                <td>{classificacaoH[0].sg}</td>
                            </tr>
                            <tr class="classificados">
                                <td>{classificacaoH[1].name}</td>
                                <td>{classificacaoH[1].pontos}</td>
                                <td>{classificacaoH[1].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoH[2].name}</td>
                                <td>{classificacaoH[2].pontos}</td>
                                <td>{classificacaoH[2].sg}</td>
                            </tr>
                            <tr>
                                <td>{classificacaoH[3].name}</td>
                                <td>{classificacaoH[3].pontos}</td>
                                <td>{classificacaoH[3].sg}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>* SG = Saldo de Gols</p>
                </div>
                <div class="mata-mata">
                    <div class="titulo">Oitavas de Final</div>
                    <table class="eliminatorias">
                        <td>{Oitavas1()}</td>
                        <td>{Oitavas3()}</td>
                    </table>
                    <table class="eliminatorias">
                        <td>{Oitavas2()}</td>
                        <td>{Oitavas4()}</td>
                    </table>
                    <table class="eliminatorias">
                        <td>{Oitavas5()}</td>
                        <td>{Oitavas7()}</td>
                    </table>
                    <table class="eliminatorias">
                        <td>{Oitavas6()}</td>
                        <td>{Oitavas8()}</td>                   
                    </table>
                </div>
                <div class="mata-mata">
                    <div class="titulo">Quartas de Final</div>
                    <table class="eliminatorias">
                        <td>{Quartas1()}</td>
                        <td>{Quartas2()}</td>                   
                    </table>
                    <table class="eliminatorias">
                        <td>{Quartas3()}</td>
                        <td>{Quartas4()}</td>                   
                    </table>
                </div>
                <div class="mata-mata">
                    <div class="titulo">Semi-final</div>
                    <table class="eliminatorias">
                        <td>{Semi1()}</td>                
                    </table>
                    <table class="eliminatorias">
                        <td>{Semi2()}</td>                 
                    </table>
                </div>
                <div class="final">
                    <div class="titulo-final">Grande Final</div>
                    <table class="tabela-final">
                        <td>{Final()}</td>                
                    </table>
                </div>
                <div class="campeao">
                    <p>
                        O grande campeão da Copa do Mundo será:
                    </p>
                    <img class="bandeira-campeao" src={`../imgs/${campeao[0]}.png`} />
                    <p>{campeao[0]}</p>
                </div>
        </Fragment>
    )
}
