import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a13-childComponent-fromTypescript';

  /**
   * 'childComponent1': là tên instant ở html của <<app-child-component>
   */
  @ViewChild('childComponent1') component1: ChildComponent;
  @ViewChild('childComponent2') component2: ChildComponent;

  countClick1(){
    this.component1.countClick();

  }

  countClick2(){
    this.component2.countClick();
  }


}
