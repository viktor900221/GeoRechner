/* 
Formel Rauteberechnung
Seitenlänge (a): Wurzel((Diagonale1^2+Diagonale2^2)/4)
Diagonale (d): Diagonale1 = Seitenlänge * 2 Diagonale2 Seitelänge * 2
Umfang: U = 4 * Seitenlänge
Fläche: A = (Diagonale1 * Diagonale2) /2
*/

/*Rauteberechnung*/

document.getElementById('senden').addEventListener('click', function(){

    let seitenlaenge = document.getElementById('seitenlaenge').value
    let diagonale1 = document.getElementById('diagonale1').value
    let diagonale2 = document.getElementById('diagonale2').value
    let umfang = document.getElementById('umfang').value
    let flaeche = document.getElementById('flaeche').value
    
    let array = [seitenlaenge,diagonale1,diagonale2,umfang,flaeche];
    console.log(array)
    
    for(let i = 0; i <= 4; i++)
    {
        if(array[i] == array[0]){
            //Seitenlänge = x Diagonale1 ? Diagonale2 ? Umfang ? Fläche ?  
            if(array[0]>0){
            //Diagonale1:
                array[1] = array[0] * 2
            //Diagonale2:
                array[2] = array[0] * 2
            //Umfang:
                array[3] = 4 * array[0] 
            //Fläche:    
                array[4] = (array[1] * array[2])/2
                break;
            }
        }
        else if(array[i] == array[1]){
            //Diagonale1 = x Seitenlänge ? Diagonale2 ? Umfang ? Fläche ? 
            if(array[1] > 0){
            //Seitenlaenge:Diagonale1/(Wurzel(2)*2)
            array[0] = array[1] /((Math.sqrt(2))*2)
            //Diagonale2:
            array[2] = array[0] * 2
            //Umfang:
            array[3] = 4 * array[0] 
            //Fläche:
            array[4] = (array[1] * array[2])/2
            break;
            }
        }
        else if(array[i]==array[2]){
            //Diagonale2 = x Seitenlänge ? Diagonale2 ? Umfang ? Fläche ? 
            if(array[2]>0){
                //Seitenlaenge:Diagonale1/(Wurzel(2)*2)
                array[0] = array[2] /(Math.sqrt(2)*2)
                //Diagonale1:
                array[1] = array[0] * 2
                //Umfang:
                array[3] = 4 * array[0] 
                //Fläche
                array[4] = (array[1] * array[2])/2
                break;
            }
        }
        else if(array[i]==array[3]){
            //Umfang = x Seitenlänge ? Diagonale1 ? Diagonale2 ? Fläche ? 
            if(array[3]>0){
                //Seitenlänge = Umfang/4
                array[0] = array[3] / 4
                //Diagonale1
                array[1] = array[0] * 2
                //Diagonale2
                array[2] = array[0] * 2
                //Fläche
                array[4] = (array[1] * array[2])/2
                break;
            }
        }
        else if(array[i]==array[4]){
            //Fläche = x Seitenlänge ? Diagonale1 ? Diagonale2 ? Umfang ? 
            if(array[4]>0){
                //Seitenlänge= Wurzel(Fläche/2)
                array[0] = Math.sqrt(array[4]/2)
                //Diagonale1
                array[1] = array[0] * 2
                //Diagonale2
                array[2] = array[0] * 2
                //Umfang
                array[3] = 4 * array[0] 
                break;
            }
        }
        console.log(array)
    }
    
    //Ausgabe
    
    document.getElementById('seitenlaenge').value = array[0]
    document.getElementById('diagonale1').value = array[1]
    document.getElementById('diagonale2').value = array[2]
    document.getElementById('umfang').value = array[3]
    document.getElementById('flaeche').value = array[4]
    
    //Zurücksetzen
    
    document.getElementById('zuruecksetzen').addEventListener('click', function(){
    array = []
    document.getElementById('seitenlaenge').value = 0
    document.getElementById('diagonale1').value = 0
    document.getElementById('diagonale2').value = 0
    document.getElementById('umfang').value = 0
    document.getElementById('flaeche').value = 0
    
    })
    
    })
    