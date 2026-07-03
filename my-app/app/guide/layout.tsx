import { GuideSidebar } from "@/features/guide/components/GuideSidebar"

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <GuideSidebar>{children}</GuideSidebar>
}
