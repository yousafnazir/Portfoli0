import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup;
  msgSent: boolean = false;
  date: any;
  time: any;
  location: any;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      Name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      Email: [null, [Validators.required, Validators.email]],
      Message: [null, Validators.required]
    });
  }
  ngOnInit() {
  }
  submit() {
    const formData = new FormData();
    formData.append('Name', this.form.value.Name);
    formData.append('Email', this.form.value.Email);
    formData.append('Message', this.form.value.Message);
    formData.append('Date', this.date);
    formData.append('Time', this.time);
    formData.append('Location', this.location);
    console.log(formData);
  }
}
