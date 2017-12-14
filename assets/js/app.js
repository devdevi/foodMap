
  $(document).ready(function(){

     cargar();

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('select').material_select();
    $ ('#selection').change(function(){
      alert('cambias de selecion');

      cargar();
   
    });

    //imagen foto de perfil
/* var imgprofile= document.createElement('img')
 imgprofile.classList.add('profilepic')
 imgprofile.setAttribute('src', students[i].photo) */


   function cargar(){

      //creando Objetos desde una TABLA
      var items = [];
      //itermaos cada fila de la tabla
    $('tbody tr').each(function(){

      var itemRestaurant = {};

       var tds = $(this).find('td');
       itemRestaurant.photoR = tds.filter(":eq(0)").text();
       itemRestaurant.name = tds.filter(":eq(1)").text();
       itemRestaurant.typeC = tds.filter(":eq(2)").text();
       itemRestaurant.priceR = parseFloat(tds.filter(":eq(3)").text());
       itemRestaurant.horarioR = tds.filter(":eq(4)").text();
       itemRestaurant.raiting = parseFloat(tds.filter(":eq(5)").text());

       //metemos el objeto itemRestaurant en el arreglo 
       items.push(itemRestaurant);
    });
      console.log(items);
      var restaurantHere = $('#restaurantHere');

     /* var photo ='';
      var nameRest = '';
      var cookType ='';
      var price = 0;
      var horario = '';
      var puntuacion = 0;

      $.each(items,function(i,value){

        //rescatamos los valores del objeto
       photo = value.photoR;
       nameRest += value.name;
       cookType += value.typeC;
       price += value.priceR;
       horario += value.horarioR;
       puntuacion += value.raiting;

      })*/

      for( i = 0; i < items.length; i++){

       var photo =items[i].photoR;
       var nameRest  =items[i].name;
       var cookType  =items[i].typeC;
       var price  =items[i].priceR;
       var horario  =items[i].horarioR;
       var puntuacion  =items[i].raiting;

       console.log('funciona');
      restaurantHere.append(
        ' <div class="col s4 center">' +
           ' <img src="'+ photo +'" alt="">' +
              '<h5 class= "amber-text"> ' + nameRest +'</h5>' +

           ' </div>'

              );

     };

          //restaurantHere.append()
        //})
     // }



    /*//Recorriendo un objeto
     //iteramos el arreglo
     var orden = {};

     orden.items = items; 


      var photo ='';
      var nameRest = '';
      var cookType ='';
      var price = 0;
      var horario = '';
      var puntuacion = 0;

     //Usamos $.each para iterar un arreglo comun y corriente
     $.each(items,function(index, value){//primer argumento es el objeto  el segundo una funcion

      //rescatamos los valores del objeto
       photo = value.photoR;
       nameRest += value.name;
       cookType += value.typeC;
       price += value.priceR;
       horario += value.horarioR;
       puntuacion += value.raiting;

     });
     orden.photo = photo;
     orden.name = nameRest;
     orden.cookType = cookType;

     //esto lo hice viendo este video https://www.youtube.com/watch?v=9l4OcYkFdtc*/
  };

       
});



// La funcionalidad de tu proyecto
