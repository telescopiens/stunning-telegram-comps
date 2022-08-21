export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    }, 
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Default variant',
      name: 'defaultProductVariant',
      type: 'productVariant',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant',
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: { type: 'vendor' },
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' },
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
}
