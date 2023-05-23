import Image from 'next/image'
import Card from './components/Card'
import Layout from './components/Layout'

export default function Home() {

  const cards = [{
    title: "Base de datos",
    subtitle: "",
    url: "/databases"
  }, {
    title: "Usuarios",
    subtitle: "",
    url: "/users"
  }, {
    title: "Configuracion",
    subtitle: "",
    url: "/configuration"
  }]



  return (
    <>
      <Layout title={"Dashboard"}>
        {

          cards.map((item, key) => (
            <Card title={item.title} subtitle={item.subtitle} url={item.url} key={key} />
          ))
        }
      </Layout>

    </>
  )
}
