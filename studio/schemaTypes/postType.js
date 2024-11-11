// export default {
//   title: 'Post',
//   name: 'post',
//   type: 'document',
//   fields: [
//     {
//       title: 'Title',
//       name: 'title',
//       type: 'string',
//       validation: (Rule) => [
//         Rule.required().min(10).error('Titles must be at least 10 characters long'),
//         Rule.required().max(50).warning("It's better to use short snappy titles"),
//       ],
//     },
//   ],
// }

import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).error('Titles must be at least 10 characters long'),
        Rule.required().max(50).warning("It's better to use short snappy titles"),
      ],
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required().error('Author is required'),
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      validation: (Rule) => Rule.max(120).error('Excerpt must be less than 120 characters long'),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'text',
      validation: (Rule) => Rule.required().error('Content is required'),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
  ],
})
