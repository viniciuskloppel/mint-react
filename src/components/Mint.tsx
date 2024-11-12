import { AllowedDateMethodKeys, ValidDateInput } from '@/types';
import React, { createContext, ReactNode } from 'react';
import {
  generatedSubcomponents,
  MintSubComponentProps,
} from './MintSubComponents';

export interface MintContextProps {
  date: Date;
}

export const MintContext = createContext<MintContextProps | undefined>(
  undefined
);

interface MintProps {
  children: ReactNode;
  value?: ValidDateInput;
}

type MintType = React.FC<MintProps> & {
  [Key in Capitalize<AllowedDateMethodKeys>]: React.FC<
    MintSubComponentProps<Key>
  >;
};

const MintRoot: React.FC<MintProps> = ({ children, value }) => {
  const date = value
    ? typeof value === 'string' || typeof value === 'number'
      ? new Date(value)
      : value
    : new Date();

  if (isNaN(date.getTime())) {
    throw new Error('<Mint> component received an invalid date.');
  }

  return (
    <MintContext.Provider value={{ date }}>{children}</MintContext.Provider>
  );
};

MintRoot.displayName = 'MintRoot';

export const Mint = Object.assign(MintRoot, generatedSubcomponents) as MintType;
