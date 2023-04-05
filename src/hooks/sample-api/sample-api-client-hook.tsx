import axios, { AxiosInstance } from 'axios';
import { createContext, MutableRefObject, useContext, useRef, PropsWithChildren } from 'react';
import { ValuesResourceSampleApiClientProvider } from './values-context.hook';

interface SampleApiClientContextDTO {
  sampleApiHttpClientRef: MutableRefObject<AxiosInstance>;
}

const SampleApiClientContext = createContext<SampleApiClientContextDTO>(
  {} as SampleApiClientContextDTO,
);

const SampleApiClientProvider = ({ children }:PropsWithChildren) => {
  const sampleApiHttpClientRef = useRef(
    axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_SAMPLE_API_URL || 'http://localhost:3000/api',
    }),
  );
  return (
    <SampleApiClientContext.Provider value={{ sampleApiHttpClientRef }}>
      <ValuesResourceSampleApiClientProvider>
        {children}
      </ValuesResourceSampleApiClientProvider>
    </SampleApiClientContext.Provider>
  );
};

const useSampleApiClient = () => {
  const context = useContext(SampleApiClientContext);
  return context;
};

export { SampleApiClientProvider, useSampleApiClient };
