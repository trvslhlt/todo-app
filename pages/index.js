import Link from 'next/link'

export default function IndexPage() {
    return (
        <div>
            <Link href='/todos'>
                <a>Todos</a>
            </Link>
        </div>
    )
}