import queryString from 'query-string';
import { StaffInterface, StaffGetQueryInterface } from 'interfaces/staff';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStaff = async (query?: StaffGetQueryInterface): Promise<PaginatedInterface<StaffInterface>> => {
  return fetcher('/api/staff', {}, query);
};

export const createStaff = async (staff: StaffInterface) => {
  return fetcher('/api/staff', { method: 'POST', body: JSON.stringify(staff) });
};

export const updateStaffById = async (id: string, staff: StaffInterface) => {
  return fetcher(`/api/staff/${id}`, { method: 'PUT', body: JSON.stringify(staff) });
};

export const getStaffById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/staff/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteStaffById = async (id: string) => {
  return fetcher(`/api/staff/${id}`, { method: 'DELETE' });
};
