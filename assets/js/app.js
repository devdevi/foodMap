$(function(){
  setTimeout(function() {
     $('#splash').fadeOut(700);
  }, 3500);
});

  $(document).ready(function(){

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

    cargar();
    allrestaurants();
    mouseH();

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('select').material_select();
    $ ('#selection').change(function(){
      alert('cambias de selecion');

      
   
    });

    //imagen fotOrientalo de perfil
/* var imgprofile= document.createElement('img')
 imgprofile.classList.add('profilepic')
 imgprofile.setAttribute('src', students[i].photo) */


   function cargar(){
    //poner ITEMS AQUI EN CASO DE PROBLEMA

      console.log(items);
      var restaurantOriental = $('#restaurantOriental');
      var restaurantEropea= $('#restaurantEropea');
      var restaurantChile = $('#restaurantChile');
      var restaurantPeru= $('#restaurantPeru');

   
     $('#categorias').on('change', function() {
      var selection = $('#categorias').val();
      for( i = 0; i < items.length; i++){

       var photo =items[i].photoR;
       var nameRest  =items[i].name;
       var cookType  =items[i].typeC;
       var price  =items[i].priceR;
       var horario  =items[i].horarioR;
       var puntuacion  =items[i].raiting;
       console.log(cookType);
  
      //cont.text(selection);
      if( selection === "1" && cookType ==='china') {
        //que aparesca el titulo
        $('#sectionOriental').removeClass("hide");
      restaurantOriental.append( 
        '<div class="col s4 center">' +
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal'+ [i] + '">' +
         '<h5 class="amber-text"> ' + nameRest +'</h5>' +
         '</div>' +

         //arreglar el Modal
         
        ' <div id="modal' + [i] + '" class="modal ">' +
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
       $('.modal').modal();
      mouseH();
          $('#restaurantHere').hide();
          $( '#restaurantOriental').show();
          $( '#restaurantChile').hide();
          $( '#restaurantEropea').hide();
          $( '#restaurantPeru').hide();
      };


      //COMIDA EUROPEA
      if( selection === "2" && cookType ==='Europea') {
           $('.modal').modal();
        //que aparesca el titulo
        $('#sectionEuropea').removeClass("hide");
      restaurantEropea.append( 
        '<div class="col s4 center">' +
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal'+ [i] + '">' +
         '<h5 class="amber-text"> ' + nameRest +'</h5>' +
         '</div>' +

         //arreglar el Modal
         
        ' <div id="modal' + [i] + '" class="modal ">' +
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
      mouseH();
          $('#restaurantHere').hide();
          $( '#restaurantOriental').hide();
          $( '#restaurantChile').hide();
          $( '#restaurantEropea').show();
          $( '#restaurantPeru').hide();
          $('.modal').modal();
      };


      //COMIDA CHILENA
       if( selection === "3" && cookType ==='Chilena') {
          $('.modal').modal();
        //que aparesca el titulo
        $('#sectionChile').removeClass("hide");
      restaurantChile.append( 
        '<div class="col s4 center">' +
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal'+ [i] + '">' +
         '<h5 class="amber-text"> ' + nameRest +'</h5>' +
         '</div>' +

         //arreglar el Modal
         
        ' <div id="modal' + [i] + '" class="modal ">' +
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
      mouseH();
      //Ocultamos las otras secciones
           $('#restaurantHere').hide();
          $( '#restaurantOriental').hide();
          $( '#restaurantChile').show();
          $( '#restaurantEropea').hide();
          $( '#restaurantPeru').hide();
          $('.modal').modal();
      };

      //COMIDA Peruana
       if( selection === "4" && cookType ==='Peruana') {
          $('.modal').modal();
        //que aparesca el titulo
        $('#sectionPeru').removeClass("hide");
      restaurantPeru.append( 
        '<div class="col s4 center">' +
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal'+ [i] + '">' +
         '<h5 class="amber-text"> ' + nameRest +'</h5>' +
         '</div>' +

         //arreglar el Modal
         
        ' <div id="modal' + [i] + '" class="modal ">' +
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
      mouseH();
      //Ocultamos las otras secciones
          $('#restaurantHere').hide();
          $( '#restaurantOriental').hide();
          $( '#restaurantChile').hide();
          $( '#restaurantEropea').hide();
          $( '#restaurantPeru').show();
          $('.modal').modal();
      };



      if( selection === "5" ) {
          $('#restaurantHere').show();
          $( '#restaurantOriental').hide();
          $( '#restaurantChile').hide();
          $( '#restaurantEropea').hide();
          $( '#restaurantPeru').hide();
        allrestaurants();
        $('.modal').modal();
      }


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

});

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
function allrestaurants(){
   $('.modal').modal();

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
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal'+ [i] + '">' +
         '<h5 class="amber-text"> ' + nameRest +'</h5>' +
         '</div>' +

         //arreglar el Modal
         
        ' <div id="modal' + [i] + '" class="modal ">' +
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
    mouseH();

    }
  };


  function mouseH(){
    $('.hola').mouseover(function () {
     $(this).fadeIn(1000,"swing");
      //parent(alert('aqui va el Hover')).append(

        '<div class="col s4 center hola">' +
        ' <img src="'+ photo + '" alt="" class="waves-effect waves-light  modal-trigger" href="#modal1">' +
         '<h5 class="amber-text"> hover' + nameRest +'</h5>' +
         '</div>' 
      
  });

   /* $('.contenedor').mouseover(function () {
      $('.sailor-overlay').show();
  }).mouseout(function () {
      $('.sailor-overlay').hide();
  }); */
};


