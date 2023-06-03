/* 
Formel Siebeneckberechnung
Höhe (h): √(a^2 - (a/2)^2) 
Seitenlänge (a): Alle drei Seiten eines gleichseitigen Dreiecks sind gleich lang
Umfang: U = 3a
Flächeninhalt:  A= (a^2 * √3) / 4
*/

/*Siebeneckberechnung*/

document.getElementById('senden').addEventListener('click', function(){

    let seitenlaenge = parseFloat(document.getElementById('seitenlaenge').value)
    let kurzediagonale = parseFloat(document.getElementById('kurzediagonale').value)
    let langediagonale = parseFloat(document.getElementById('langediagonale').value)
    let hoehe = parseFloat(document.getElementById('hoehe').value)
    let umfang = parseFloat(document.getElementById('umfang').value)
    let flaeche = parseFloat(document.getElementById('flaeche').value)
    
    let array = [seitenlaenge,kurzediagonale,langediagonale,hoehe, umfang,flaeche];
    console.log(array)
    
    for(let i = 0; i <= 5; i++)
    {
        if(array[i] == array[0] && array[i] > 0){
            //Seitenlaenge = X kurzediagonale ? langediagonale ? hoehe ? umfang ? flaeche ?
            //kurzediagonale:d1 = a * √3
            array[1] =  array[0] * Math.sqrt(3)
            //langediagonale:d2 = a * √7
            array[2] = array[0] * Math.sqrt(7)
            //hoehe: h= a * √(15 + 7√5) / 4
            array[3] = (array[0] * Math.sqrt(15+ (7*Math.sqrt(5)))) /4
            //umfang: U = 7a
            array[4] = 7 * array[0]
            //flaeche:   A = (7a^2 * √3) / 4
            array[5] =  (7*(Math.pow(array[0],2)*Math.sqrt(3))) / 4
            //Test
            console.log(array[i+1]) 
            break;
        }else if(array[i] == array[1] && array[i] >0){
            //kurzediagonale X Seitenlaenge ? langediagonale ? hoehe ? umfang ? flaeche ?
            //Seitenlänge:s = d / sqrt(3)
            array[0] =  array[1] / Math.sqrt(3)
            //langediagonale: D = 2s + d
            array[2] = 2 * array[0] + array[1]
            //Höhe:h = sqrt(3) / 2 * s
            array[3] = Math.sqrt(3) / (2 * array[0])
            //Umfang:U = 7s
            array[4] =  7 * array[0]
            //Fläche: A = 7/4 * s^2 * sqrt(3)
            array[5] =  7/4 * ((Math.pow(array[0],2)) * Math.sqrt(3))
            //Test
            console.log(array[1]) 
            break;
        }else if(array[i] == array[2] && array[i]>0){
            //langediagonale = X Seitenlaenge ? kurzediagonale ? hoehe ? umfang ? flaeche ?
            //Seitenlaenge:d / (2*sin(π/7))
            array[0] =  array[2] / (2*Math.sin(Math.PI/7))
            //kurzediagonale:d * sin(π/7)
            array[1] =array[2] * Math.sin(Math.PI/7)
            //Höhe: d * cos(π/7)
            array[3] =  array[2] * Math.cos(Math.PI/7)
            //Umfang: 7*a
            array[4] = 7 * array[0]
            //Fläche:  (7/4) * a^2 * cot(π/7) Es gibt kein Cotangent function
            const cot = 1 / Math.tan(Math.PI/7)
            array[5] = (7/4) * Math.pow(array[0],2) * cot
            break;
        
            
        }else if(array[i] == array[3]&& array[i]>0){
            //hoehe = X Seitenlaenge ? kurzediagonale ? langediagonale ?  umfang ? flaeche ?
            
            //Seitenlaenge:h / cos(π/7)
            array[0] =  array[3] / Math.cos(Math.PI/7)
            //kurzediagonale: 2 * h * tan(π/7)
            array[1] = 2* array[3] * Math.tan(Math.PI/7)
            //langediagonale: 2 * h * sec(π/7)Es gibt kein Sekans 
            const cos = Math.cos(Math.PI/7);
            const sec = 1 / cos;
            array[2] = 2* array[3] * sec
            //Umfang:7*a
            array[4] = 7 * array[0]
            //Fläche:(7/4) * a^2 * cot(π/7)
            const cot = 1 / Math.tan(Math.PI/7)
            array[5] = (7/4) * (Math.pow(array[0],2)) * cot 
            break;
        }
        else if(array[i] == array[4]&& array[i]>0){
        //umfang = X Seitenlaenge ? kurzediagonale ? langediagonale ? hoehe?   flaeche ?
        
        //Seitenlaenge:U / 7
        array[0] = array[4] / 7

        //kurzediagonale:a * √(25 + 10√5) / 2
        array[1] = (array[0] * Math.sqrt(25 + (10*Math.sqrt(5)))) /2
        //langediagonale:a * √(50 + 20√5)
        array[2] =(array[0] * Math.sqrt(50 + (20*Math.sqrt(5)))) 

        //Höhe:a * √(3) / 2
        array[3] =  array[0] * (Math.sqrt(3) / 2)
        //fläche:(7/4) * a^2 * cot(π/7)
        const cot = 1 / Math.tan(Math.PI/7)
        array[5] =  (7/4) * Math.pow(array[0],2) *  cot
        break;
        }
        else if(array[i] == array[5]&& array[i]>0){
        //flaeche = X Seitenlaenge ? kurzediagonale ? langediagonale ? hoehe?   umfang ?
        
        //Seitenlaenge (a):√(4A / (7cot(π/7)))
        const cot = 1 / Math.tan(Math.PI/7) 
        array[0]=  Math.sqrt(4*array[5])/(7*cot)
        //kurzediagonale: a * √(25 + 10√5) / 2
        array[1] =(array[0] * Math.sqrt(25 + (10*Math.sqrt(5)))) /2
        //langediagonale: a * √(50 + 20√5)
        array[2] =(array[0] * Math.sqrt(50 + (20*Math.sqrt(5)))) 
        //Höhe:a * √(3) / 2
        array[3] =   array[0] * (Math.sqrt(3) / 2)
        //Umfang:7*a
        array[4] = 7 * array[0]
        break;
        }
        console.log(array)
    }
    
    //Ausgabe
    
    document.getElementById('seitenlaenge').value = array[0]
    document.getElementById('kurzediagonale').value =array[1]
    document.getElementById('langediagonale').value = array[2]
    document.getElementById('hoehe').value = array[3]
    document.getElementById('umfang').value = array[4]
    document.getElementById('flaeche').value = array[5]
    
    //Zurücksetzen
    
    document.getElementById('zuruecksetzen').addEventListener('click', function(){
    array = []
    document.getElementById('seitenlaenge').value = 0
    document.getElementById('kurzediagonale').value = 0
    document.getElementById('langediagonale').value = 0
    document.getElementById('hoehe').value = 0
    document.getElementById('umfang').value = 0
    document.getElementById('flaeche').value = 0
    
    
    })
    
    })
    