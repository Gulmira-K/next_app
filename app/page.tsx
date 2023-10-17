import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hiiii</h1>
      <Link href="/users">User Next routing</Link>
      <ProductCard />
    </main>
  )
}
