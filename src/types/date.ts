export type ValidDateInput = ConstructorParameters<DateConstructor>[0];

export type AllowedDateMethodKeys = keyof Pick<
  InstanceType<DateConstructor>,
  | "getDate"
  | "getDay"
  | "getFullYear"
  | "getHours"
  | "getMilliseconds"
  | "getMinutes"
  | "getMonth"
  | "getSeconds"
  | "getTime"
  | "getTimezoneOffset"
  | "getUTCDate"
  | "getUTCDay"
  | "getUTCFullYear"
  | "getUTCHours"
  | "getUTCMilliseconds"
  | "getUTCMinutes"
  | "getUTCMonth"
  | "getUTCSeconds"
  | "toDateString"
  | "toISOString"
  | "toLocaleDateString"
  | "toLocaleString"
  | "toLocaleTimeString"
  | "toString"
  | "toTimeString"
  | "toUTCString"
>;

export type DateMethodParameters<T extends AllowedDateMethodKeys> = Parameters<
  InstanceType<DateConstructor>[T]
>;

export type DateMethodProps<T extends AllowedDateMethodKeys> = {
  getDate: Record<string, never>;
  getDay: Record<string, never>;
  getFullYear: Record<string, never>;
  getHours: Record<string, never>;
  getMilliseconds: Record<string, never>;
  getMinutes: Record<string, never>;
  getMonth: Record<string, never>;
  getSeconds: Record<string, never>;
  getTime: Record<string, never>;
  getTimezoneOffset: Record<string, never>;
  getUTCDate: Record<string, never>;
  getUTCDay: Record<string, never>;
  getUTCFullYear: Record<string, never>;
  getUTCHours: Record<string, never>;
  getUTCMilliseconds: Record<string, never>;
  getUTCMinutes: Record<string, never>;
  getUTCMonth: Record<string, never>;
  getUTCSeconds: Record<string, never>;
  toDateString: Record<string, never>;
  toISOString: Record<string, never>;
  toLocaleDateString: {
    locales?: Intl.LocalesArgument;
    options?: Intl.DateTimeFormatOptions | undefined;
  };
  toLocaleString: {
    locales?: Intl.LocalesArgument;
    options?: Intl.DateTimeFormatOptions | undefined;
  };
  toLocaleTimeString: {
    locales?: Intl.LocalesArgument;
    options?: Intl.DateTimeFormatOptions | undefined;
  };
  toString: Record<string, never>;
  toTimeString: Record<string, never>;
  toUTCString: Record<string, never>;
}[T];
