import Link from 'next/link'
import Title from '../title'

export default function AboutMe() {
    return (
        <section className="z-10 min-h-screen py-12">
            <Title>
                Sobre Mim
            </Title>
            <p className="pt-10 text-vWhite leading-8 tracking-wide font-raleway md:leading-10 md:max-w-[600px]">
                Sou um jovem programador fullstack de 19 anos, apaixonado por tecnologia em geral. Atualmente cursando graduação tecnológica em Análise e Desenvolvimento de Sistemas e faço da programação minha 
                carreira há quase três anos. Comecei no final do terceiro ano do curso técnico em Análise e Desenvolvimento de Sistemas da <Link className="text-blue-400 border-b border-blue-400" 
                href="https://www.etecjau.com.br/etecjau/">ETEC Joaquim Ferreira do Amaral</Link>, onde eu e meu grupo vendemos o site criado como projeto de conclusão de curso. Inicialmente, foquei no front-end, que 
                foi o start da minha carreira. No entanto, devido à demanda mercadológica e à minha primeira experiência em uma software house, precisei expandir meus conhecimentos para além do front-end. Trabalhando 
                em uma equipe reduzida, me tornei um desenvolvedor mais versátil e descobri uma nova paixão pelo desenvolvimento fullstack.
            </p>
        </section>
    )
}