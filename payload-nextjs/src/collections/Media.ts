import { CollectionConfig } from 'payload/types'
export const Media: CollectionConfig = {
    slug: 'media', // compulsory
    labels: {
        singular: "Media",
        plural: "Media"
    },
    upload: true, // Uploading of images/assets in general
    access: {
        read: () => true // Let the Media collection be public
    },
    fields: [
        {
            name: "alt",
            label: "Alt",
            type: "text",
            required: true
        },
    ]

}