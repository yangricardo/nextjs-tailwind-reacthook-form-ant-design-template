import {
  CreateValueDTO,
  UpdateValueDTO,
  ValueDTO,
} from '@/backend/modules/value/ValueDTO';
import { createContext, useCallback, useContext, useState, PropsWithChildren } from 'react';
import { useSampleApiClient } from './sample-api-client-hook';

interface ValuesResourceSampleApiClientContextDTO {
  values: ValueDTO[];
  currentValue?: ValueDTO;
  getValues: () => Promise<ValueDTO[] | undefined>;
  createValue: (data: CreateValueDTO) => Promise<ValueDTO>;
  updateValue: (id: number, data: UpdateValueDTO) => Promise<ValueDTO>;
  deleteValue: (id: number) => Promise<void>;
  getValueById: (id: number) => Promise<ValueDTO>;
}

const ValuesResourceSampleApiClientContext =
  createContext<ValuesResourceSampleApiClientContextDTO>(
    {} as ValuesResourceSampleApiClientContextDTO,
  );

const ValuesResourceSampleApiClientProvider = ({ children }:PropsWithChildren) => {
  const [values, setValues] = useState<ValueDTO[]>([]);
  const [currentValue, setCurrentValue] = useState<ValueDTO>();

  const { sampleApiHttpClientRef } = useSampleApiClient();

  const getValues = useCallback(async () => {
    try {
      const response = await sampleApiHttpClientRef.current.get<ValueDTO[]>(
        '/values',
      );
      setValues(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [sampleApiHttpClientRef]);

  const getValueById = useCallback(
    async (id: number) => {
      try {
        const response = await sampleApiHttpClientRef.current.get<ValueDTO>(
          `/values/${id}`,
        );
        setCurrentValue(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [sampleApiHttpClientRef],
  );

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
        values,
        getValues,
        createValue,
        updateValue,
        deleteValue,
        getValueById,
        currentValue,
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
