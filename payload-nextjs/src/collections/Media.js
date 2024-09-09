export const Media = {
    slug: 'media', // compulsory
    labels: {
        singlar: "Media",
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