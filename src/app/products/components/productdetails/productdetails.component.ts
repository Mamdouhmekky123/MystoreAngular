import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from '../../services/product.service';
// import { Product } from '../../Models/Product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent {
  id!: any;
  AllRates: any = [];
  allProducts: any[] = [];
  productData: any = {
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
    Description: '<b>The Magnetic Poetry Story</b><br><br>Dave Kapell',
    Price: 847.16,
    Discount: 0.0,
    Features:
      "<b>The Magnetic Poetry Story</b><br><br>Dave Kapell, founder of Magnetic Poetry, was suffering from writer's block while trying to compose song lyrics. To overcome this problem, he wrote down interesting words on pieces of paper and rearranged them, looking for inspiration. What he hadn't figured into this experiment was his allergies. One good sneeze and any progress was sent flying across the room. Dave decided to glue the words to pieces of magnets and stick them to a pizza tin. Then he got hungry and the now magnetized words made their way to the refrigerator door. Before too long, Dave wasn't the only one rearranging his would-be song lyrics. When friends came over, Dave noticed they started to move the magnets around, amusing themselves by writing the first magnetic poems. <br><br> After seeing his friends having fun, Dave thought he might be able to sell his word kits at a local craft fair. He made up 100 kits and set up shop at Calhoun Square, a mall in the Uptown area of Minneapolis. All 100 kits were gone after 3 hours. That night, he recruited as many friends as pizza and beer could draw and made up more kits--all of which sold as rapidly the next day. <br><br> From these beginnings, Magnetic Poetry has now sold over three million word kits, over one billion word tiles--growing from the Original Kit to a kid's line of kits, to foreign language kits, to Voice/theme kits.",
    HighResImageURLs:
      'https://images-na.ssl-images-amazon.com/images/I/51lnzsFHOeL.jpg || https://images-na.ssl-images-amazon.com/images/I/51xhNkbp4oL.jpg || https://images-na.ssl-images-amazon.com/images/I/51ahE7gjZVL.jpg || https://images-na.ssl-images-amazon.com/images/I/515rxlEes7L.jpg || https://images-na.ssl-images-amazon.com/images/I/51ULN%2BMEb3L.jpg || https://images-na.ssl-images-amazon.com/images/I/516GtLRybCL.jpg || https://images-na.ssl-images-amazon.com/images/I/51OLY4139YL.jpg || https://images-na.ssl-images-amazon.com/images/I/51khmk%2B%2BomL.jpg || https://images-na.ssl-images-amazon.com/images/I/5103gFyD-3L.jpg || https://images-na.ssl-images-amazon.com/images/I/51c1zuIxwkL.jpg || https://images-na.ssl-images-amazon.com/images/I/51KxSsQpC1L.jpg || https://images-na.ssl-images-amazon.com/images/I/51hCPYYs3%2BL.jpg || https://images-na.ssl-images-amazon.com/images/I/51qlKUeLe8L.jpg || https://images-na.ssl-images-amazon.com/images/I/51pGJz4Zx2L.jpg || https://images-na.ssl-images-amazon.com/images/I/51l3ScWoIIL.jpg || https://images-na.ssl-images-amazon.com/images/I/518sRVtCbRL.jpg || https://images-na.ssl-images-amazon.com/images/I/512eyipo5tL.jpg || https://images-na.ssl-images-amazon.com/images/I/5173jP3pigL.jpg || https://images-na.ssl-images-amazon.com/images/I/51jwNC%2BJePL.jpg',
    Quantity: 8,
  };
  amount: number = 1;
  item: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private service2: CartService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getSingleProduct();
  }
  getSingleProduct() {
    this.service.getProductById(this.id).subscribe(
      (res: any) => {
        this.productData = res;
        console.log(this.productData);
      },
      (error) => {
        alert(error.message);
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
  /********* get rates***********/
  // getRateOfProduct(){
  //   this.service.getRateProductById(this.id).subscribe(
  //     (res: any) => {
  //       this.AllRates = res;
  //       console.log(this.AllRates);
  //     },
  //     (error) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // add prouct to the cart using  local storage
  addToChart() {
    this.item = { item: this.productData, quantity: this.amount };
    this.service2.addToChart(this.item);
  }
}
