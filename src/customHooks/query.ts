import { AxiosError, AxiosRequestConfig } from 'axios'
import {
  QueryKey,
  QueryObserverResult,
  useMutation as useRQMutation,
  UseMutationOptions,
  useQuery as useReactQuery,
  UseQueryOptions
} from 'react-query'

import api from 'services/api'

type TApiConfig = AxiosRequestConfig | string

function useConfig<TData, TConfig extends UseQueryOptions | UseMutationOptions>(
  apiConfig: TApiConfig,
  queryConfig?: TConfig
) {
  const headers: Record<string, string> = {}
  // the production server blocks requests with empty data
  const axiosConfig: AxiosRequestConfig = {
    headers,
    url: typeof apiConfig === 'string' ? apiConfig : undefined,
    data: {}
  }

  function requestFn(config?: any): Promise<TData> {
    // Convert data send BE to camelCase
    // if(headers['Content-Type'] !== 'multipart/form-data') {
    //   return api.request({ ...axiosConfig, ...camelizeKeys(config) })
    // }
    return api.request({ ...axiosConfig, ...config })
  }

  const reactQueryConfig = {
    ...queryConfig,
    onError(ex, variables, context) {
      const error = ex as AxiosError
      queryConfig?.onError?.(error, variables, context)
    }
  } as TConfig

  return {
    requestFn,
    reactQueryConfig
  }
}

export function useQuery<T>(
  name: QueryKey,
  apiConfig: TApiConfig,
  queryConfig?: UseQueryOptions
) {
  const { requestFn, reactQueryConfig } = useConfig<T, UseQueryOptions>(
    apiConfig,
    queryConfig
  )

  return useReactQuery(
    name,
    requestFn,
    reactQueryConfig
  ) as QueryObserverResult<T>
}

export function useMutation<T>(
  apiConfig: TApiConfig,
  mutationConfig?: UseMutationOptions
) {
  const { requestFn, reactQueryConfig } = useConfig<T, UseMutationOptions>(
    apiConfig,
    mutationConfig
  )

  return useRQMutation(requestFn, reactQueryConfig)
}
