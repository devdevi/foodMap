
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

        '<div class="col s4 center">' +
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal1">' +
         '<h5 class="amber-text"> ' + nameRest +'</h5>' +
         '</div>' +

         //arreglar el Modal
         
        ' <div id="modal1" class="modal ">' +
           ' <div class="modal-content ">' +
             ' <div class="row">' +
               ' <h5 class="amber-text"><strong>' + nameRest +'</strong></h5>' +
                '<div class="col s6">'+
                   '<img src="' + photo + '" alt=""> '+
                '</div>' +
               ' <div class="col s6">' +
                 ' <p>Tipo de comida:&nbsp' + cookType +'</p>' +
                  '<p>Precio:&nbsp$' + price + '</p>' +
                  '<p>Horario:&nbsp'+ horario +'</p>' +
                  '<p>Puntuacion:&nbsp<a class="waves-effect waves-light btn amber white-text ">' + puntuacion + '</a></p>' +
               ' </div>' +
             ' </div>' +
           ' </div>' +
           ' <div class="modal-footer">' +
             ' <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat amber-text">IR A RESTAURANTE</a>' +
           ' </div>' +
          '</div>'
          ); 

          
    
    $('#categorias').on('change', function() {
      var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "china") {
      restaurantHere.append( '<div class="col s4 center">' +
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal1">' +
         '<h5 class="amber-text"> ' + nameRest +'</h5>' +
         '</div>' +

         //arreglar el Modal
         
        ' <div id="modal1" class="modal ">' +
           ' <div class="modal-content ">' +
             ' <div class="row">' +
               ' <h5 class="amber-text"><strong>' + nameRest +'</strong></h5>' +
                '<div class="col s6">'+
                   '<img src="' + photo + '" alt=""> '+
                '</div>' +
               ' <div class="col s6">' +
                 ' <p>Tipo de comida:&nbsp' + cookType +'</p>' +
                  '<p>Precio:&nbsp$' + price + '</p>' +
                  '<p>Horario:&nbsp'+ horario +'</p>' +
                  '<p>Puntuacion:&nbsp<a class="waves-effect waves-light btn amber white-text ">' + puntuacion + '</a></p>' +
               ' </div>' +
             ' </div>' +
           ' </div>' +
           ' <div class="modal-footer">' +
             ' <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat amber-text">IR A RESTAURANTE</a>' +
           ' </div>' +
          '</div>');
      }
      if( selection === "venezolana") {
      restaurantHere.html('<p>Hola esto es un append Venezolano</p> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/>');
      }
      if( selection === "arabe") {
      restaurantHere.html('<p>Hola esto es un append Árabe</p> <img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/><img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/>');
      }
      if( selection === "peruana") {
      restaurantHere.html('<p>Hola esto es un append Peruano</p> <img src="https://v.dreamwidth.org/303319/106183"/><img src="https://v.dreamwidth.org/303319/106183"/>');
      }
});

      //ESTO FUNCIONA 
      /*
      console.log('funciona');
      restaurantHere.append(
        
        ' <div class="col s4 center">' +
           ' <img src="'+ photo +'" alt="">' +
              '<h5 class= "amber-text"> ' + nameRest +'</h5>' +

           ' </div>'

          );*/

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
