import { Component, signal } from '@angular/core';
import { MenuItems } from './menulist';
export type MenuItem={
  icon:string;
  label:string;
  routel:string;
}
@Component({
  selector: 'app-custom-sidenav',
  
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent {
    mlist=MenuItems;

}
