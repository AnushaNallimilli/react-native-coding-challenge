// Navigation types file (e.g., NavigationTypes.ts)

import {Country} from '../components/common/useInfiniteCountries';

export type AddCountryScreenParams = {
  onCountryAdded: (newCountry: Country) => void;
};
