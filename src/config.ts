import { AllowedDateMethodKeys } from './types';

type MintMethodConfig = {
  displayName: string;
  methodKey: AllowedDateMethodKeys;
  params?: string[];
};

export const methodsConfig = [
  { methodKey: 'getDate', displayName: 'GetDate' },
  { methodKey: 'getDay', displayName: 'GetDay' },
  { methodKey: 'getFullYear', displayName: 'GetFullYear' },
  { methodKey: 'getHours', displayName: 'GetHours' },
  { methodKey: 'getMilliseconds', displayName: 'GetMilliseconds' },
  { methodKey: 'getMinutes', displayName: 'GetMinutes' },
  { methodKey: 'getMonth', displayName: 'GetMonth' },
  { methodKey: 'getSeconds', displayName: 'GetSeconds' },
  { methodKey: 'getTime', displayName: 'GetTime' },
  { methodKey: 'getTimezoneOffset', displayName: 'GetTimezoneOffset' },
  { methodKey: 'getUTCDate', displayName: 'GetUTCDate' },
  { methodKey: 'getUTCDay', displayName: 'GetUTCDay' },
  { methodKey: 'getUTCFullYear', displayName: 'GetUTCFullYear' },
  { methodKey: 'getUTCHours', displayName: 'GetUTCHours' },
  { methodKey: 'getUTCMilliseconds', displayName: 'GetUTCMilliseconds' },
  { methodKey: 'getUTCMinutes', displayName: 'GetUTCMinutes' },
  { methodKey: 'getUTCMonth', displayName: 'GetUTCMonth' },
  { methodKey: 'getUTCSeconds', displayName: 'GetUTCSeconds' },
  { methodKey: 'toDateString', displayName: 'ToDateString' },
  { methodKey: 'toISOString', displayName: 'ToISOString' },
  {
    methodKey: 'toLocaleDateString',
    displayName: 'ToLocaleDateString',
    params: ['locales', 'options'],
  },
  {
    methodKey: 'toLocaleString',
    displayName: 'ToLocaleString',
    params: ['locales', 'options'],
  },
  {
    methodKey: 'toLocaleTimeString',
    displayName: 'ToLocaleTimeString',
    params: ['locales', 'options'],
  },
  { methodKey: 'toString', displayName: 'ToString' },
  { methodKey: 'toTimeString', displayName: 'ToTimeString' },
  { methodKey: 'toUTCString', displayName: 'ToUTCString' },
] as const satisfies MintMethodConfig[];
