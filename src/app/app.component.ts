import {AfterViewInit, Component} from '@angular/core';

declare var MyNumber: any;
declare var MyAlert: any;
declare var MyBook: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    console.log(MyNumber)
    MyAlert()
    MyBook()
  }

}
