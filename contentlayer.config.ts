import { defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
