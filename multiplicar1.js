// pide un numero
  var numero=prompt("Introduce un numero entre el 1 y el 100");
// muestra numero entero
     alert(parseInt(numero));
// comrueba que esta dentro limite
    if (numero > 100 && numero > 0)
    {
            alert("vuelve a introducirlo");
        numero=prompt("Introduce un numero entre el 1 y el 100");
        alert(parseInt(numero));
      }
      else
      {
      alert ("Observa la tabla");
      }
