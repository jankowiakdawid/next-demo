import Link from "next/link"

export function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/day">
              <a>Day</a>
            </Link>
          </li>
          <li>
            <Link href="/todos">
              <a>Todos</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}
