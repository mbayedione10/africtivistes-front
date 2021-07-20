import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Error from '../components/error'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Error/>
  </Layout>
)

export default NotFoundPage
