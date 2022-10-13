import * as r from "./gols"

// Gerando os dados do Grupo A:
export var pontosA1 = 0; export var pontosA2 = 0; 
export var pontosA3 = 0; export var pontosA4 = 0;
var A1r1 = (r.gAt1r1 - r.gAt2r1); 
var A1r2 = (r.gAt1r2 - r.gAt3r2); 
var A1r3 = (r.gAt1r3 - r.gAt4r3)
export var sg_A1 = A1r1 + A1r2 + A1r3 ;

var A2r1 = (r.gAt2r1 - r.gAt1r1)
var A2r2 = (r.gAt2r2 - r.gAt4r2)
var A2r3 = (r.gAt2r3 - r.gAt3r3)
export var sg_A2 = A2r1 + A2r2 + A2r3;

var A3r1 = (r.gAt3r1 - r.gAt4r1)
var A3r2 = (r.gAt3r2 - r.gAt1r2)
var A3r3 = (r.gAt3r3 - r.gAt2r3)
export var sg_A3 = A3r1 + A3r2 + A3r3;

var A4r1 = (r.gAt4r1 - r.gAt3r1)
var A4r2 = (r.gAt4r2 - r.gAt2r2)
var A4r3 = (r.gAt4r3 - r.gAt1r3)
export var sg_A4 = A4r1 + A4r2 + A4r3;

if (A1r1 > 0) {
    pontosA1 += 3
} else if (A1r1 === 0) {
    pontosA1 += 1
    pontosA2 += 1
} else if (A1r1 < 0) {
    pontosA2 += 3
}

if (A1r2 > 0) {
    pontosA1 += 3
} else if (A1r2 === 0) {
    pontosA1 += 1
    pontosA3 += 1
} else if (A1r2 < 0) {
    pontosA3 += 3
}

if (A1r3 > 0) {
    pontosA1 += 3
} else if (A1r3 === 0) {
    pontosA1 += 1
    pontosA4 += 1
} else if (A1r3 < 0) {
    pontosA4 += 3
}

if (A2r2 >0) {
    pontosA2 += 3
} else if (A2r2 === 0) {
    pontosA2 += 1
    pontosA4 += 1
} else if (A2r2 < 0) {
    pontosA4 += 3
}

if (A2r3 >0) {
    pontosA2 += 3
} else if (A2r3 === 0) {
    pontosA2 += 1
    pontosA3 += 1
} else if (A2r3 < 0) {
    pontosA3 += 3
}

if (A3r1 > 0) {
    pontosA3 += 3
} else if (A3r1 === 0) {
    pontosA3 += 1
    pontosA4 += 1
} else if (A3r1 < 0) {
    pontosA4 += 3
}

// Gerando as pontuações do Grupo B:
export var pontosB1 = 0; export var pontosB2 = 0; 
export var pontosB3 = 0; export var pontosB4 = 0;
var B1r1 = (r.gBt1r1 - r.gBt2r1); 
var B1r2 = (r.gBt1r2 - r.gBt3r2); 
var B1r3 = (r.gBt1r3 - r.gBt4r3)
export var sg_B1 = B1r1 + B1r2 + B1r3 ;

var B2r1 = (r.gBt2r1 - r.gBt1r1)
var B2r2 = (r.gBt2r2 - r.gBt4r2)
var B2r3 = (r.gBt2r3 - r.gBt3r3)
export var sg_B2 = B2r1 + B2r2 + B2r3;

var B3r1 = (r.gBt3r1 - r.gBt4r1)
var B3r2 = (r.gBt3r2 - r.gBt1r2)
var B3r3 = (r.gBt3r3 - r.gBt2r3)
export var sg_B3 = B3r1 + B3r2 + B3r3;

var B4r1 = (r.gBt4r1 - r.gBt3r1)
var B4r2 = (r.gBt4r2 - r.gBt2r2)
var B4r3 = (r.gBt4r3 - r.gBt1r3)
export var sg_B4 = B4r1 + B4r2 + B4r3;

if (B1r1 > 0) {
    pontosB1 += 3
} else if (B1r1 === 0) {
    pontosB1 += 1
    pontosB2 += 1
} else if (B1r1 < 0) {
    pontosB2 += 3
}

