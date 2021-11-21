import {
  CreateValueDTO,
  UpdateValueDTO,
  ValueDTO,
} from '@/backend/modules/value/ValueDTO';
import {
  createContext,
  MutableRefObject,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { useSampleApiClient } from './sample-api-client-hook';

interface ValuesResourceSampleApiClientContextDTO {
  valuesRef: MutableRefObject<ValueDTO[]>;
  getValues: () => Promise<ValueDTO[] | undefined>;
  createValue: (data: CreateValueDTO) => Promise<ValueDTO>;
  updateValue: (id: number, data: UpdateValueDTO) => Promise<ValueDTO>;
  deleteValue: (id: number) => Promise<void>;
}

const ValuesResourceSampleApiClientContext =
  createContext<ValuesResourceSampleApiClientContextDTO>(
    {} as ValuesResourceSampleApiClientContextDTO,
  );

const ValuesResourceSampleApiClientProvider: React.FC = ({ children }) => {
  const valuesRef = useRef<ValueDTO[]>([]);
  const { sampleApiHttpClientRef } = useSampleApiClient();

  const getValues = useCallback(async () => {
    try {
      const response = await sampleApiHttpClientRef.current.get<ValueDTO[]>(
        '/values',
      );
      valuesRef.current = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [sampleApiHttpClientRef]);

  const createValue = useCallback(
    async (data: CreateValueDTO) => {
      try {
        const response = await sampleApiHttpClientRef.current.post<ValueDTO>(
          '/values',
          data,
        );
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [sampleApiHttpClientRef],
  );

  const updateValue = useCallback(
    async (id: number, data: UpdateValueDTO) => {
      try {
        const response = await sampleApiHttpClientRef.current.patch<ValueDTO>(
          `/values/${id}`,
          data,
        );
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [sampleApiHttpClientRef],
  );

  const deleteValue = useCallback(
    async (id: number) => {
      try {
        await sampleApiHttpClientRef.current.delete<ValueDTO>(`/values/${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [sampleApiHttpClientRef],
  );

  return (
    <ValuesResourceSampleApiClientContext.Provider
      value={{
        valuesRef,
        getValues,
        createValue,
        updateValue,
        deleteValue,
      }}
    >
      {children}
    </ValuesResourceSampleApiClientContext.Provider>
  );
};

const useValuesResourceSampleApiClient = () => {
  const context = useContext(ValuesResourceSampleApiClientContext);
  return context;
};

export {
  ValuesResourceSampleApiClientProvider,
  useValuesResourceSampleApiClient,
};
