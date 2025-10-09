import * as React from "react"

import { cn } from "@/lib/utils"

interface SelectContextValue {
  triggerProps?: SelectTriggerProps
  placeholder?: string
  items: Array<{ value: string; label: React.ReactNode }>
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

export interface SelectProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  name?: string
  disabled?: boolean
}

export function Select({
  value: controlledValue,
  defaultValue = "",
  onValueChange,
  children,
  disabled,
}: SelectProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const contextRef = React.useRef<SelectContextValue>({ items: [] })

  contextRef.current = { items: [] }

  const elements = React.Children.toArray(children)

  elements.forEach((child) => {
    if (!React.isValidElement(child)) return
    if (child.type === SelectTrigger) {
      contextRef.current.triggerProps = child.props
      React.Children.forEach(child.props.children, (triggerChild) => {
        if (!React.isValidElement(triggerChild)) return
        if (triggerChild.type === SelectValue) {
          contextRef.current.placeholder = triggerChild.props.placeholder
        }
      })
    }
    if (child.type === SelectContent) {
      React.Children.forEach(child.props.children, (contentChild) => {
        if (!React.isValidElement(contentChild)) return
        if (contentChild.type === SelectItem) {
          contextRef.current.items.push({
            value: contentChild.props.value,
            label: contentChild.props.children,
          })
        }
      })
    }
  })

  const currentValue = controlledValue ?? uncontrolledValue ?? ""

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue)
    }
    onValueChange?.(newValue)
  }

  const triggerClassName = contextRef.current.triggerProps?.className
  const placeholder = contextRef.current.placeholder ?? "Wybierz opcję"

  const hasPlaceholder = contextRef.current.items.every((item) => item.value !== "")

  return (
    <SelectContext.Provider value={contextRef.current}>
      <select
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          "flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
          triggerClassName
        )}
      >
        {hasPlaceholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {contextRef.current.items.map((item) => (
          <option key={item.value} value={item.value} className="text-slate-900">
            {item.label}
          </option>
        ))}
      </select>
    </SelectContext.Provider>
  )
}

export interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SelectTrigger({ className, children }: SelectTriggerProps) {
  return <div className={className}>{children}</div>
}

SelectTrigger.displayName = "SelectTrigger"

export interface SelectValueProps {
  placeholder?: string
}

export function SelectValue(_props: SelectValueProps) {
  return null
}

SelectValue.displayName = "SelectValue"

export interface SelectContentProps {
  children: React.ReactNode
}

export function SelectContent({ children }: SelectContentProps) {
  return <>{children}</>
}

SelectContent.displayName = "SelectContent"

export interface SelectItemProps {
  value: string
  children: React.ReactNode
}

export function SelectItem(_props: SelectItemProps) {
  return null
}

SelectItem.displayName = "SelectItem"
