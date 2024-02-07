import Image from 'next/image'
import { LuExternalLink } from 'react-icons/lu'
import tags from './tags.json'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ProjectCard({ names, title, href, endDate, children }){
    const [tagsName, setTagsName] = useState([''])

    function addTags() {
        setTagsName([...names])
    }

    useEffect(() => { addTags() }, [])

    return (
        <div
            className="
                w-full flex flex-col p-6 border rounded-lg border-[hsla(0,0%,100%,.3)] alings-center text-left mb-4
                vMdScreen:w-[700px]
            "
        >
            <div className="flex justify-between">
                <div className="text-left text-xl flex justify-between w-full md:w-fit pb-4">
                    { title }
                    <Link href={ href }>
                        <LuExternalLink className="mx-2.5 mt-1 text-vGray" />
                    </Link>
                </div>
                <h4 className="text-slate-400 hidden md:block">
                    { endDate }
                </h4>
            </div>
            <p className="text-xs text-vGray">
                { children }
            </p>
            <div className="mt-3 flex flex-wrap">
                {tags
                    .filter((tag) => tagsName.includes(tag.name))
                    .map(
                        (tag) =>
                            <div 
                                className="px-4 py-2 bg-[#3b7cff33] w-fit rounded-full flex items-center m-1" 
                                key={tag.id}
                            >
                                <Image src={tag.image} width={18} height={18} alt={tag.name} />
                                <p className="ml-1 text-sm">
                                    {tag.name}
                                </p>
                            </div>
                    )
                }
            </div>
        </div>
    )
}