import { cva } from "class-variance-authority"

export const pageShellVariants = cva("flex min-h-full flex-1 flex-col font-sans", {
  variants: {
    tone: {
      muted: "items-center justify-center bg-muted",
      default: "bg-background",
    },
  },
  defaultVariants: {
    tone: "muted",
  },
})

export const pageContentVariants = cva("flex flex-1 w-full flex-col", {
  variants: {
    width: {
      narrow:
        "max-w-3xl items-center justify-between gap-8 px-16 py-32 sm:items-start",
      full: "gap-6 p-6",
    },
    surface: {
      card: "bg-card text-card-foreground",
      transparent: "",
    },
  },
  defaultVariants: {
    width: "narrow",
    surface: "card",
  },
})
