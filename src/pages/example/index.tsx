import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/example/ss-props">
          <a>Server Side Props</a>
        </Link>
      </li>
      <li>
        <Link href="/example/client-side-fetch">
          <a>Client Side Fetch</a>
        </Link>
      </li>
      <li>
        <Link href="/example/redirect">
          <a>Redirect</a>
        </Link>
      </li>
    </ul>
  )
}
