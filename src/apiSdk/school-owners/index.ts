import queryString from 'query-string';
import { SchoolOwnerInterface, SchoolOwnerGetQueryInterface } from 'interfaces/school-owner';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSchoolOwners = async (
  query?: SchoolOwnerGetQueryInterface,
): Promise<PaginatedInterface<SchoolOwnerInterface>> => {
  return fetcher('/api/school-owners', {}, query);
};

export const createSchoolOwner = async (schoolOwner: SchoolOwnerInterface) => {
  return fetcher('/api/school-owners', { method: 'POST', body: JSON.stringify(schoolOwner) });
};

export const updateSchoolOwnerById = async (id: string, schoolOwner: SchoolOwnerInterface) => {
  return fetcher(`/api/school-owners/${id}`, { method: 'PUT', body: JSON.stringify(schoolOwner) });
};

export const getSchoolOwnerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/school-owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSchoolOwnerById = async (id: string) => {
  return fetcher(`/api/school-owners/${id}`, { method: 'DELETE' });
};
