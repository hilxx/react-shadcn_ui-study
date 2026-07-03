import { GuideMenubar } from "@/features/guide/components/GuideMenubar"
import { pageContentVariants, pageShellVariants } from "@/lib/styles/page-shell"
import { cn } from "@/lib/utils"
import styles from "./GuideView.module.css"

export function GuideView() {
  return (
    <div className={pageShellVariants({ tone: "muted" })}>
      <div
        className={pageContentVariants({
          width: "full",
          surface: "transparent",
        })}
      >
        <GuideMenubar />
        <h1 className={cn(styles.guideTitle)}>UI 가이드</h1>
      </div>
    </div>
  )
}
