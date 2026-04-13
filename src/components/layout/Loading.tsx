export default function Loading() {
    return (
        < div className="mt-16 mb-8 flex flex-col items-center justify-center gap-4" >
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="font-label text-[15px] uppercase tracking-widest text-outline">Loading Collection</p>
        </div >
    )
}