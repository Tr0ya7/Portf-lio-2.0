import Image from 'next/image'

export default function TechnologiesCard({ srcImage, tag, altImage, children }) {
    return (
        <div 
            className="
                w-32 min-h-[96px] p-2 border border-none rounded-lg bg-slate-400/10 text-sm flex flex-col items-center justify-center mb-3 cursor-pointer transition h-fit
                hover:bg-[#345de1]
            "
        >
            <Image src={ srcImage } id={ tag } width={40} height={40} alt={ altImage } />
            { children }
        </div>
    )
}