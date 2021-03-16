import useSWR from 'swr'

import {getJsonData} from "@src/lib/util/fetch";

const apiEndpoint = '/api/example/client-side-fetch'

export default function ClientSideFetch() {
  // useSWR automatically retrieves, caches, and updates data.
  // It's built into a hook so that it's easy to use in a React component
  const { data, error } = useSWR(apiEndpoint, getJsonData)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
      <div>
        <div>Client Side Fetch</div>
        <div>hello {data.fullName}!</div>
      </div>
  )
}