import { blocks } from "@/blocks/blockList";
import React from "react";

export default function RenderBlocks ({layout}) {
    return (
        <div>
        {
            layout.map((block, i) => {
                // Check the blocks in the blockList
                const Block = blocks[block.blockType]; // blockType is the slug in the backend
                if (Block) {
                    // Render block if mapped slug is found
                    return <Block key={i}  {...block} />
                }
                
                return null;
            })
        }
        </div>
    )
}