if (B1r2 > 0) {
    pontosB1 += 3
} else if (B1r2 === 0) {
    pontosB1 += 1
    pontosB3 += 1
} else if (B1r2 < 0) {
    pontosB3 += 3
}

if (B1r3 > 0) {
    pontosB1 += 3
} else if (B1r3 === 0) {
    pontosB1 += 1
    pontosB4 += 1
} else if (B1r3 < 0) {
    pontosB4 += 3
}

if (B2r2 >0) {
    pontosB2 += 3
} else if (B2r2 === 0) {
    pontosB2 += 1
    pontosB4 += 1
} else if (B2r2 < 0) {
    pontosB4 += 3
}

if (B2r3 >0) {
    pontosB2 += 3
} else if (B2r3 === 0) {
    pontosB2 += 1
    pontosB3 += 1
} else if (B2r3 < 0) {
    pontosB3 += 3
}

if (B3r1 > 0) {
    pontosB3 += 3
} else if (B3r1 === 0) {
    pontosB3 += 1
    pontosB4 += 1
} else if (B3r1 < 0) {
    pontosB4 += 3
}


// Gerando as pontuações do Grupo C:
export var pontosC1 = 0; export var pontosC2 = 0; 
export var pontosC3 = 0; export var pontosC4 = 0;
var C1r1 = (r.gCt1r1 - r.gCt2r1); 
var C1r2 = (r.gCt1r2 - r.gCt3r2); 
var C1r3 = (r.gCt1r3 - r.gCt4r3)
export var sg_C1 = C1r1 + C1r2 + C1r3 ;

var C2r1 = (r.gCt2r1 - r.gCt1r1)
var C2r2 = (r.gCt2r2 - r.gCt4r2)
var C2r3 = (r.gCt2r3 - r.gCt3r3)
export var sg_C2 = C2r1 + C2r2 + C2r3;

var C3r1 = (r.gCt3r1 - r.gCt4r1)
var C3r2 = (r.gCt3r2 - r.gCt1r2)
var C3r3 = (r.gCt3r3 - r.gCt2r3)
export var sg_C3 = C3r1 + C3r2 + C3r3;

var C4r1 = (r.gCt4r1 - r.gCt3r1)
var C4r2 = (r.gCt4r2 - r.gCt2r2)
var C4r3 = (r.gCt4r3 - r.gCt1r3)
export var sg_C4 = C4r1 + C4r2 + C4r3;

if (C1r1 > 0) {
    pontosC1 += 3
} else if (C1r1 === 0) {
    pontosC1 += 1
    pontosC2 += 1
} else if (C1r1 < 0) {
    pontosC2 += 3
}

if (C1r2 > 0) {
    pontosC1 += 3
} else if (C1r2 === 0) {
    pontosC1 += 1
    pontosC3 += 1
} else if (C1r2 < 0) {
    pontosC3 += 3
}

if (C1r3 > 0) {
    pontosC1 += 3
} else if (C1r3 === 0) {
    pontosC1 += 1
    pontosC4 += 1
} else if (C1r3 < 0) {
    pontosC4 += 3
}

if (C2r2 >0) {
    pontosC2 += 3
} else if (C2r2 === 0) {
    pontosC2 += 1
    pontosC4 += 1
} else if (C2r2 < 0) {
    pontosC4 += 3
}

if (C2r3 >0) {
    pontosC2 += 3
} else if (C2r3 === 0) {
    pontosC2 += 1
    pontosC3 += 1
} else if (C2r3 < 0) {
    pontosC3 += 3
}

if (C3r1 > 0) {
    pontosC3 += 3
} else if (C3r1 === 0) {
    pontosC3 += 1
    pontosC4 += 1
} else if (C3r1 < 0) {
    pontosC4 += 3
}


// Gerando as pontuações do Grupo D:
export var pontosD1 = 0; export var pontosD2 = 0; 
export var pontosD3 = 0; export var pontosD4 = 0;
var D1r1 = (r.gDt1r1 - r.gDt2r1); 
var D1r2 = (r.gDt1r2 - r.gDt3r2); 
var D1r3 = (r.gDt1r3 - r.gDt4r3)
export var sg_D1 = D1r1 + D1r2 + D1r3 ;

