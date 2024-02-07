import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() { //IMPLEMENTAR FRAMER MOTION PARA COMEÇAR A UTILIZAR NO PORTFÓLIO
    const defaultMenuIcon = '/images/hamburguer-menu.png'
    const closeMenuIcon = '/images/close.png'
    const [menuIcon, setMenuIcon] = useState(defaultMenuIcon)
    
    const openMenu = () => {
        setMenuIcon(closeMenuIcon)

        if (menuIcon === closeMenuIcon) {
            setMenuIcon(defaultMenuIcon)
        }
        console.log("click")
    }

    return (
        <header className="absolute inset-0 z-20 w-full p-4 flex h-[72px] justify-between">
            <Link href="/">
                <Image className="cursor-pointer" src="/images/logo.png" width={40} height={40} alt="logo" /> {/*a width/height ou z-10 do contactMe está ficando em cima na versão de mobile do header causando o bug*/}
            </Link>
            <Image 
                className="rounded-full w-fit p-2 bg-vBgButton border-none cursor-pointer"
                src={menuIcon}
                width={40} 
                height={40} 
                alt="hamburguer-menu" 
                onClick={openMenu}
            />
        </header>
    )
}