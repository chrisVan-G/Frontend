let compraUno = {
  zapatos: 100,
  impuesto: 1.2,

  precioTotal: function () {
    var calculo = this.zapatos * this.impuesto;
    console.log('Precio total ', calculo);
  },
};
compraUno.precioTotal();

let compraDos = {
    zapatos: 50,
    impuesto: 1.2,
  
    precioTotal: function () {
      var calculo = this.zapatos * this.impuesto;
      console.log('Precio total ', calculo);
    },
  };
  compraDos.precioTotal();
  