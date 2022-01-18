import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() saved = new EventEmitter();

  editingUser: User;

  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.editingUser = new User(this.user.id, 
      this.user.name, 
      this.user.email, 
      this.user.active);
    this.editing = true;
  }
  onSave() {
    this.user = this.editingUser;
    this.editing = false;
    this.saved.emit(this.user);
  }

  onCancel() {
    this.editing = false;
  }

}
