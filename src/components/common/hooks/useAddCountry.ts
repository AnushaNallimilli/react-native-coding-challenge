import {create} from 'zustand';
import {Country} from '../useInfiniteCountries';

interface CountryHookState {
  localCountries: Country[];
  setLocalCountries: (countries: Country[]) => void;
}

export const useCountryHook = create<CountryHookState>(set => ({
  localCountries: [],
  setLocalCountries: countries => set({localCountries: countries}),
}));
