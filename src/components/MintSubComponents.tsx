import { mintMethods } from '@/constants/mintMethods';
import {
  MintMethod,
  MintSubComponentName,
  MintSubComponentPropsMap,
  ValidDateInput,
} from '@/types';
import React, { useContext } from 'react';
import { MintContext } from './Mint';

type MintSubComponents = {
  [Key in MintSubComponentName]: React.FC<MintSubComponentProps<Key>>;
};

export type MintSubComponentProps<T extends MintSubComponentName> = {
  value?: ValidDateInput;
} & (T extends keyof MintSubComponentPropsMap
  ? MintSubComponentPropsMap[T]
  : {});

const createMintSubcomponent = (method: MintMethod) => {
  const { displayName, method: dateMethod, params } = method;

  const Component = <T extends MintSubComponentName>({
    value,
    ...rest
  }: MintSubComponentProps<T>) => {
    const context = useContext(MintContext);
    const effectiveDate = context
      ? context.date
      : value
        ? typeof value === 'string' || typeof value === 'number'
          ? new Date(value)
          : value
        : null;

    if (!effectiveDate || isNaN(effectiveDate.getTime())) {
      throw new Error(
        `<Mint.${displayName}> requires a valid date prop or must be used within a <Mint> component.`
      );
    }

    const args = params
      ? params.map((param) => rest[param as keyof typeof rest])
      : [];

    return <>{dateMethod(effectiveDate, ...(args || []))}</>;
  };

  Component.displayName = `Mint.${displayName}`;

  return Component;
};

export const generatedSubcomponents = mintMethods.reduce((acc, method) => {
  acc[method.displayName] = createMintSubcomponent(method);
  return acc;
}, {} as MintSubComponents);
