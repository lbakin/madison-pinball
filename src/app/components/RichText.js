// src/components/RichText.js
import { PortableText } from '@portabletext/react'

const components = {
  types: {},
  marks: {},
  block: {},
  list: {},
}

export default function RichText({ value }) {
  return <PortableText value={value} components={components} />
}
