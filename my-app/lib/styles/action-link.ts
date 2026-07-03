import { cva } from "class-variance-authority"

export const actionLinkVariants = cva(
  "inline-flex w-full items-center justify-center gap-2 rounded-full font-medium transition-colors md:w-[158px]",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:bg-foreground/80",
        secondary:
          "border border-border bg-background hover:border-transparent hover:bg-muted",
      },
      size: {
        default: "h-12 px-5 text-base",
        sm: "h-8 px-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)
