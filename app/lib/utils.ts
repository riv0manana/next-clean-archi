import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { AuthenticationError } from "@/core/domain/errors/auth.error";
import { BadParamsException } from "@/core/domain/errors/common.error";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mapActionResponse = <T>(value: T): ActionResponse<T> => [, JSON.parse(JSON.stringify(value))];

export const mapActionError = (error: ActionStatus | Error): ActionResponse<undefined> => [error];

export const handleActionError = (err: Error) => {
  if (err instanceof AuthenticationError) {
    return mapActionError({ message: err.message })
  } else if (err instanceof BadParamsException) {
    return mapActionError({ message: err.message, code: 400 })
  }
  return mapActionError({ message: 'unkown_server_error', code: 500 });
}