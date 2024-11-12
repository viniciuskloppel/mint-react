import { AllowedDateMethodKeys } from './date';
import { assert, type Equals } from 'tsafe';

export interface MintMethod {
  displayName: string;
  method: (date: Date, ...args: any[]) => React.ReactNode;
  params?: string[];
}

export type MintSubComponentName = Capitalize<AllowedDateMethodKeys>;

export type MintSubComponentPropsMap = {
  GetDate: {};
  GetDay: {};
  GetFullYear: {};
  GetHours: {};
  GetMilliseconds: {};
  GetMinutes: {};
  GetMonth: {};
  GetSeconds: {};
  GetTime: {};
  GetTimezoneOffset: {};
  GetUTCDate: {};
  GetUTCDay: {};
  GetUTCFullYear: {};
  GetUTCHours: {};
  GetUTCMilliseconds: {};
  GetUTCMinutes: {};
  GetUTCMonth: {};
  GetUTCSeconds: {};
  ToDateString: {};
  ToISOString: {};
  ToLocaleDateString: {
    locales?: string | string[];
    options?: Intl.DateTimeFormatOptions;
  };
  ToLocaleString: {
    locales?: string | string[];
    options?: Intl.DateTimeFormatOptions;
  };
  ToLocaleTimeString: {
    locales?: string | string[];
    options?: Intl.DateTimeFormatOptions;
  };
  ToString: {};
  ToTimeString: {};
  ToUTCString: {};
};

assert<Equals<keyof MintSubComponentPropsMap, MintSubComponentName>>;
