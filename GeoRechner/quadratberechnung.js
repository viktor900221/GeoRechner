/* 
Formel Quadratberechnung
Seitenlänge (a): Wurzel A
Diagonale (d): a * Wurzel 2
Umfang: U = a + a + a + a = 4a
Fläche: A = a * a = a2
*/

/*Quadratberechnung*/

document.getElementById('senden').addEventListener('click', function(){

    let seitenlaenge = document.getElementById('seitenlaenge').value
    let diagonale = document.getElementById('diagonale').value
    let umfang = document.getElementById('umfang').value
    let flaeche = document.getElementById('flaeche').value
    
    let array = [seitenlaenge,diagonale,umfang,flaeche];
    console.log(array)
    
    for(let i = 0; i <= 3; i++)
    {
        if(array[i] == array[0]){
            //Seitenlänge = x Diagonale? Umfang ? Fläche ?  
            if(array[0]>0){
            //Diagonale:
                array[1] = array[i] * Math.sqrt(2)
            //Umfang:
                array[2] = 4 * array[0] 
            //Fläche:    
                array[3] = array[0] * array[0]
                break;
            }
        }
        else if(array[i] == array[1]){
            //Diagonale = x Seitenlänge ? Umfang ? Fläche ? 
            if(array[1] > 0){
            //Seitenlaenge:(Diagonale/Wurzel(2))
            array[0] = array[1] / Math.sqrt(2)
            //Umfang:
            array[2] = 4 * array[0] 
            //Fläche:
            array[3] = array[0] * array[0]
            break;
            }
        }
        else if(array[i]==array[2]){
            //Umfang = x Seitenlänge ? Diagonale ? Fläche ? 
            if(array[2]>0){
                //Seitenlänge = Umfang/4
                array[0] = array[2] / 4
                //Diagonale
                array[1] = array[0] * Math.sqrt(2)
                //Fläche
                array[3] = array[0] * array[0]
                break;
            }
        }
        else if(array[i]==array[3]){
            //Fläche = x Seitenlänge ? Diagonale ? Umfang ? 
            if(array[3]>0){
                //Seitenlänge= Wurzel(Fläche)
                array[0] = Math.sqrt(array[3])
                //Diagonale
                array[1] = array[0] * Math.sqrt(2)
                //Umfang
                array[2] = 4 * array[0] 
                break;
            }
        }
        console.log(array)
    }
    
    //Ausgabe
    
    document.getElementById('seitenlaenge').value = array[0]
    document.getElementById('diagonale').value = array[1]
    document.getElementById('umfang').value = array[2]
    document.getElementById('flaeche').value = array[3]
    
    //Zurücksetzen
    
    document.getElementById('zuruecksetzen').addEventListener('click', function(){
    array = []
    document.getElementById('seitenlaenge').value = 0
    document.getElementById('diagonale').value = 0
    document.getElementById('umfang').value = 0
    document.getElementById('flaeche').value = 0
    
    })
    
    })
    