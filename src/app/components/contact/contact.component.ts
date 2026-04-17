import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService } from '../../services/lead.service';

interface ContactLine {
  text: string;
  href?: string;
}

interface ContactInfo {
  icon: string;
  label: string;
  lines: ContactLine[];
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  showSuccess = false;

  contactInfo: ContactInfo[] = [
    {
      icon: '✉️',
      label: 'Email Us',
      lines: [
        { text: 'anishachuryai01082020@gmail.com', href: 'mailto:anishachuryai01082020@gmail.com' },
        { text: 'ombhaveshchuryai@gmail.com', href: 'mailto:ombhaveshchuryai@gmail.com' }
      ]
    },
    {
      icon: '📞',
      label: 'Call Us',
      lines: [
        { text: 'Anisha Churyai — 9324392300', href: 'tel:9324392300' },
        { text: 'Bhavesh Churyai — 7499564957', href: 'tel:7499564957' }
      ]
    },
    {
      icon: '📍',
      label: 'Markets We Serve',
      lines: [
        { text: 'Khopoli · Pen · Karjat · Mumbai & Suburbs' }
      ]
    }
  ];

  constructor(private fb: FormBuilder, private leadService: LeadService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      interest: [''],
      date: [''],
      message: ['']
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted));
  }

  getError(field: string): string {
    const ctrl = this.contactForm.get(field);
    if (!ctrl?.errors) return '';
    if (ctrl.errors['required']) return 'This field is required';
    if (ctrl.errors['minlength']) return 'Too short';
    if (ctrl.errors['pattern']) return 'Enter a valid 10-digit number';
    return 'Invalid value';
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    const v = this.contactForm.value;

    this.leadService.submitLead({
      type: 'Residential',
      name: v.name,
      phone: v.phone,
      budget: 'N/A',
      location: 'Site Visit Request',
      purpose: v.interest || 'General Enquiry',
      message: `Site Visit on ${v.date || 'TBD'}. ${v.message}`
    }).subscribe(() => {
      this.showSuccess = true;
      this.submitted = false;
      this.contactForm.reset();
      setTimeout(() => this.showSuccess = false, 5000);
    });
  }
}
