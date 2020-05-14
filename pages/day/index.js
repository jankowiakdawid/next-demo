import Link from "next/link"
import { Layout } from "../../components/Layout"

export default function DayPage() {
  return (
    <Layout>
      Hello Day
      <p>
        <Link href="/day/today">
          <a>Today</a>
        </Link>
      </p>
    </Layout>
  )
}
