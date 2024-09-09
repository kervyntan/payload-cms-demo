// Dynamic route in NextJS
import axios from "axios";
import React from "react";

export default function Page({page}) {

    // For every page that's rendered
    // For every block in the pages layout, render those blocks
    return (
        <div>
            <RenderBlocks layout={page.layout} />
        </div>
    )
}

export const getStaticPaths = async () => {
    const pageReq = await axios("/api/pages?limit=100");
    const pageData = pageReq.data;

    const res = {
        paths: pageData.docs.map(({slug, id}) => {
            // If slug is empty, means it's home page
            return {
                params: { 
                    slug: slug !== "index" ? slug.split("/") : false 
                },
                fallback: false
            }
        })
    }

    return res;
}

export const getStaticProps = async (ctx) => {
    const slug = ctx.params?.slug || "index";

    // Each time getStaticPaths is called, this function gets called
    // Extract the page data
    const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`); 
    let pageData = pageReq.data.docs[0];

    return {
        props: {
            page: pageData // Later received as a prop in the Page component above
        }
    }
}