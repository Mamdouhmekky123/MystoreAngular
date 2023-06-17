import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {
@Input() data:any=[];
@Output() item=new EventEmitter;
addQuantity:boolean=false;
amount:number=1;
add(){
  this.item.emit({item :this.data , quantity:this.amount});
}
}