export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
  profile: Profile;
}

export interface Profile {
  id: number;
  userId: number;
  name: string;
  phone: string;
}

export interface Package {
  id: number;
  name: string;
  data: string;
  duration: string;
  price: number;
  category: string;
  description: string;
}

export interface Advantage {
  image: string;
  title: string;
  description: string;
  callToAction: string;
}

export interface Transaction {
  id: number;
  customerId: string;
  packageId: string;
  customer: User;
  package: Package;
  date: Date;
  endDate: Date;
  status: string;
}
