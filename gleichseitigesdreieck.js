/* 
Formel Gleichseitiges Dreieck
Höhe (h): √(a^2 - (a/2)^2) 
Seitenlänge (a): Alle drei Seiten eines gleichseitigen Dreiecks sind gleich lang
Umfang: U = 3a
Flächeninhalt:  A= (a^2 * √3) / 4
*/

/*Gleichseitiges Dreieck*/

document.getElementById('senden').addEventListener('click', function(){

    let seitenlaenge = parseFloat(document.getElementById('seitenlaenge').value)
    let hoehe = parseFloat(document.getElementById('hoehe').value)
    let umfang = parseFloat(document.getElementById('umfang').value)
    let flaeche = parseFloat(document.getElementById('flaeche').value)
    
    let array = [seitenlaenge,hoehe,umfang,flaeche];
    console.log(array)
    
    for(let i = 0; i <= 3; i++)
    {
        if(array[i] == array[0] && array[i] > 0){
            //Seitenlaenge = X hoehe ? umfang ? flaeche ?
            //hoehe:a * √3 / 2
            array[1] = array[0] * (Math.sqrt(3) / 2)
            //umfang:U = 3a
            array[2] = 3 * array[0]
            //flaeche:  (a * a * √3) / 4
            array[3] = (array[0] * array[0] * Math.sqrt(3)) /4
            //Test
            console.log(array[i+1]) 
            break;
        }else if(array[i] == array[1] && array[i] >0){
            //höhe = X Seitenlänge ? Umfang ? Fläche ? 
            //Seitenlänge:2h / √3
            console.log(array[1])
            array[0] =  (2 * array[1]) / (Math.sqrt(3))
            //Umfang:6h / √3
            array[2] = (6* array[1]) / (Math.sqrt(3))
            //Fläche: (3h^2) / 2√3
            array[3] = (3*Math.pow(array[1],2)) / (2* Math.sqrt(3))
            //Test
            console.log(array[1]) 
            break;
        }else if(array[i] == array[2] && array[i]>0){
            //Umfang = x Seitenlaenge ?  hoehe ? flaeche ?
            //Seitenlaenge: U / 3
            array[0] = array[2] / 3
            //Höhe:  U * √3 / 6
            array[1] =  (array[2] * Math.sqrt(3)) / 6
            //Fläche: (a * h) 
            array[3] = (array[0]*array[1])
            break;
        
            
        }else if(array[i] == array[3]&& array[i]>0){
            //Fläche = x Seitenlaenge ?  Höhe ? Umfang ?
            
            //Seitenlaenge:a = √(4A / √3)
            array[0]= Math.sqrt(4*array[3]/Math.sqrt(3))
            //Höhe:2A / a√3
            array[1]= 2 * array[3] / array[0] * Math.sqrt(3)
            //Umfang:3 * √(4A / √3)
            array[2]= 3 * Math.sqrt(4 * array[3] / Math.sqrt(3))
            break;
        }
        console.log(array)
    }
    
    //Ausgabe
    
    document.getElementById('seitenlaenge').value = array[0]
    document.getElementById('hoehe').value = array[1]
    document.getElementById('umfang').value = array[2]
    document.getElementById('flaeche').value = array[3]
    
    //Zurücksetzen
    
    document.getElementById('zuruecksetzen').addEventListener('click', function(){
    array = []
    document.getElementById('seitenlaenge').value = 0
    document.getElementById('hoehe').value = 0
    document.getElementById('umfang').value = 0
    document.getElementById('flaeche').value = 0
    
    })
    
    })
    
    