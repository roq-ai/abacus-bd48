const mapping: Record<string, string> = {
  parents: 'parent',
  schools: 'school',
  'school-owners': 'school_owner',
  staff: 'staff',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
