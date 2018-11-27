import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onImageChange();
    this.changeImage();
  }

  onImageChange() {
    let firstchild, lastchild;
    const prevArrow  = document.querySelector('#bl-slider-prev');
    const nextArrow  = document.querySelector('#bl-slider-next');
    const images = document.querySelector('.bl-slider ul');

    document.addEventListener('click', () => {
      if (event.target === prevArrow) {
        lastchild = images.lastElementChild;
        images.insertAdjacentElement('afterbegin', lastchild);
      } else if (event.target === nextArrow) {
        firstchild = images.firstElementChild;
        images.insertAdjacentElement('beforeend', firstchild);
      }
    });
  }


  changeImage() {
      let firstchild, lastchild;
      const images = document.querySelector('.bl-slider ul');

      setInterval(function() {
        lastchild = images.lastElementChild;
        images.insertAdjacentElement('afterbegin', lastchild);
        firstchild = images.firstElementChild;
        images.insertAdjacentElement('beforeend', firstchild);
      }, 1000);

  }

}
