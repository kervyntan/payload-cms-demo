import { Block } from 'payload/types'
export const Heading: Block = {
    slug: "heading",
    labels: {
        singular: "Heading Block",
        plural: "Heading Blocks"
    },
    fields: [
        {
            name: "heading",
            label: "Heading",
            type: "text"
        },
    ]
}