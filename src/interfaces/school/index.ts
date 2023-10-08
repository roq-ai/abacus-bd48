import { SchoolOwnerInterface } from 'interfaces/school-owner';
import { StaffInterface } from 'interfaces/staff';
import { TeacherInterface } from 'interfaces/teacher';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  address?: string;
  established_year?: number;
  school_type?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  school_owner?: SchoolOwnerInterface[];
  staff?: StaffInterface[];
  teacher?: TeacherInterface[];
  user?: UserInterface;
  _count?: {
    school_owner?: number;
    staff?: number;
    teacher?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  school_type?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
