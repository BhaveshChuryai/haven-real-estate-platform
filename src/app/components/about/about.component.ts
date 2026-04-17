import { Component } from '@angular/core';

export interface Founder {
  initial: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  founders: Founder[] = [
    {
      initial: 'A',
      name: 'Anisha Churyai',
      title: 'Co-Founder & Director',
      bio: 'A professional model and entrepreneur bringing creativity, branding expertise, and strong leadership to HAVEN GROUP. With hands-on experience in sales, CRM operations, and project execution, she has built strong client relationships and driven successful project outcomes.',
      skills: ['Sales Management', 'CRM Operations', 'Project Execution', 'Team Leadership']
    },
    {
      initial: 'M',
      name: 'Madhu Churyai',
      title: 'Co-Founder',
      bio: 'A key pillar of the organization, bringing years of real estate knowledge and deep market understanding across the Khopoli–Mumbai corridor. Instrumental in building strong developer and landowner relationships.',
      skills: ['Market Intelligence', 'Land Acquisition', 'Developer Relations']
    },
    {
      initial: 'B',
      name: 'Bhavesh Churyai',
      title: 'Chief Executive Officer',
      bio: 'Driving HAVEN GROUP\'s vision to build a modern, technology-driven real estate platform. Focused on combining digital experience with real-world execution — ensuring transparency, efficiency, and client satisfaction across every project.',
      skills: ['Strategy', 'Project Onboarding', 'Broker Relations', 'Marketing']
    }
  ];

  stats = [
    { num: '2–4', label: 'Years Experience' },
    { num: '50+', label: 'Clients Served' },
    { num: '2',   label: 'Key Markets' }
  ];
}
