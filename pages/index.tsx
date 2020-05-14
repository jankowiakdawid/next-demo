import WorldGreeter, { PersonGreeter } from "../components/Greeter"
import { Layout } from "../components/Layout"

export default function IndexPage() {
  return (
    <Layout>
      <WorldGreeter />
      <PersonGreeter name="Rafal" />
    </Layout>
  )
}
