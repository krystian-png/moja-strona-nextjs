import * as React from "react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"

const Form = FormProvider

const FormFieldContext = React.createContext<{ name: string } | null>(null)

export type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = ControllerProps<
  TFieldValues,
  TName
>

export function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: FormFieldProps<TFieldValues, TName>
) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const FormItemContext = React.createContext<{ id: string } | null>(null)

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(function FormItem(
  { className, ...props },
  ref
) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(function FormLabel(
  { className, ...props },
  ref
) {
  const { name } = useFormField()

  return <label ref={ref} className={cn("text-sm font-medium", className)} htmlFor={name} {...props} />
})

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(function FormControl(
  { className, children, ...props },
  ref
) {
  const { id, name } = useFormField()

  const renderedChild = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement, {
        id: (children as React.ReactElement).props.id ?? name,
      })
    : children

  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props} data-slot="form-control" data-form-item-id={id}>
      {renderedChild}
    </div>
  )
})

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(function FormMessage(
  { className, children, ...props },
  ref
) {
  const { error } = useFormField()
  const body = error ? error.message : children

  if (!body) {
    return null
  }

  return (
    <p ref={ref} className={cn("text-xs text-amber-200", className)} role="alert" {...props}>
      {body}
    </p>
  )
})

function useFormField() {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const formContext = useFormContext()

  const fieldState = fieldContext
    ? formContext.getFieldState(fieldContext.name, formContext.formState)
    : { error: undefined }

  const name = fieldContext?.name ?? ""
  const id = itemContext?.id ?? name

  return {
    name,
    id,
    error: fieldState.error,
  }
}

export { Form }