var D2r1 = (r.gDt2r1 - r.gDt1r1)
var D2r2 = (r.gDt2r2 - r.gDt4r2)
var D2r3 = (r.gDt2r3 - r.gDt3r3)
export var sg_D2 = D2r1 + D2r2 + D2r3;

var D3r1 = (r.gDt3r1 - r.gDt4r1)
var D3r2 = (r.gDt3r2 - r.gDt1r2)
var D3r3 = (r.gDt3r3 - r.gDt2r3)
export var sg_D3 = D3r1 + D3r2 + D3r3;

var D4r1 = (r.gDt4r1 - r.gDt3r1)
var D4r2 = (r.gDt4r2 - r.gDt2r2)
var D4r3 = (r.gDt4r3 - r.gDt1r3)
export var sg_D4 = D4r1 + D4r2 + D4r3;

if (D1r1 > 0) {
    pontosD1 += 3
} else if (D1r1 === 0) {
    pontosD1 += 1
    pontosD2 += 1
} else if (D1r1 < 0) {
    pontosD2 += 3
}

if (D1r2 > 0) {
    pontosD1 += 3
} else if (D1r2 === 0) {
    pontosD1 += 1
    pontosD3 += 1
} else if (D1r2 < 0) {
    pontosD3 += 3
}

if (D1r3 > 0) {
    pontosD1 += 3
} else if (D1r3 === 0) {
    pontosD1 += 1
    pontosD4 += 1
} else if (D1r3 < 0) {
    pontosD4 += 3
}

if (D2r2 >0) {
    pontosD2 += 3
} else if (D2r2 === 0) {
    pontosD2 += 1
    pontosD4 += 1
} else if (D2r2 < 0) {
    pontosD4 += 3
}

if (D2r3 >0) {
    pontosD2 += 3
} else if (D2r3 === 0) {
    pontosD2 += 1
    pontosD3 += 1
} else if (D2r3 < 0) {
    pontosD3 += 3
}

if (D3r1 > 0) {
    pontosD3 += 3
} else if (D3r1 === 0) {
    pontosD3 += 1
    pontosD4 += 1
} else if (D3r1 < 0) {
    pontosD4 += 3
}


// Gerando as pontuações do Grupo E:
export var pontosE1 = 0; export var pontosE2 = 0; 
export var pontosE3 = 0; export var pontosE4 = 0;
var E1r1 = (r.gEt1r1 - r.gEt2r1); 
var E1r2 = (r.gEt1r2 - r.gEt3r2); 
var E1r3 = (r.gEt1r3 - r.gEt4r3)
export var sg_E1 = E1r1 + E1r2 + E1r3 ;

var E2r1 = (r.gEt2r1 - r.gEt1r1)
var E2r2 = (r.gEt2r2 - r.gEt4r2)
var E2r3 = (r.gEt2r3 - r.gEt3r3)
export var sg_E2 = E2r1 + E2r2 + E2r3;

var E3r1 = (r.gCt3r1 - r.gCt4r1)
var E3r2 = (r.gCt3r2 - r.gCt1r2)
var E3r3 = (r.gEt3r3 - r.gEt2r3)
export var sg_E3 = E3r1 + E3r2 + E3r3;

var E4r1 = (r.gEt4r1 - r.gEt3r1)
var E4r2 = (r.gEt4r2 - r.gEt2r2)
var E4r3 = (r.gEt4r3 - r.gEt1r3)
export var sg_E4 = E4r1 + E4r2 + E4r3;

if (E1r1 > 0) {
    pontosE1 += 3
} else if (E1r1 === 0) {
    pontosE1 += 1
    pontosE2 += 1
} else if (E1r1 < 0) {
    pontosE2 += 3
}

if (E1r2 > 0) {
    pontosE1 += 3
} else if (E1r2 === 0) {
    pontosE1 += 1
    pontosE3 += 1
} else if (E1r2 < 0) {
    pontosE3 += 3
}

if (E1r3 > 0) {
    pontosE1 += 3
} else if (E1r3 === 0) {
    pontosE1 += 1
    pontosE4 += 1
} else if (E1r3 < 0) {
    pontosE4 += 3
}

if (E2r2 >0) {
    pontosE2 += 3
} else if (E2r2 === 0) {
    pontosE2 += 1
    pontosE4 += 1
} else if (E2r2 < 0) {
    pontosE4 += 3
}

