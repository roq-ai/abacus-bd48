import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StaffInterface {
  id?: string;
  first_name: string;
  last_name: string;
  role: string;
  user_id: string;
  school_id: string;
  start_date?: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface StaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  user_id?: string;
  school_id?: string;
}
