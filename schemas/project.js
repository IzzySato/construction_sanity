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