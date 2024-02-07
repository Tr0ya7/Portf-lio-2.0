import ViewResume from './viewResume'
import SocialMedia from '../socialMedia/index'

export default function ContactMe() {
    return (
        <section className="pt-8 w-fit min-h-screen z-10 flex items-center justify-center flex-col">
            <h1 className="text-[2.4rem] md:text-[3.25rem] md:px-12 md:leading-tight vLaptopLScreen:text-[4rem]">
                Olá, eu sou
                <span> </span>
                <span className="gradient-text font-black">
                    Luiz Henrique Barros
                </span>
            </h1>
            <h3 className="text-vGray text-xl md:text-2xl md:mt-4 lg:mt-3">
                Desenvolvedor Full-Stack 
            </h3>
            <h5 
                className="
                    gradient-text text-vGrey mt-3 text-sm px-4 font-black italic text-[1rem] 
                    md:text-[16px] lg:text-[18px]
                "
            >
                Ativamente procurando por oportunidades full-time
            </h5>
            <ViewResume />
            <SocialMedia />
        </section>
    )
}