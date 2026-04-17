export interface Project {
  id: number;
  name: string;
  type: string;
  location: string;
  status: 'Coming Soon' | 'Under Negotiation' | 'Pre-Launch' | 'Available';
  icon: string;
}

export interface LandPlot {
  id: string;
  area: string;
  status: 'Available' | 'Booked';
  x: number;
  y: number;
  width: number;
  height: number;
}
