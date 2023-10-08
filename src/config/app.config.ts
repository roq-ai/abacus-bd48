interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: [],
  tenantRoles: ['School Owner', 'School Administrator', 'Teacher', 'Staff', 'Parent'],
  tenantName: 'School',
  applicationName: 'Abacus',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage school information',
    'Manage staff information',
    'Manage parent information',
    'Manage teacher information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8f3bced1-0a5d-4a7a-9359-86722503d816',
};
