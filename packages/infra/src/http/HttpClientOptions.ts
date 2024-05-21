import { Type } from "@tsed/core"
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

export interface HttpClientOptions<Data = unknown> extends Omit<AxiosRequestConfig<Data>, "env"> {
  noCache?: boolean
  type?: Type<unknown>
  collectionType?: Type<unknown>
  useAlias?: boolean
  additionalProperties?: boolean
  withHeaders?: boolean
  groups?: string[]
  pathParams?: Record<string, unknown>
}

export interface HttpRequestConfig<Data = unknown> extends HttpClientOptions<Data> {
  startTime: number
  response: AxiosResponse
}

export interface HttpRequestErrorConfig<Data = unknown> extends Omit<HttpRequestConfig<Data>, "response"> {
  response?: AxiosResponse
  error: AxiosError
}
