import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a13-childComponent-fromTypescript';

  /**
   * <app-child-component #childComponent1>
   * <app-child-component #childComponent2>
   *
   * Với Directive cũng làm tương tự như Component đều sử dụng ClassName cả
   */
  @ViewChild('childComponent1') component1: ChildComponent;
  @ViewChild('childComponent2') component2: ChildComponent;

  countClick1() {
    this.component1.countClick();
  }

  countClick2() {
    this.component2.countClick();
  }

  //cách 3 này đơn giản nhất
  countClick3(component: ChildComponent) {
    component.countClick();
  }
}
