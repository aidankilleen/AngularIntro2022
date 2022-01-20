import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-page',
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css']
})
export class CarouselPageComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content)
      .result.then((message) => {
        //alert(`normal operation: ${message}`);
      }, (reason) => {
        //alert(`dismiss operation: ${reason}`);
      });
  }
}
