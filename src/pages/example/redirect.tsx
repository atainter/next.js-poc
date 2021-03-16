import type {GetServerSidePropsContext} from 'next'

export default function Redirect() {
  return <div>Redirect</div>
}

export async function getServerSideProps({req, res}: GetServerSidePropsContext) {
    console.log("ServerSideProps redirect")
    console.log(req["user"])
    return {
        props: {},
        redirect: {
            destination: '/example',
            permanent: false
        }
    };
}