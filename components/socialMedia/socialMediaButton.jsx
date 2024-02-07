import Link from '../../node_modules/next/link'
import Image from '../../node_modules/next/image'

export default function SocialMediaButton({ href, className, srcImage, width = 22, height = 22, altImage }) {
    return (
        <Link href={ href }>
            <button className={`border rounded-lg border-none p-4 bg-vBgButton mt-7 mx-3 ${ className }`}>
                <Image src={ srcImage } width={ width } height={ height } alt={ altImage } />
            </button>
        </Link>
    )
}