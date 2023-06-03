/* 
Formel Rechteckberechnung
Seitenlänge1 (a1): Wurzel(länge^2 + breite^2)
Breite (a2): 
Diagonale (d):  länge^2 + breite^2
Umfang: U = 2* (Länge + Breite)
Fläche: A = Länge * Breite
*/

/*Rechteckberechnung*/

document.getElementById('senden').addEventListener('click', function(){

    let laenge = document.getElementById('laenge').value
    let breite = document.getElementById('breite').value
    let diagonale = document.getElementById('diagonale').value
    let umfang = document.getElementById('umfang').value
    let flaeche = document.getElementById('flaeche').value
    
    let array = [laenge,breite,diagonale,umfang,flaeche];
    console.log(array)
    
    let ergebnis = 0
    for(let i = 0; i<= 4; i++){

        if(array[i]>0){
            ergebnis += 1
        }

    }
    //Länge = x Breite = x Diagonale ? Umfang ? Fläche ?  
    //Länge = x Diagonale = x Breite ? Umfang ? Fläche ?
    //Länge = x Umfang = x Breite ? Diagonale ? Fläche ? 
    //Länge = x Fläche = x Breite ? Diagonale ? Umfang ?
    //Breite = x Diagonale = x Umfang ? Fläche ?
    //Breite = x Umfang = x Länge ? Diagonale ? Fläche ? 
    //Breite = x Fläche = x Länge ? Diagonale ? Umfang ?
    //Diagonale = x Umfang = x Länge ? Breite ? Fläche ? 
    //Diagonale = x Fläche = x Länge ? Breite ? Umfang ?
    //Umfang = x Fläche = x Länge ? Breite ? Diagonale ?

    if(ergebnis == 2){
        for(let i = 0; i <= 4; i++)
        {
            if(array[i] == array[0]){
                if(array[0]>0){
                    //Länge = x Breite = x Diagonale ? Umfang ? Fläche ?  
                    if(array[1]>0){
                        //Diagonale: länge^2 + breite^2
                        array[2] = Math.pow(array[0], 2) + Math.pow(array[1], 2)
                        //Umfang: 2* (Länge + Breite)
                        array[3] = 2* (array[0]+array[1])
                        //Fläche: Länge * Breite
                        array[4] = array[0] * array[1]
                        break;
                    }
                    //Länge = x Diagonale = x Breite ? Umfang ? Fläche ?
                    else if(array[2]>0){
                        //Breite:sqrt(d^2 - l^2)
                        array[1] = Math.sqrt(Math.pow(array[2],2)-Math.pow(array[0],2))
                        //Umfang: 2 * l + 2 * sqrt(d^2 - l^2)
                        array[3] = 2 * array[0] + (2 * Math.sqrt(Math.pow(array[2],2)-Math.pow(array[0],2)))
                        //Fläche:l * sqrt(d^2 - l^2)
                        array[4] = array[0] * Math.sqrt(Math.pow(array[2],2)-Math.pow(array[0],2))
                        break;
                    }
                    //Länge = x Umfang = x Breite ? Diagonale ? Fläche ? 
                    else if(array[3]>0){
                        //Breite: (U - 2 * l) / 2
                        array[1] = (array[3]- 2* array[0]) / 2
                        //Diagonale:sqrt(l^2 + (U/2)^2)
                        array[2] = Math.sqrt(Math.pow(array[0],2) + Math.pow((array[3]/2),2))
                        //Fläche: (U^2 - 4*l^2) / 16
                        array[4] = (Math.pow(array[3],2)-4*(Math.pow(array[0],2)))
                        break;
                    }
                    //Länge = x Fläche = x Breite ? Diagonale ? Umfang ?
                    else if(array[4]>0){
                        //Breite:A / l
                        array[1] = array[4] / array[0]
                        //Diagonale: sqrt(l^2 + 4*A)
                        array[2] = Math.sqrt(Math.pow(array[0],2)+ 4 * array[4])
                        //Umfang:2 * (l + sqrt(A))
                        array[3] = 2 * (array[0] + Math.sqrt(array[4]))
                        break;

                    }
                }
            }
            else if(array[i] == array[1]){
                if(array[1]>0){
                    //Breite = x Diagonale = x Länge ? Umfang ? Fläche ?
                    if(array[2]>0){
                        //Länge:sqrt(d^2 - b^2)
                        array[0] = Math.sqrt(Math.pow(array[2],2)-Math.pow(array[1],2))
                        //Umfang:2 * (b + sqrt(d^2 - b^2))
                        array[3] = 2* (array[1]+Math.sqrt(Math.pow(array[2],2)-Math.pow(array[1],2)))
                        //Fläche:b * sqrt(d^2 - b^2)
                        array[4] = array[1] * Math.sqrt(Math.pow(array[2],2)-Math.pow(array[1],2))
                        break;
                    }
                    //Breite = x Umfang = x Länge ? Diagonale ? Fläche ? 
                    else if(array[3]>0){
                        //Länge:(U - 2*b) / 2
                        array[0] =(array[3]- 2* array[1]) / 2
                        //Diagonale:sqrt(U^2 - 4*b^2)
                        array[2] = Math.sqrt(Math.pow(array[3],2) - 4 * (Math.pow(array[1],2)))
                        //Fläche:(U^2 - 4*b^2) / (4)
                        array[4] = ((Math.pow(array[3],2) - 4 * (Math.pow(array[1],2)))) / 4
                        break;
                    }
                    //Breite = x Fläche = x Länge ? Diagonale ? Umfang ?
                    else if(array[4]>0){
                        //Länge: A / b
                        array[0] = array[4] / array[1]
                        //Diagonale:sqrt(A^2 + 4*b^2) / 2
                        array[2] = (Math.sqrt(Math.pow(array[4]) + 4 * (Math.pow(array[1],2)))) /2
                        //Umfang: 2 * (b + sqrt(A))
                        array[3] = 2 * (array[1]+ Math.sqrt(array[4]))
                        break;
                    }
                    //Breite = x Länge = x Diagonale ? Umfang ? Fläche ?
                    else if(array[0]>0){
                        //Diagonale:  sqrt(l^2 + b^2)
                        array[2] = Math.sqrt(Math.pow(array[0],2)+Math.pow(array[1],2))
                        //Umfang: 2 * (l + b)
                        array[3] = 2 * (array[0]+ array[1])
                        //Fläche: l * b
                        array[4] = array[0] * array[1]
                        break;
                    }
                }
            
            }
            else if(array[i]==array[2]){
                if(array[2]>0){
                     //Diagonale = x Länge = x  Breite ? Umfang ? Fläche ? 
                    if(array[0]>0){
                        //Breite: sqrt(d^2 - l^2)
                        array[1] = Math.sqrt(Math.pow(array[2],2)-Math.pow(array[0],2))
                        //Umfang: 2 * (l + sqrt(d^2 - l^2))
                        array[3] = 2* (array[0]+ Math.sqrt(Math.pow(array[2],2)-Math.pow(array[0],2)))
                        //Fläche: l * sqrt(d^2 - l^2)
                        array[4] = array[0] * Math.sqrt(Math.pow(array[2],2)-Math.pow(array[0],2))
                        break;
                    }
                    //Diagonale = x Breite = x Länge ?  Umfang ? Fläche ?
                    else if(array[1]>0){
                        //Länge: sqrt(d^2 - b^2)
                        array[0] = Math.sqrt(Math.pow(array[2],2)-Math.pow(array[1],2))
                        //Umfang: 2 * (b + sqrt(d^2 - b^2))
                        array[3] = 2 * (array[1] + Math.sqrt(Math.pow(array[2],2)-Math.pow(array[1],2)))
                        //Fläche: b * sqrt(d^2 - b^2)
                        array[4] = array[1] * Math.sqrt(Math.pow(array[2],2)-Math.pow(array[1],2))

                        break;
                    }
                    //Diagonale = x Umfang = x Länge ?  Breite ? Fläche ?
                    else if(array[3]>0){
                        //Länge: Länge = (U/2) - sqrt((U/2)^2 - d^2)
                        array[0] = (array[3]/2) - Math.sqrt(Math.pow((array[3]/2,2))- Math.pow(array[2],2))
                        //Breite:  (U/2) - Länge
                        array[1] = (array[3]/2) - array[0]
                        //Fläche: (U/2) * sqrt(d^2 - ((U/2)^2))
                        array[4] = (array[3]/2) * Math.sqrt(Math.pow(array[2],2)- Math.pow((array[3]/2,2)))

                        break;
                    }
                    //Diagonale = x Fläche = x Länge ?  Breite ? Umfang ?
                    else if(array[4]>0){
                        //Länge:A / (0.5 * sqrt(d^2 + A^2/d^2))
                        array[0] = array[4] / (0.5 * Math.sqrt(Math.pow(array[2],2) + (Math.pow(array[4],2))/Math.pow(array[2],2)))
                        //Breite: A / (0.5 * sqrt(d^2 + A^2/d^2)) * (d/sqrt(d^2 + A^2/d^2))
                        array[1] =  (array[4] / (0.5 * Math.sqrt(Math.pow(array[2],2) + (Math.pow(array[4],2))/Math.pow(array[2],2)))) * array[4] / (0.5 * Math.sqrt(Math.pow(array[2],2) + (Math.pow(array[4]),2)/Math.pow(array[2],2)))
                        //Umfang: 2 * (Länge + Breite)
                        array[3] = 2 * (array[0]+array[1])

                        break;
                    }
                   
                }
            
            }
            else if(array[i]==array[3]){
                if(array[3]>0){
                     //Umfang = x Länge = x  Breite ? Diagonale ? Fläche ?
                     if(array[0]>0){
                        //Breite: (U - 2L) / 2
                        array[1] = (array[3]-2*array[0]) /2
                        //Diagonale: sqrt(L^2 + (U/2)^2)
                        array[2] =Math.sqrt(Math.pow(array[0],2) + (Math.pow(array[3]/2,2)))
                        //Fläche: L * ((U/2) - L)
                        array[4] = array[0] * ((array[3]/2) - array[0])
                        break;
                    }
                    //Umfang = x Breite = x Länge ? Diagonale ? Fläche ?
                    else if(array[1]>0){
                        //Länge:(U - 2B) / 2
                        array[0] = (array[4]- 2* array[1]) / 2
                        //Diagonale:  sqrt(B^2 + (U/2)^2)
                        array[2] = Math.sqrt(Math.pow(array[1],2) + (Math.pow(array[3]/2,2)))
                        //Fläche: ((U/2) - B) * B
                        array[4] = ((array[3]/2)- array[1]) * array[1]
                        break;
                    }
                    //Umfang = x Diagonale = x Länge ? Breite ? Fläche ?
                    else if(array[2]>0){
                        //Länge:((U/2)^2 - (D/2)^2) / (U - D)
                        array[0] =  (Math.pow(array[3]/2,2))- ((Math.pow(array[2]/2,2))/ (array[3]-array[2]))
                        //Breite:sqrt((D/2)^2 - ((U/2)^2))
                        array[1] =Math.sqrt(Math.pow(array[2]/2,2) - (Math.pow(array[2]/2,2)))
                        //Fläche:(U * sqrt(D^2 - U^2)) / 4
                        array[4] = (array[3] * Math.sqrt(Math.pow(array[2],2) - (Math.pow(array[3],2)))) / 4
                        break;
                    }
                    //Umfang = x Fläche = x Länge ? Breite ? Diagonale ?
                    else if(array[4]>0){
                        //Länge:
                        alert("Es ist nicht möglich, die Länge, Breite und Diagonale eines Rechtecks nur aus dem Umfang U und der Fläche A zu berechnen.")

                        //Breite:

                        //Diagonale:

                        break;
                    }
                   
                   
                }
            
            }
            else if(array[i]==array[4]){
                if(array[3]>0){
                    //Fläche = x  Länge = x Breite ? Diagonale ? Umfang ?
                    if(array[0]>0){
                        //Breite:
                        alert("Es ist nicht möglich, die Breite, Diagonale oder Umfang eines Rechtecks nur aus der Fläche A und der Länge L zu berechnen. ")
                        //Diagonale:

                        //Umfang:

                        break;
                    }
                    //Fläche = x  Breite = x Länge ? Diagonale ? Umfang ?
                    else if(array[1]>0){
                        //Länge:A / B
                        array[0] = array[0] /array[1]
                        //Diagonale:sqrt(L^2 + B^2)
                        array[2] = Math.sqrt(Math.pow(array[0],2) + (Math.pow(array[1],2)))
                        //Umfang: 2 (L + B) oder Umfang U = L + L + B + B
                        array[3] = 2 * (array[0]+array[1])
                        break;
                    }
                    //Fläche = x  Diagonale = x Länge ? Breite ? Umfang ?
                    else if(array[2]>0){
                        //Länge: D * sqrt(1 / (1 + (D / A)^2))
                        array[0] = array[2] * Math.sqrt(1 / (1 + Math.pow((array[2]/array[4]),2)))
                        //Breite:A / L
                        array[1] = array[4] / array[0]
                        //Umfang:2 * (L + B) oder Umfang U = 2 * L + 2 * B
                        array[3] = 2* (array[0]+ array[1])
                        break;
                    }
                     //Fläche = x  Umfang = x Länge ? Breite ? Diagonale ?
                     else if(array[3]>0){
                        //Länge:(U - sqrt(U^2 - 16*A))) / 4
                        array[0] = (array[3] - Math.sqrt(Math.pow(array[3],2)- 16 * array[4])) / 4
                        //Breite: A / L
                        array[1] = array[4] / array[0]
                        //Diagonale:sqrt(L^2 + B^2)
                        array[2] = Math.sqrt(Math.pow(array[0],2) + Math.pow(array[1],2))
                        break;
                    }
                   
                }
            
            }
            console.log(array)
        }
    
    }
    else{
        alert("Bitte 2 Größe eingeben")
    }
    //Ausgabe
    
    document.getElementById('laenge').value = array[0]
    document.getElementById('breite').value = array[1]
    document.getElementById('diagonale').value = array[2]
    document.getElementById('umfang').value = array[3]
    document.getElementById('flaeche').value = array[4]
    
    //Zurücksetzen
    
    document.getElementById('zuruecksetzen').addEventListener('click', function(){
    array = []
    document.getElementById('laenge').value = 0
    document.getElementById('breite').value = 0
    document.getElementById('diagonale').value = 0
    document.getElementById('umfang').value = 0
    document.getElementById('flaeche').value = 0
    
    })
    
    })
    