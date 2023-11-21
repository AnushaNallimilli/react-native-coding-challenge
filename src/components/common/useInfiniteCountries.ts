import {useQuery} from 'react-query';

export type Country = Readonly<{
  name: {
    common: string;
    official: string;
  };

  languages: object[];
  flags: {
    png: string;
  };
  status: string;
  ccn3: string;
  cca2: string;
  capital: string[];
  population: number;
}>;

export const useCountryData = () => {
  return useQuery<Country[]>('countries', async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  });
};
