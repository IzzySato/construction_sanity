export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      option: {
        hotspot: true
      }
    },
    {
      name: 'mainImgDisplayLanding',
      title: 'Do you want to display the main image in the landing page?',
      type: 'boolean'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      option: {
        hotspot: true
      }
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string'
    },
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    }
  ]
}