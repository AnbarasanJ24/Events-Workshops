import { useRouter } from "next/dist/client/router"
import Layout from "../../components/Layout";

export default function EVENT() {

    const router = useRouter();
    console.log(router);

    return (
        <Layout title='Event | Events & Workshop'>
            <h1>EVENT</h1>
            <button onClick={() => router.push('/')}>Home</button>
        </Layout>
    )
}
