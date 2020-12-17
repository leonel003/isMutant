function isMutant(dna){
    let horizontal=0;
    let vertical=0;
    let oblicuo=0;

    if(Array.isArray(dna)==true && dna.length==6){
        for(let x=0; x<dna.length;x++){
            if(dna[x].length==6){   
                if(dna[x][0]==dna[x][1] && dna[x][1]==dna[x][2] && dna[x][2]==dna[x][3] ||dna[x][5]==dna[x][4] && dna[x][4]==dna[x][3] && dna[x][3]==dna[x][2] || dna[x][1]==dna[x][2] && dna[x][2]==dna[x][3] && dna[x][3]==dna[x][4]){
                    horizontal++

                }
                if(dna[0][x]==dna[1][x] && dna[1][x]==dna[2][x] && dna[2][x]==dna[3][x] || dna[5][x]==dna[4][x] && dna[4][x]==dna[3][x] && dna[3][x]==dna[2][x] || dna[1][x]==dna[2][x] && dna[2][x]==dna[3][x] && dna[3][x]==dna[4][x]){
                    vertical++
                }
            }
        }
        if(dna[0][0]==dna[1][1] && dna[1][1]==dna[2][2] && dna[2][2]==dna[3][3]){
            oblicuo++;
        }

        let res= horizontal+vertical+oblicuo;
        if(res>=2){
            return true;
        }
        else{
            return false;
        }
    } else{
        console.log('parametro invalido');
    } 
    
}