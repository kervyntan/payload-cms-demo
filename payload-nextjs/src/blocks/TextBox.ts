import { Block } from 'payload/types'
export const TextBox: Block = {
    slug: "textbox",
    labels: {
        singular: "Text Block",
        plural: "Text Blocks"
    },
    fields: [
        {
            name: "text",
            label: "Text",
            type: "textarea"
        },
    ]
}