import {
  queryFieldsRegistry,
  mutationFieldsRegistry,
  schemaRootsRegistry
} from './registry'
import { SchemaFieldError } from './error'
import {
  compileFieldConfig,
  IFieldOptions,
  Field,
  IArrayFieldOptions
} from '../field/Field'

function validateRootSchemaField(targetInstance: Object, fieldName: string) {
  if (
    !(targetInstance as any)[fieldName] &&
    !targetInstance.constructor.prototype[fieldName]
  ) {
    throw new SchemaFieldError(
      targetInstance.constructor,
      fieldName,
      `Every root schema field must regular class function`
    )
  }
}

function requireSchemaRoot(target: Function, fieldName: string) {
  if (schemaRootsRegistry.has(target)) {
    return
  }
  throw new SchemaFieldError(
    target,
    fieldName,
    `Root field must be registered on class decorated with @SchemaRoot`
  )
}

function getFieldCompiler(target: Function, fieldName: string) {
  return () => {
    requireSchemaRoot(target, fieldName)
    return compileFieldConfig(target, fieldName)
  }
}

export enum rootFieldTypes {
  query = 'query',
  mutation = 'mutation'
}

// special fields
export function Query(
  options?: IFieldOptions | IArrayFieldOptions
): PropertyDecorator {
  return (targetInstance: Object, fieldName: string) => {
    validateRootSchemaField(targetInstance, fieldName)
    Field({ rootFieldType: rootFieldTypes.query, ...options })(
      targetInstance,
      fieldName
    )
    const fieldCompiler = getFieldCompiler(
      targetInstance.constructor,
      fieldName
    )
    queryFieldsRegistry.set(
      targetInstance.constructor,
      fieldName,
      fieldCompiler
    )
  }
}

export function Mutation(options?: IFieldOptions): PropertyDecorator {
  return (targetInstance: Object, fieldName: string) => {
    validateRootSchemaField(targetInstance, fieldName)
    Field({ rootFieldType: rootFieldTypes.mutation, ...options })(
      targetInstance,
      fieldName
    )
    const fieldCompiler = getFieldCompiler(
      targetInstance.constructor,
      fieldName
    )
    mutationFieldsRegistry.set(
      targetInstance.constructor,
      fieldName,
      fieldCompiler
    )
  }
}

export function QueryAndMutation(options?: IFieldOptions): PropertyDecorator {
  return (targetInstance: Object, fieldName: string) => {
    validateRootSchemaField(targetInstance, fieldName)
    Field({ rootFieldType: rootFieldTypes.query, ...options })(
      targetInstance,
      fieldName
    )
    const fieldCompiler = getFieldCompiler(
      targetInstance.constructor,
      fieldName
    )

    queryFieldsRegistry.set(
      targetInstance.constructor,
      fieldName,
      fieldCompiler
    )

    mutationFieldsRegistry.set(
      targetInstance.constructor,
      fieldName,
      fieldCompiler
    )
  }
}
