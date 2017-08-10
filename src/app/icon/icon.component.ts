import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
bgColor: string;
iconSize: string;
iconName: string;
  constructor() { }
    @Input() size: string; // small/large
    // @Input() backgroundColor: string;
    @Input() icon: string;
  ngOnInit() {
    //   this.bgColor=this.backgroundColor;
      this.iconSize=this.size;
      this.iconName=this.icon;

      console.log(this.iconName+'-'+this.iconSize);
  }

}
