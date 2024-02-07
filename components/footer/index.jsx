import SocialMedia from '../socialMedia/index'

export default function Footer() { 
    return (
        <footer className="z-10 py-6 flex flex-col items-center">
            <p className="text-sm text-gray-300">
                © 2024 Luiz Henrique de Souza Barros
            </p>
            <SocialMedia width={18} height={18} />
        </footer>
    )
}