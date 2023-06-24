import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from '../../services/product.service';
// import { Product } from '../../Models/Product';
import { WishlistService } from './../../../wishlist/services/wishlist.service';
import { CommentsService } from 'src/app/comments/services/comments.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent {
  id!: any;
  UserId: any = '';
  loading: boolean = false;
  AllRates: any = [];
  allProducts: any[] = [];
  totalRating: any = [];
  reviews: any = [];
  productData: any = {
    Brand: {
      Id: 1507,
      Name: 'Magnetic Poetry',
    },
    Id: '1935305441',
    VoteCount: 5,
    DateAdded: '2012-01-06T12:25:44',
    VoteAverage: 0.0,
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
    Title: '',
    Description: '',
    Price: 0,
    Discount: 0.0,
    Features:
      "<b>The Magnetic Poetry Story</b><br><br>Dave Kapell, founder of Magnetic Poetry, was suffering from writer's block while trying to compose song lyrics. To overcome this problem, he wrote down interesting words on pieces of paper and rearranged them, looking for inspiration. What he hadn't figured into this experiment was his allergies. One good sneeze and any progress was sent flying across the room. Dave decided to glue the words to pieces of magnets and stick them to a pizza tin. Then he got hungry and the now magnetized words made their way to the refrigerator door. Before too long, Dave wasn't the only one rearranging his would-be song lyrics. When friends came over, Dave noticed they started to move the magnets around, amusing themselves by writing the first magnetic poems. <br><br> After seeing his friends having fun, Dave thought he might be able to sell his word kits at a local craft fair. He made up 100 kits and set up shop at Calhoun Square, a mall in the Uptown area of Minneapolis. All 100 kits were gone after 3 hours. That night, he recruited as many friends as pizza and beer could draw and made up more kits--all of which sold as rapidly the next day. <br><br> From these beginnings, Magnetic Poetry has now sold over three million word kits, over one billion word tiles--growing from the Original Kit to a kid's line of kits, to foreign language kits, to Voice/theme kits.",
    HighResImageURLs: '',
    Quantity: 0,
  };
  amount: number = 1;
  item: any = {};
  wishitem: any = {};
  ourRate: any = { id: '', rate: 0 };
  finalRate: string = '';
  // rateItems: any = { id: '', oldrate: 0.0, newrate: 0.0, count: '' };
  // finalRate: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private service2: CartService,
    private service3: WishlistService,
    private service4: CommentsService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    console.log('normal' + this.id);
    console.log('services' + this.service.productId);
  }

  ngOnInit(): void {
    this.getSingleProduct();
    this.service.productId = this.id;
    // this.finalRate = JSON.parse(localStorage.getItem('rate')!);
    // console.log(this.finalRate);
  }
  getSingleProduct() {
    this.loading = true;
    this.service.getProductById(this.id).subscribe(
      (res: any) => {
        this.productData = res;
        this.service.disable = false;
        // if (res.Id === this.ourRate.id) {
        //   this.service.disable = true;
        // } else {
        //   this.service.disable = false;
        // }
        console.log(this.productData);
        this.loading = false;
        this.ourRate = JSON.parse(localStorage.getItem('rate')!);
        if (res.Id === this.ourRate.id) {
          this.service.disable = true;
        }
        this.ourRate.id = this.id;
        console.log(this.ourRate);
        this.finalRate = (
          (this.ourRate.rate + res.VoteAverage * res.VoteCount) /
          (res.VoteCount + 1)
        ).toFixed(2);
        console.log(this.finalRate);
        // this.ourRate.id = res.Id;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
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
    console.log(this.item);
    this.service2.addToChart(this.item);
  }
  addToWishlist() {
    this.wishitem = { item: this.productData, quantity: 1 };
    this.service3.addToWishList(this.wishitem);
  }
  // getReviews() {
  //   this.loading = true;
  //   this.service.getProductReviews(this.id).subscribe(
  //     (res: any) => {
  //       this.reviews = res;
  //       console.log(this.reviews);
  //       this.service.reviews = this.reviews;
  //       this.loading = false;
  //     },
  //     (error) => {
  //       alert(error.message);
  //       this.loading = false;
  //     }
  //   );
  // }
  loggedin() {
    return localStorage.getItem('login');
  }
}
