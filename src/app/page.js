import Image from "next/image";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "Base de datos",
      subtitle: "",
      url: "/databases",
    },
    {
      title: "Usuarios",
      subtitle: "",
      url: "/users",
    },
  ];

  return (
    <>
      <Layout title={"Dashboard"}>
        {cards.map((item, key) => (
          <Link
            href={{
              pathname: item.url,
            }}
            key={key}
          >
            <Card title={item.title} subtitle={item.subtitle} key={key} />
          </Link>
        ))}
      </Layout>
    </>
  );
}
