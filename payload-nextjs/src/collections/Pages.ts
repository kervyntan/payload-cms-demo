import { Heading } from '../blocks/Heading'
import { Hero } from '../blocks/Hero'
import { TwoColumn } from '../blocks/TwoColumn'
import { CollectionConfig } from 'payload/types'
import { TextBox } from '../blocks/TextBox'

export const Pages: CollectionConfig = {
    slug: 'pages', // compulsory
    labels: {
        singular: "Page",
        plural: "Pages"
    },
    access: {
        read: () => true // Let the Pages collection be public
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
            blocks: [Hero, TwoColumn, Heading, TextBox] // an array of blocks
        }
    ]

}