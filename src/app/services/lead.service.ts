import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, catchError } from 'rxjs';
import { Lead } from '../models/lead.model';

@Injectable({ providedIn: 'root' })
export class LeadService {
  private leads: Lead[] = [];
  private leadsSubject = new BehaviorSubject<Lead[]>([]);
  leads$: Observable<Lead[]> = this.leadsSubject.asObservable();

  private apiUrl = 'https://api.havengroup.in/leads';

  constructor(private http: HttpClient) {}

  submitLead(lead: Omit<Lead, 'id' | 'submittedAt'>): Observable<Lead> {
    const newLead: Lead = {
      ...lead,
      id: this.generateId(),
      submittedAt: new Date().toLocaleString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    };
    this.leads.unshift(newLead);
    this.leadsSubject.next([...this.leads]);
    this.http.post<Lead>(this.apiUrl, newLead)
      .pipe(catchError(() => of(newLead)))
      .subscribe();
    return of(newLead);
  }

  getLeads(): Observable<Lead[]> { return this.leads$; }
  getLeadCount(): number { return this.leads.length; }

  private generateId(): string {
    return 'HG-' + Date.now().toString(36).toUpperCase();
  }
}
