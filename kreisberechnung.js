/* 
Formel Kreisberechnung
Durchmesser: d = 2 ⋅ r.
Radius: r = ½ ⋅ d.
Umfang: U = π ⋅ d oder U = π ⋅ 2 ⋅ r.
Flächeninhalt: A = π ⋅ r2 oder A = (π ⋅ d2) ÷ 4.
*/

/*Kreisberechnung*/

document.getElementById('senden').addEventListener('click', function(){

let radius = document.getElementById('radius').value
let durchmesser = document.getElementById('durchmesser').value
let umfang = document.getElementById('umfang').value
let flaeche = document.getElementById('flaeche').value

let array = [radius,durchmesser,umfang,flaeche];
console.log(array)

for(let i = 0; i <= 3; i++)
{
    if(array[i] == array[0] && array[i] > 0){
        //Durchmesser=?
        array[i+1] = 2 * array[i]
        //Test
        console.log(array[i+1]) 
    }else if(array[i] == array[1] && array[1] >0){
        //Radius=?
        array[0] = 0.5 * array[1]
        //Test
        console.log(array[1]) 
    }else if(array[i] == array[2]){
        //Umfang = x Radius = U/(2*PI)? 
        if(array[0] == 0 && array[2] >0){
           array[0] = (array[2]/(2*Math.PI))
           //Durchmesser:
           array[1] = 2 * array[0]
           //Fläche:
           array[3] = ((Math.PI * array[0]) * 2)
        } 
        //Umfang=? Also Umfang = 0.
        else{
            array[2] = (Math.PI * array[1])
            //Test
            console.log(array[2])
        }
        
    }else if(array[i] == array[3]){
        //Fläche = x Radius = Wurzel(Fläche / PI)   Durchmesser =?  Umfang = ?
        //Fläche->Radius:
        if(array[3] > 0 && (array[0] == 0 || array[1] == 0 || array[2] == 0)){
            array[0] = Math.sqrt(array[3]/Math.PI)  
            //Durchmesser: 
            array[1] = 2 * array[0]
            //Umfang:
            array[2] = (Math.PI * array[1])
        }
        else{
        //Fläche=?
        array[3] = ((Math.PI * array[0]) * 2)
        console.log(array[3])
    }
    }
    console.log(array)
}

//Ausgabe

document.getElementById('radius').value = array[0]
document.getElementById('durchmesser').value = array[1]
document.getElementById('umfang').value = array[2]
document.getElementById('flaeche').value = array[3]

//Zurücksetzen

document.getElementById('zuruecksetzen').addEventListener('click', function(){
array = []
document.getElementById('radius').value = 0
document.getElementById('durchmesser').value = 0
document.getElementById('umfang').value = 0
document.getElementById('flaeche').value = 0

})

})

