import * as React from "react"

import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border border-white/20 bg-white/5 p-6 shadow-sm", className)}
      {...props}
    />
  )
})

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("mb-4", className)} {...props} />
})

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(function CardTitle(
  { className, ...props },
  ref
) {
  return <h3 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
})

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  function CardDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  }
)

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(function CardContent(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
})