if (E2r3 >0) {
    pontosE2 += 3
} else if (E2r3 === 0) {
    pontosE2 += 1
    pontosE3 += 1
} else if (E2r3 < 0) {
    pontosE3 += 3
}

if (E3r1 > 0) {
    pontosE3 += 3
} else if (E3r1 === 0) {
    pontosE3 += 1
    pontosE4 += 1
} else if (E3r1 < 0) {
    pontosE4 += 3
}


// Gerando as pontuações do Grupo F:
export var pontosF1 = 0; export var pontosF2 = 0; 
export var pontosF3 = 0; export var pontosF4 = 0;
var F1r1 = (r.gFt1r1 - r.gFt2r1); 
var F1r2 = (r.gFt1r2 - r.gFt3r2); 
var F1r3 = (r.gFt1r3 - r.gFt4r3)
export var sg_F1 = F1r1 + F1r2 + F1r3 ;

var F2r1 = (r.gFt2r1 - r.gFt1r1)
var F2r2 = (r.gFt2r2 - r.gFt4r2)
var F2r3 = (r.gFt2r3 - r.gFt3r3)
export var sg_F2 = F2r1 + F2r2 + F2r3;

var F3r1 = (r.gFt3r1 - r.gFt4r1)
var F3r2 = (r.gFt3r2 - r.gFt1r2)
var F3r3 = (r.gFt3r3 - r.gFt2r3)
export var sg_F3 = F3r1 + F3r2 + F3r3;

var F4r1 = (r.gFt4r1 - r.gFt3r1)
var F4r2 = (r.gFt4r2 - r.gFt2r2)
var F4r3 = (r.gFt4r3 - r.gFt1r3)
export var sg_F4 = F4r1 + F4r2 + F4r3;

if (C1r1 > 0) {
    pontosF1 += 3
} else if (F1r1 === 0) {
    pontosF1 += 1
    pontosF2 += 1
} else if (F1r1 < 0) {
    pontosF2 += 3
}

if (F1r2 > 0) {
    pontosF1 += 3
} else if (F1r2 === 0) {
    pontosF1 += 1
    pontosF3 += 1
} else if (F1r2 < 0) {
    pontosF3 += 3
}

if (F1r3 > 0) {
    pontosF1 += 3
} else if (F1r3 === 0) {
    pontosF1 += 1
    pontosF4 += 1
} else if (F1r3 < 0) {
    pontosF4 += 3
}

if (F2r2 >0) {
    pontosF2 += 3
} else if (F2r2 === 0) {
    pontosF2 += 1
    pontosF4 += 1
} else if (F2r2 < 0) {
    pontosF4 += 3
}

if (F2r3 >0) {
    pontosF2 += 3
} else if (F2r3 === 0) {
    pontosF2 += 1
    pontosF3 += 1
} else if (F2r3 < 0) {
    pontosF3 += 3
}

if (F3r1 > 0) {
    pontosF3 += 3
} else if (F3r1 === 0) {
    pontosF3 += 1
    pontosF4 += 1
} else if (F3r1 < 0) {
    pontosF4 += 3
}


// Gerando as pontuações do Grupo G:
export var pontosG1 = 0; export var pontosG2 = 0; 
export var pontosG3 = 0; export var pontosG4 = 0;
var G1r1 = (r.gGt1r1 - r.gGt2r1); 
var G1r2 = (r.gGt1r2 - r.gGt3r2); 
var G1r3 = (r.gGt1r3 - r.gGt4r3)
export var sg_G1 = G1r1 + G1r2 + G1r3 ;

var G2r1 = (r.gGt2r1 - r.gGt1r1)
var G2r2 = (r.gGt2r2 - r.gGt4r2)
var G2r3 = (r.gGt2r3 - r.gGt3r3)
export var sg_G2 = G2r1 + G2r2 + G2r3;

var G3r1 = (r.gGt3r1 - r.gGt4r1)
var G3r2 = (r.gGt3r2 - r.gGt1r2)
var G3r3 = (r.gGt3r3 - r.gGt2r3)
export var sg_G3 = C3r1 + G3r2 + G3r3;

