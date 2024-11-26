import Link from "next/link"
import { IoDocumentOutline } from "react-icons/io5"

export default function ViewResume() {
    return (
        <Link href="https://drive.google.com/file/d/1Vb_iv28E6xOeTKLdEfznD_7reFjqS2Nn/view?usp=drive_link">
            <button 
                className="
                    flex items-center w-fill p-3 border rounded-md border-white text-white mt-5 mx-auto text-sm 
                    md:p-4 md:text-[16px]
                "
            >
                <IoDocumentOutline className="mr-1" />
                Veja meu Resume
            </button>
        </Link>
    )
}
