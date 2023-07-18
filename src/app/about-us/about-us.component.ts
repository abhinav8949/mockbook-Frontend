import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import emailjs from '@emailjs/browser';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  msgSent = false
  // to_name: 'MockBook-Team',

  public contactData = {
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  }

  constructor(private _email: EmailService, private toaster: NgToastService) { }

  ngOnInit(): void {
  }

  sendEmailFromJava() {
    this._email.sendEmailToTeam(this.contactData).subscribe((data) => {
      console.log(data);
      this.msgSent = true
      this.contactData.name = '',
        this.contactData.mobile = '',
        this.contactData.email = '',
        this.contactData.subject = '',
        this.contactData.message = ''
      this.toaster.success({ detail: "Success", summary: "Email sent successfully.", duration: 5000 })
    }, (err) => {
      this.toaster.error({ detail: "Error", summary: "Mail delivery failed...!", duration: 5000 })
      console.log(err);
      this.contactData.name = '',
        this.contactData.mobile = '',
        this.contactData.email = '',
        this.contactData.subject = '',
        this.contactData.message = ''
    })
  }

  // async sendEmailFromEmailJS() {
  //   emailjs.init('aOb-QoEMNRfavxu-p')
  //   let response = await emailjs.send("service_mkx045s", "template_5tdv4ee", {
  //     to_name: this.contactData.to_name,
  //     from_name: this.contactData.name,
  //     mobile: this.contactData.mobile,
  //     subject: this.contactData.subject,
  //     message: this.contactData.message,
  //     reply_to: this.contactData.email,
  //   });
  //   this.msgSent=true
  //   this.toaster.success({ detail: "Success", summary: "message sent successfully...", duration: 5000 })
  //   this.contactData.name = '',
  //     this.contactData.mobile = '',
  //     this.contactData.email = '',
  //     this.contactData.subject = '',
  //     this.contactData.message = ''
  // }



}
