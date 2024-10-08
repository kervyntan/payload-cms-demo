import { Block } from 'payload/types'
export const Hero: Block = {
    slug: "hero",
    labels: {
        singular: "Hero Block",
        plural: "Hero Blocks"
    },
    fields: [
        {
            name: "heading",
            label: "Heading",
            type: "text"
        },
        {
            name: "text",
            label: "Text",
            type: "textarea"
        },
        {
            name: "backgroundImage",
            label: "Background Image",
            type: "upload", // must have a relationTo a collection that has upload set to true
            relationTo: "media"
        }
    ]
}