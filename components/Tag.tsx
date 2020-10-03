import React from 'react'

interface TagProps {
  name: string
  key: string
}

const Tag = ({ name }: TagProps) => (
  <a className="p-1 mr-1 text-xs text-white bg-gray-600 rounded hover:bg-gray-500">
    {name}
  </a>
)

export default Tag
