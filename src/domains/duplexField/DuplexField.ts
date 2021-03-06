import { fieldsRegistry, IFieldInnerConfig } from '../field/registry'
import {
  inputFieldsRegistry,
  IFieldInputInnerConfig
} from '../inputField/registry'
import { IFieldOptions } from '../field/Field'

export { FieldError } from './error'

export function DuplexField(
  options?: {
    inputNullable?: boolean
  } & IFieldOptions
): PropertyDecorator {
  return (targetInstance: Object, fieldName: string) => {
    let isNullable = true
    let inputNullable = true
    if (options) {
      if (options.isNullable !== undefined) {
        isNullable = options.isNullable
      }
      if (options.inputNullable !== undefined) {
        inputNullable = options.inputNullable
      }
      delete options.isNullable
      delete options.inputNullable
    }

    const finalInputConfig: IFieldInputInnerConfig = {
      property: fieldName,
      name: fieldName,
      isNullable: inputNullable,
      ...options
    } as any

    const finalConfig: IFieldInnerConfig = {
      property: fieldName,
      name: fieldName,
      isNullable,
      ...options
    } as any
    fieldsRegistry.set(targetInstance.constructor, fieldName, finalConfig)

    inputFieldsRegistry.set(
      targetInstance.constructor,
      fieldName,
      finalInputConfig
    )
  }
}
