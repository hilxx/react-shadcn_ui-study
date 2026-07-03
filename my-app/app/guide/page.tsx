import {redirect} from "next/navigation";
import {GuideView} from "@/features/guide/components/GuideView";

export default function GuidePage() {
  if (process.env.NODE_ENV === "production") redirect("/");
  return <GuideView />;
}
