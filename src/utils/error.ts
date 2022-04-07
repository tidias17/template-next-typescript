const DEFAULT_MESSAGE = 'Ocorreu um erro! Tente novamente em alguns instantes.'

export function getErrorMessage(error: any) {
  if (typeof error === 'string' && error) return error
  if (!error || (error && !error.response)) return DEFAULT_MESSAGE

  return DEFAULT_MESSAGE
}
