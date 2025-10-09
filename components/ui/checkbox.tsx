import * as React from "react"

import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  onCheckedChange?: (checked: boolean) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, onCheckedChange, checked, defaultChecked, disabled, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(event) => onCheckedChange?.(event.target.checked)}
      className={cn(
        "h-4 w-4 rounded border border-white/40 bg-transparent text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 checked:bg-amber-600 checked:border-amber-600",
        className
      )}
      {...props}
    />
  )
})
