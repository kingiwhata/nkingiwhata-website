export default function Center({ isWarp }: { isWarp: boolean }) {
    return (
        <div className="absolute move-pix w-64 h-64 flex items-center">
            <div
                className="pix pix-anim walk2-nebi"
                style={{
                    animation: isWarp ? 'warpEffect 3s forwards linear' : '',
                }}
            ></div>
        </div>
    );
}
