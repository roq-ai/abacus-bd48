import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  first_name: string;
  last_name: string;
  user_id: string;
  phone_number?: string;
  address?: string;
  birth_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  user_id?: string;
  phone_number?: string;
  address?: string;
}
