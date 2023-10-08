import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface SchoolOwnerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  user_id: string;
  school_id: string;
  phone_number?: string;
  address?: string;
  birth_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface SchoolOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  user_id?: string;
  school_id?: string;
  phone_number?: string;
  address?: string;
}
