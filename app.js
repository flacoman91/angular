(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    }
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
      reviews: [
        {
          stars: 5,
          body: 'hfdsafsadfdsa00',
          author: 'dees@nutz.com',
        },
        {
          stars: 1,
          body: 'hfdsafsadfdsa00',
          author: 'dees@nutz.com',
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
      reviews: [
        {
          stars: 5,
          body: 'hfdsafsadfdsa00',
          author: 'dees@nutz.com',
        },
        {
          stars: 1,
          body: 'hfdsafsadfdsa00',
          author: 'dees@nutz.com',
        },
      ],
    },
  ];
})();