import { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
    slug: 'pages', // compulsory
    labels: {
        singular: "Page",
        plural: "Pages"
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true
        },
        {
            name: "slug",
            label: "Slug",
            type: "text",
            required: true
        },
        {
            name: "layout",
            label: "Layout",
            type: "blocks", // Blocks are like Hero, Text etc. blocks
            blocks: [] // an array of blocks
        }
    ]

}