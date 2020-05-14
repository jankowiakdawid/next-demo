import { Layout } from "../../components/Layout"

export function getServerSideProps() {
  return {
    props: {
      day: new Date().getDay()
    }
  }
}

export default function Today({ day }) {
  return (
    <Layout>
      Today is <strong>{day}</strong>
    </Layout>
  )
}
