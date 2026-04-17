export interface Lead {
  id: string;
  type: 'Land' | 'Commercial' | 'Residential';
  name: string;
  phone: string;
  budget: string;
  location: string;
  purpose?: string;
  // Land specific
  acresRequired?: string;
  // Commercial specific
  propertyType?: string;
  businessType?: string;
  // Residential specific
  configuration?: string;
  message?: string;
  submittedAt: string;
}
