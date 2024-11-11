import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    defineField({
      title: 'Full Name',
      name: 'full_name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Full name is required'),
    }),
    defineField({
      title: 'Short bio',
      name: 'short_bio',
      type: 'text',
    }),
    defineField({
      title: 'Avatar',
      name: 'avatar',
      type: 'image',
      validation: (Rule) => Rule.required().error('Avatar is required'),
    }),
  ],
})
