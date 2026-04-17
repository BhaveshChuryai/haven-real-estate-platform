import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LeadService } from '../../services/lead.service';
import { Lead } from '../../models/lead.model';

export type PropertyType = 'Land' | 'Commercial' | 'Residential';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit, OnDestroy {

  activeTab: PropertyType = 'Land';
  tabs: PropertyType[] = ['Land', 'Commercial', 'Residential'];

  landForm!: FormGroup;
  commercialForm!: FormGroup;
  residentialForm!: FormGroup;

  submitted = false;
  successMessage = '';
  showSuccess = false;

  leads: Lead[] = [];
  private leadSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService
  ) {}

  ngOnInit(): void {
    this.buildForms();
    this.leadSub = this.leadService.leads$.subscribe(leads => {
      this.leads = leads;
    });
  }

  ngOnDestroy(): void {
    this.leadSub?.unsubscribe();
  }

  buildForms(): void {
    this.landForm = this.fb.group({
      name:         ['', [Validators.required, Validators.minLength(2)]],
      phone:        ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      acresRequired:['', Validators.required],
      budget:       ['', Validators.required],
      location:     ['', Validators.required],
      purpose:      ['', Validators.required],
      message:      ['']
    });

    this.commercialForm = this.fb.group({
      name:        ['', [Validators.required, Validators.minLength(2)]],
      phone:       ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      propertyType:['', Validators.required],
      budget:      ['', Validators.required],
      location:    ['', Validators.required],
      businessType:['', Validators.required],
      message:     ['']
    });

    this.residentialForm = this.fb.group({
      name:         ['', [Validators.required, Validators.minLength(2)]],
      phone:        ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      configuration:['', Validators.required],
      budget:       ['', Validators.required],
      location:     ['', Validators.required],
      purpose:      ['', Validators.required],
      message:      ['']
    });
  }

  get activeForm(): FormGroup {
    if (this.activeTab === 'Land')        return this.landForm;
    if (this.activeTab === 'Commercial')  return this.commercialForm;
    return this.residentialForm;
  }

  switchTab(tab: PropertyType): void {
    this.activeTab = tab;
    this.submitted = false;
    this.showSuccess = false;
  }

  isInvalid(form: FormGroup, field: string): boolean {
    const ctrl = form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted));
  }

  getError(form: FormGroup, field: string): string {
    const ctrl = form.get(field);
    if (!ctrl || !ctrl.errors) return '';
    if (ctrl.errors['required'])   return 'This field is required';
    if (ctrl.errors['minlength'])  return 'Too short';
    if (ctrl.errors['pattern'])    return 'Enter a valid 10-digit number';
    return 'Invalid value';
  }

  onSubmit(): void {
    this.submitted = true;
    const form = this.activeForm;

    if (form.invalid) return;

    const v = form.value;
    const leadData: Omit<Lead, 'id' | 'submittedAt'> = {
      type:    this.activeTab,
      name:    v.name,
      phone:   v.phone,
      budget:  v.budget,
      location:v.location,
      message: v.message || '',
      ...(this.activeTab === 'Land'        && { acresRequired: v.acresRequired, purpose: v.purpose }),
      ...(this.activeTab === 'Commercial'  && { propertyType: v.propertyType, businessType: v.businessType }),
      ...(this.activeTab === 'Residential' && { configuration: v.configuration, purpose: v.purpose })
    };

    this.leadService.submitLead(leadData).subscribe(() => {
      this.showSuccess = true;
      this.submitted = false;
      form.reset();
      setTimeout(() => this.showSuccess = false, 5000);
    });
  }
}
