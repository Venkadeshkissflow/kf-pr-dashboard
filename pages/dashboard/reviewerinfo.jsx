import Link from "next/link";
import 'tailwindcss/tailwind.css'

export default function ReviewersList() {
  return (
    <div>
      <div>reviewers info</div>
      <Link href="/dashboard/reviewerslist">Back to reviewers info</Link>
    </div>
  );
}
