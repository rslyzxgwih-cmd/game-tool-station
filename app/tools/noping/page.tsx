import { permanentRedirect } from "next/navigation";

export default function RedirectToExitLagPage() {
  permanentRedirect("/tools/exitlag");
}
