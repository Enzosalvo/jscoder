//alert(' Bienvenidos a Zombie Fighter');

//alert('Ingresa tu Nombre');

//alert('Ingresa tu Peso');

//alert('Vos usuario necesitas guantes de ...oz');


/* let frutas =["pera","kiwi","Banana"];
console.log( frutas[2]); */ 



function localBoxeo(){
    let decidir=true;
    
    alert("Bienvenidos a Zombie Fighter")
    
    do {
           
        let cliente = prompt("Hola, Ingrese su nombre")
        let peso= prompt("Ingresa tu Peso")
        let color=prompt("Color de guantes Negro o Rojo")
    
                if (peso <= 50 ) {
                             alert ("Hola "+ cliente +" tu peso es de " +peso + "kg, te corresponde unos guantes de 10oz color " +color) 
    
                            decidir = false ;
                
                    }  else if (peso <= 80 ){
                             alert ("Hola "+ cliente +" tu peso es de " +peso + "kg, te corresponde unos guantes de 12oz color " +color) 
    
                            decidir = false ;
                            }
                        
                    
                else {
                alert ("Hola "+ cliente +" tu peso es de " +peso + "kg, te corresponde unos guantes de 14oz color " +color) 
    
                decidir = false ;
                }
    
        
    
            }
    
        
        
        
    while(decidir)
    }
    
    
    localBoxeo()
    