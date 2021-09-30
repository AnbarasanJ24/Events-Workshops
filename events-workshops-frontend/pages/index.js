import { API_URL } from '../config';
import Layout from '../components/Layout';

export default function Home({ events }) {
  console.log(events)
  return (
    <Layout title="Home | Event & Workshop">
      <h1>Home Page</h1>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();

//   return {
//     props: { events }
//   }
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1
  }
}