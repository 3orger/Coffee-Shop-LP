import { data } from '../../data/data.js'
import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import { MainBanner } from '../../components/MainBanner/MainBanner'

export const Home = () => {
  return (
    <Layout>
      <Header menu={data.menu}>Header</Header>
      <main>
        <MainBanner />
      </main>
      <footer>Footer</footer>
    </Layout>
  )
}
