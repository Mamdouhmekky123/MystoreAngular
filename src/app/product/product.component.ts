import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ngOnInit() {
    this.filteredProducts = this.products;
  }
  products = [
    {
      Brand: {
        Id: 1507,
        Name: 'Magnetic Poetry',
      },
      Id: '1935305441',
      VoteCount: 5,
      DateAdded: '2012-01-06T12:25:44',
      VoteAverage: 3.8,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8469,
          Name: 'Kitchen & Dining',
        },
        {
          Id: 8470,
          Name: 'Kitchen Utensils & Gadgets',
        },
        {
          Id: 8471,
          Name: 'Kitchen Accessories',
        },
        {
          Id: 8472,
          Name: 'Refrigerator Magnets',
        },
      ],
      Title:
        'Magnetic Poetry - Little Box of Sin Kit - Words for Refrigerator - Write Poems and Letters on The Fridge - Made in The USA',
      Price: 847.16,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/51lnzsFHOeL.jpg || https://images-na.ssl-images-amazon.com/images/I/51xhNkbp4oL.jpg || https://images-na.ssl-images-amazon.com/images/I/51ahE7gjZVL.jpg || https://images-na.ssl-images-amazon.com/images/I/515rxlEes7L.jpg || https://images-na.ssl-images-amazon.com/images/I/51ULN%2BMEb3L.jpg || https://images-na.ssl-images-amazon.com/images/I/516GtLRybCL.jpg || https://images-na.ssl-images-amazon.com/images/I/51OLY4139YL.jpg || https://images-na.ssl-images-amazon.com/images/I/51khmk%2B%2BomL.jpg || https://images-na.ssl-images-amazon.com/images/I/5103gFyD-3L.jpg || https://images-na.ssl-images-amazon.com/images/I/51c1zuIxwkL.jpg || https://images-na.ssl-images-amazon.com/images/I/51KxSsQpC1L.jpg || https://images-na.ssl-images-amazon.com/images/I/51hCPYYs3%2BL.jpg || https://images-na.ssl-images-amazon.com/images/I/51qlKUeLe8L.jpg || https://images-na.ssl-images-amazon.com/images/I/51pGJz4Zx2L.jpg || https://images-na.ssl-images-amazon.com/images/I/51l3ScWoIIL.jpg || https://images-na.ssl-images-amazon.com/images/I/518sRVtCbRL.jpg || https://images-na.ssl-images-amazon.com/images/I/512eyipo5tL.jpg || https://images-na.ssl-images-amazon.com/images/I/5173jP3pigL.jpg || https://images-na.ssl-images-amazon.com/images/I/51jwNC%2BJePL.jpg',
      Quantity: 8,
    },
    {
      Brand: {
        Id: 1508,
        Name: 'Presto',
      },
      Id: 'B00002N601',
      VoteCount: 10,
      DateAdded: '2011-06-10T11:48:17',
      VoteAverage: 3.2,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8469,
          Name: 'Kitchen & Dining',
        },
        {
          Id: 8473,
          Name: 'Cookware',
        },
        {
          Id: 8474,
          Name: 'Pressure Cookers',
        },
      ],
      Title: 'Presto 01241 4-Quart Aluminum Pressure Cooker',
      Price: 869.24,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/41inNsQfMXL.jpg || https://images-na.ssl-images-amazon.com/images/I/417DAo13peL.jpg || https://images-na.ssl-images-amazon.com/images/I/41uP-EIWBjL.jpg || https://images-na.ssl-images-amazon.com/images/I/41qy3qV57EL.jpg',
      Quantity: 6,
    },
    {
      Brand: {
        Id: 1508,
        Name: 'Presto',
      },
      Id: 'B00002N602',
      VoteCount: 19,
      DateAdded: '2003-01-22T12:09:48',
      VoteAverage: 3.2105263158,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8469,
          Name: 'Kitchen & Dining',
        },
        {
          Id: 8473,
          Name: 'Cookware',
        },
        {
          Id: 8474,
          Name: 'Pressure Cookers',
        },
      ],
      Title: 'Presto 01341  4-Quart Stainless Steel Pressure Cooker',
      Price: 721.41,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/41gzXS9N6pL.jpg || https://images-na.ssl-images-amazon.com/images/I/41%2BVRYgOXyL.jpg || https://images-na.ssl-images-amazon.com/images/I/41bIomFGG8L.jpg || https://images-na.ssl-images-amazon.com/images/I/51jU1e38y7L.jpg || https://images-na.ssl-images-amazon.com/images/I/41qy3qV57EL.jpg',
      Quantity: 7,
    },
    {
      Brand: {
        Id: 1509,
        Name: 'Eureka',
      },
      Id: 'B00002N8CX',
      VoteCount: 27,
      DateAdded: '1994-12-27T03:14:30',
      VoteAverage: 3.3333333333,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8475,
          Name: 'Vacuums & Floor Care',
        },
        {
          Id: 8476,
          Name: 'Vacuums',
        },
        {
          Id: 8477,
          Name: 'Canister Vacuums',
        },
      ],
      Title: 'Eureka Mighty Mite 3670G Corded Canister Vacuum Cleaner, Yellow',
      Price: 526.93,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/41ZiW5T8XRL.jpg || https://images-na.ssl-images-amazon.com/images/I/5188m72PC7L.jpg || https://images-na.ssl-images-amazon.com/images/I/51kn2oCRHEL.jpg || https://images-na.ssl-images-amazon.com/images/I/61VPw6-4TIL.jpg || https://images-na.ssl-images-amazon.com/images/I/410b6djjnQL.jpg || https://images-na.ssl-images-amazon.com/images/I/413tb6veacL.jpg || https://images-na.ssl-images-amazon.com/images/I/41kTuRpmHwL.jpg || https://images-na.ssl-images-amazon.com/images/I/41iJ3%2B8l9-L.jpg || https://images-na.ssl-images-amazon.com/images/I/41jINs4ex3L.jpg',
      Quantity: 9,
    },
    {
      Brand: {
        Id: 1509,
        Name: 'Eureka',
      },
      Id: 'B00002N8CZ',
      VoteCount: 13,
      DateAdded: '1995-10-11T13:53:58',
      VoteAverage: 3.0,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8475,
          Name: 'Vacuums & Floor Care',
        },
        {
          Id: 8476,
          Name: 'Vacuums',
        },
      ],
      Title: 'Eureka Quick Up 2-in-1 Cordless w/Bonus Battery Pack, 96JZ',
      Price: 893.64,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/31Wy2gAODpL.jpg || https://images-na.ssl-images-amazon.com/images/I/31NMg5TWxTL.jpg || https://images-na.ssl-images-amazon.com/images/I/51zH09JrRTL.jpg || https://images-na.ssl-images-amazon.com/images/I/517MZnL4g8L.jpg || https://images-na.ssl-images-amazon.com/images/I/51xTGbMb6AL.jpg || https://images-na.ssl-images-amazon.com/images/I/51l4nyJSocL.jpg',
      Quantity: 6,
    },
    {
      Brand: {
        Id: 1510,
        Name: 'Lasko',
      },
      Id: 'B00002ND67',
      VoteCount: 3,
      DateAdded: '1997-09-02T02:40:08',
      VoteAverage: 3.3333333333,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8478,
          Name: 'Heating, Cooling & Air Quality',
        },
        {
          Id: 8479,
          Name: 'Household Fans',
        },
      ],
      Title: 'Lasko 3733 20&quot; Fan Box, Grey White',
      Price: 153.91,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/51dCAH8e6gL.jpg || https://images-na.ssl-images-amazon.com/images/I/41NX42nybdL.jpg || https://images-na.ssl-images-amazon.com/images/I/21ByhF1sMZL.jpg || https://images-na.ssl-images-amazon.com/images/I/61CopoUigFL.jpg',
      Quantity: 5,
    },
    {
      Brand: {
        Id: 1511,
        Name: 'Sokos',
      },
      Id: 'B00003CWDH',
      VoteCount: 3,
      DateAdded: '1997-12-09T23:34:33',
      VoteAverage: 4.0,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8478,
          Name: 'Heating, Cooling & Air Quality',
        },
        {
          Id: 8480,
          Name: 'Humidifiers & Accessories',
        },
        {
          Id: 8481,
          Name: 'Humidifiers',
        },
      ],
      Title:
        'Sokos Sunrise Alarm Clock, [2018 Upgraded] Wake Up Alarm Clock Wireless Charger 6 Nature Sounds, Alarm Clock Light Bedrooms, Kids, Heavy Sleepers (White)',
      Price: 380.1,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/51w4uixJLjL.jpg || https://images-na.ssl-images-amazon.com/images/I/51xyL8QLkRL.jpg || https://images-na.ssl-images-amazon.com/images/I/51E0HLTi8uL.jpg || https://images-na.ssl-images-amazon.com/images/I/51xuM9wlbIL.jpg || https://images-na.ssl-images-amazon.com/images/I/51z0moTSiOL.jpg || https://images-na.ssl-images-amazon.com/images/I/51pOtMqkMSL.jpg || https://images-na.ssl-images-amazon.com/images/I/41iA%2B5Kng0L.jpg || https://images-na.ssl-images-amazon.com/images/I/41iA%2B5Kng0L.jpg',
      Quantity: 8,
    },
    {
      Brand: {
        Id: 1512,
        Name: 'OXO',
      },
      Id: 'B00004OCIP',
      VoteCount: 26,
      DateAdded: '2001-05-30T21:01:04',
      VoteAverage: 4.0384615385,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8469,
          Name: 'Kitchen & Dining',
        },
        {
          Id: 8470,
          Name: 'Kitchen Utensils & Gadgets',
        },
        {
          Id: 8484,
          Name: 'Graters, Peelers & Slicers',
        },
        {
          Id: 8485,
          Name: 'Peelers',
        },
      ],
      Title: 'OXO Good Grips Swivel Peeler',
      Price: 218.44,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/51T3N6pAIPL.jpg || https://images-na.ssl-images-amazon.com/images/I/416hkoQSIyL.jpg || https://images-na.ssl-images-amazon.com/images/I/516Z48FF-qL.jpg || https://images-na.ssl-images-amazon.com/images/I/51eIY7-RUNL.jpg || https://images-na.ssl-images-amazon.com/images/I/31SULHC2CtL.jpg',
      Quantity: 7,
    },
    {
      Brand: {
        Id: 1512,
        Name: 'OXO',
      },
      Id: 'B00004OCIR',
      VoteCount: 4,
      DateAdded: '1998-02-27T00:29:44',
      VoteAverage: 4.25,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8469,
          Name: 'Kitchen & Dining',
        },
        {
          Id: 8470,
          Name: 'Kitchen Utensils & Gadgets',
        },
        {
          Id: 8484,
          Name: 'Graters, Peelers & Slicers',
        },
        {
          Id: 8493,
          Name: 'Graters',
        },
      ],
      Title: 'OXO 20581 Grater',
      Price: 895.71,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/41ADPD7WAWL.jpg || https://images-na.ssl-images-amazon.com/images/I/41REtNLVJvL.jpg || https://images-na.ssl-images-amazon.com/images/I/51cw07lzJpL.jpg || https://images-na.ssl-images-amazon.com/images/I/51ORZOO1OgL.jpg',
      Quantity: 7,
    },
    {
      Brand: {
        Id: 1512,
        Name: 'OXO',
      },
      Id: 'B00004OCIT',
      VoteCount: 5,
      DateAdded: '2005-03-09T17:19:40',
      VoteAverage: 4.0,
      ProductCategories: [
        {
          Id: 8468,
          Name: 'Home & Kitchen',
        },
        {
          Id: 8469,
          Name: 'Kitchen & Dining',
        },
        {
          Id: 8470,
          Name: 'Kitchen Utensils & Gadgets',
        },
        {
          Id: 8498,
          Name: 'Pasta & Pizza Tools',
        },
        {
          Id: 8499,
          Name: 'Pizza Cutters',
        },
      ],
      Title: 'OXO Good Grips Small Pizza Wheel and Cutter',
      Price: 343.41,
      Discount: 0.0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/31yKqm4sQLL.jpg || https://images-na.ssl-images-amazon.com/images/I/51TcVL0S65L.jpg || https://images-na.ssl-images-amazon.com/images/I/51%2B0lG74q4L.jpg || https://images-na.ssl-images-amazon.com/images/I/51qlfyinRkL.jpg || https://images-na.ssl-images-amazon.com/images/I/51KkAD5kqbL.jpg',
      Quantity: 8,
    },
  ];

  filteredProducts: any = [];

  getTotalNumberOfProducts() {
    return this.products.length;
  }
  getTotalNumberOfLowPriceProduct() {
    return this.products.filter((pro) => pro.Price < 400).length;
  }
  getTotalNumberOfHighPriceProduct() {
    return this.products.filter((pro) => pro.Price >= 400).length;
  }

  productCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string) {
    this.productCountRadioButton = data;
    // console.log(this.productCountRadioButton);
    if (this.productCountRadioButton === 'above400') {
      this.filteredProducts = this.products.filter((pro) => pro.Price >= 400);
    } else if (this.productCountRadioButton === 'below400') {
      this.filteredProducts = this.products.filter((pro) => pro.Price < 400);
    }
  }
}
