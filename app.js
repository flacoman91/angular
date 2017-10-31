(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Deez Nu44ts',
      price: 2,
      description: 'dees nuts in yo mouth',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'http://placehold.it/200x200',
          thumb: 'http://placehold.it/100x100',
        },
        {
          full: 'http://placehold.it/200x200',
          thumb: 'http://placehold.it/100x100',
        },
      ],
    },
    {
      name: 'Deez Nut2',
      price: 2.95,
      description: 'dees 22nuts in yo mouth',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'http://placehold.it/200x200',
          thumb: 'http://placehold.it/100x100',
        },
        {
          full: 'http://placehold.it/200x200',
          thumb: 'http://placehold.it/100x100',
        },
      ],
    },
  ];
})();