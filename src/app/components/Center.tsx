import React from 'react';

export default function Center({ isWarp }: { isWarp: boolean }) {
    return (
        <div
            className=" absolute pix pix-anim walk2-nebi"
            style={{
                animation: isWarp ? 'warpEffect 3s forwards linear' : '',
            }}
        ></div>
    );
}
