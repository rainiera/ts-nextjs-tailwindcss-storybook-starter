import fetch from 'isomorphic-unfetch'
import React from 'react'
import Tag from '../components/Tag'

interface Bloop {
  content: string
  tags: string[]
}

interface IndexProps {
  bloops: Bloop[]
}

const Index = (props: IndexProps) => (
  <div className="container mx-auto">
    <h3 className="mt-5 font-serif text-xl">
      The journey of a thousand miles begins with a single Bloop
    </h3>
    <div className="mt-5 mb-5 text-lg font-bold">List of Bloops</div>
    {props.bloops.map((bloop, bi) => (
      <React.Fragment key={`b-${bi}`}>
        <h1 className="mt-10 mb-3 text-l">{bloop.content}</h1>
        {bloop.tags.map((tag, ti) => (
          <Tag name={tag} key={`t-${ti}`} />
        ))}
      </React.Fragment>
    ))}
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://rainier.builtwithdark.com/bloops')
  const data = await res.json()
  return {
    bloops: data,
  }
}

export default Index
