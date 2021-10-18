import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    '../../../assets/carousel/img01.jpg',
    '../../../assets/carousel/img02.jpg',
    '../../../assets/carousel/img03.jpg',
    '../../../assets/carousel/img04.jpg',
    '../../../assets/carousel/img05.jpg',
    '../../../assets/carousel/img06.jpg',
    '../../../assets/carousel/img07.jpg',
    '../../../assets/carousel/img08.jpg',
    '../../../assets/carousel/img09.jpg',
    '../../../assets/carousel/img10.jpg',
    '../../../assets/carousel/img11.jpg',
    '../../../assets/carousel/img12.jpg',
    '../../../assets/carousel/img13.jpg',
    '../../../assets/carousel/img14.jpg',
    '../../../assets/carousel/img15.jpg',
    '../../../assets/carousel/img16.jpg',
    '../../../assets/carousel/img17.jpg',
    '../../../assets/carousel/img18.jpg',
    '../../../assets/carousel/img19.jpg',
    '../../../assets/carousel/img20.jpg',
    '../../../assets/carousel/img21.jpg',
    '../../../assets/carousel/img22.jpg',
    '../../../assets/carousel/img23.jpg',
    '../../../assets/carousel/img24.jpg',
    '../../../assets/carousel/img25.jpg',
    '../../../assets/carousel/img26.jpg',
    '../../../assets/carousel/img27.jpg',
    '../../../assets/carousel/img28.jpg',
  ];
  
  slideID = 0;
  displaySlide = this.slides[this.slideID];

  setImage() {
    this.displaySlide = this.slides[this.slideID];
  }

  previousImage() {
    if (this.slideID === 0) {
      this.slideID = (this.slides.length - 1);
      this.setImage();
    } else {
      this.slideID -= 1;
      this.setImage();
    }
    console.log(this.slideID);
    console.log(this.displaySlide);
  }
  
  nextImage() {
    if (this.slideID === this.slides.length - 1) {
      this.slideID = 0;
      this.setImage();
    } else {
      this.slideID += 1;
      this.setImage();
    }
    console.log(this.slideID);
    console.log(this.displaySlide);
  }
}
