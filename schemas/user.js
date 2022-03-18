export default {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'User email',
      type: 'string'
    },
    {
      name: 'fName',
      title: 'First Name',
      type: 'string'
    },
    {
      name: 'lName',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'group',
      title: 'Group',
      type: 'document',
      fields: [
        {
          name: 'group',
          title: 'Group',
          type: 'reference',
          weak: true,
          to: [{type: 'group'}]
        },
      ]
    },
  ]
};