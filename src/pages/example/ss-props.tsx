import type {GetServerSidePropsContext} from 'next'

import {getPageData} from "@src/server/bff/views/example/ssProps";

export default function SSProps({data, error}) {
  if (error) return <div>failed to load</div>
  return (
    <div>
      <div>Server Side Props</div>
      <div>hello {data.fullName}!</div>
    </div>
  )
}

export async function getServerSideProps({req, res}: GetServerSidePropsContext) {
  // getServerSideProps is only executed on the server side
  // All imports used in this function will not be added to the client bundle

  // You can access data added to the express request through middlware
  const user = req["user"]

  if (!user) {
    return {
      props: {
        error: true
      }
    }
  }

  const pageData = getPageData(user.id)
  return {
    props: {
      data: pageData
    },
  }
}
