import fetch from 'isomorphic-unfetch'
import Tag from './components/Tag'
import Link from 'next/link'

interface Bloop {
  content: string
  tags: string[]
}

interface IndexProps {
  bloops: Bloop[]
}

const Index = (props: IndexProps) => (
  <div className='container mx-auto'>
    <h3 className='mt-5 font-serif text-xl'>
      The journey of a thousand miles begins with a single Bloop
    </h3>
    <div className='mt-5 mb-5'>
      <Link href='/'>
        <a className='mb-20'>New Bloop</a>
      </Link>
    </div>
    {props.bloops.map(bloop => (
      <>
        <h1 className='mt-10 mb-3 text-l'>{bloop.content}</h1>
        {bloop.tags.map(tag => (
          <>
            <Tag name={tag} key={tag} />
          </>
        ))}{' '}
      </>
    ))}
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://rainier.builtwithdark.com/bloops')
  const data = await res.json()
  return {
    bloops: data
  }
}

export default Index
