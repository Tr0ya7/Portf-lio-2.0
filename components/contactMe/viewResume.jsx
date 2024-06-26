import Link from "next/link"
import { IoDocumentOutline } from "react-icons/io5"

export default function ViewResume() {
    return (
        <Link href="https://drive.google.com/file/d/1F1c-VrIeommnIPeFKRPvHzSx3rJqHI8j/view?usp=sharing">
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
