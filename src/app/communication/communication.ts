import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommunicationChild } from './communication-child/communication-child';
import { AttributeDirective } from '../attribute-directive/attribute-directive';
import { Home } from '../Directives/home';
import { AuditServices } from '../shared/Services/audit.services';

@Component({
  selector: 'app-communication',
  imports: [CommunicationChild],
  templateUrl: './communication.html',
  styleUrl: './communication.css',
})
export class Communication {
  // @ContentChild(CommunicationChild) child!: CommunicationChild;
  // ngAfterContentChecked(): void {
  //   //Called after every check of the component's or directive's content.
  //   //Add 'implements AfterContentChecked' to the class.
  //   console.log(this.child);
  // }
  // ngAfterContentInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   console.log(this.child);
  // }

  // @ViewChild(CommunicationChild) el!: CommunicationChild;
  // @ViewChildren(CommunicationChild) el!: QueryList<CommunicationChild>;

  // checkVal() {
  //   console.log(
  //     this.el.map((a) => {
  //       console.log(a);
  //       return a;
  //     }),
  //   );
  // }

  @ViewChildren(CommunicationChild, { read: ElementRef }) el!: QueryList<ElementRef>;

  checkVal() {
    // console.log(this.ad.audit('Done '));

    console.log(this.audit.audit('Done Successfully'));
    console.log(
      this.el.map((a) => {
        console.log(a);
        return a;
      }),
    );
  }

  // constructor(public ad: AuditServices) {}

  private audit = inject(AuditServices);
}