var G4r1 = (r.gGt4r1 - r.gGt3r1)
var G4r2 = (r.gGt4r2 - r.gGt2r2)
var G4r3 = (r.gGt4r3 - r.gGt1r3)
export var sg_G4 = G4r1 + G4r2 + G4r3;

if (G1r1 > 0) {
    pontosG1 += 3
} else if (G1r1 === 0) {
    pontosG1 += 1
    pontosG2 += 1
} else if (G1r1 < 0) {
    pontosG2 += 3
}

if (G1r2 > 0) {
    pontosG1 += 3
} else if (G1r2 === 0) {
    pontosG1 += 1
    pontosG3 += 1
} else if (G1r2 < 0) {
    pontosG3 += 3
}

if (G1r3 > 0) {
    pontosG1 += 3
} else if (G1r3 === 0) {
    pontosG1 += 1
    pontosG4 += 1
} else if (G1r3 < 0) {
    pontosG4 += 3
}

if (G2r2 >0) {
    pontosG2 += 3
} else if (G2r2 === 0) {
    pontosG2 += 1
    pontosG4 += 1
} else if (G2r2 < 0) {
    pontosG4 += 3
}

if (G2r3 >0) {
    pontosG2 += 3
} else if (G2r3 === 0) {
    pontosG2 += 1
    pontosG3 += 1
} else if (G2r3 < 0) {
    pontosG3 += 3
}

if (G3r1 > 0) {
    pontosG3 += 3
} else if (G3r1 === 0) {
    pontosG3 += 1
    pontosG4 += 1
} else if (G3r1 < 0) {
    pontosG4 += 3
}


// Gerando as pontuações do Grupo H:
export var pontosH1 = 0; export var pontosH2 = 0; 
export var pontosH3 = 0; export var pontosH4 = 0;
var H1r1 = (r.gHt1r1 - r.gHt2r1); 
var H1r2 = (r.gHt1r2 - r.gHt3r2); 
var H1r3 = (r.gHt1r3 - r.gHt4r3)
export var sg_H1 = H1r1 + H1r2 + H1r3 ;

var H2r1 = (r.gHt2r1 - r.gHt1r1)
var H2r2 = (r.gHt2r2 - r.gHt4r2)
var H2r3 = (r.gHt2r3 - r.gHt3r3)
export var sg_H2 = H2r1 + H2r2 + H2r3;

var H3r1 = (r.gHt3r1 - r.gHt4r1)
var H3r2 = (r.gHt3r2 - r.gHt1r2)
var H3r3 = (r.gHt3r3 - r.gHt2r3)
export var sg_H3 = H3r1 + H3r2 + H3r3;

var H4r1 = (r.gHt4r1 - r.gHt3r1)
var H4r2 = (r.gHt4r2 - r.gHt2r2)
var H4r3 = (r.gHt4r3 - r.gHt1r3)
export var sg_H4 = H4r1 + H4r2 + H4r3;

if (H1r1 > 0) {
    pontosH1 += 3
} else if (H1r1 === 0) {
    pontosH1 += 1
    pontosH2 += 1
} else if (H1r1 < 0) {
    pontosH2 += 3
}

if (H1r2 > 0) {
    pontosH1 += 3
} else if (H1r2 === 0) {
    pontosH1 += 1
    pontosH3 += 1
} else if (H1r2 < 0) {
    pontosH3 += 3
}

if (H1r3 > 0) {
    pontosH1 += 3
} else if (H1r3 === 0) {
    pontosH1 += 1
    pontosH4 += 1
} else if (H1r3 < 0) {
    pontosH4 += 3
}

if (H2r2 >0) {
    pontosH2 += 3
} else if (H2r2 === 0) {
    pontosH2 += 1
    pontosH4 += 1
} else if (H2r2 < 0) {
    pontosH4 += 3
}

if (H2r3 >0) {
    pontosH2 += 3
} else if (H2r3 === 0) {
    pontosH2 += 1
    pontosH3 += 1
} else if (H2r3 < 0) {
    pontosH3 += 3
}

if (H3r1 > 0) {
    pontosH3 += 3
} else if (H3r1 === 0) {
    pontosH3 += 1
    pontosH4 += 1
} else if (H3r1 < 0) {
    pontosH4 += 3
}