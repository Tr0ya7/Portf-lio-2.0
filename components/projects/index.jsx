import Title from '../title'
import ProjectCard from './projectCard'

export default function Projects() { //Transformar em json as infos
    return (
        <section className="z-10 min-h-screen flex flex-col items-center w-full py-12"> {/*criar uma pre-definição de section -> Section*/}
            <Title>
                Alguns Projetos
            </Title>
            <ProjectCard 
                title="Cinetag" 
                names={['React', 'JavaScript', 'Sass']} 
                href="https://cinnetag.vercel.app/" 
                endDate="Outubro 2023"
            >
                Nesse outro projeto eu busquei usar em conjunto tudo que já vim aprendendo no framework, onde me 
                desafiei a desenvolver um catálogo de filmes. Onde o usuário poderia tanto escolher um filme desse 
                catálogo e assistir seu trailer ao clicar e/ou “favoritar” o filme para vê-lo mais tarde.
            </ProjectCard>
            <ProjectCard 
                title="API Go & PostgreSQL" 
                names={['Go', 'Gin', 'Gorm', 'SQL', 'PostgreSQL']} 
                href="https://github.com/Tr0ya7/API-Go-PostgreSQL"
                endDate="Janeiro 2024"
            >
                API feita usando o framework Gin para conseguir alocar os paths e endpoints e subir os serviços da API,
                em conjunto com o framework Gorm onde foi usado para fazer a ligação e chamadas de funções CRUD com o 
                banco de dados PostgreSQL.
            </ProjectCard>
            <ProjectCard 
                title="SpaceApp" 
                names={['React', 'Vite', 'JavaScript', 'Styled Components']} 
                href="https://space-app-orcin.vercel.app/"
                endDate="Setembro 2023 - reuploaded"
            >
                Um projeto fortemente expirado no Pinterest onde busquei trazer o feed de imagem dele com a estética
                totalmente virada para uma coisa sobre o espaço.
            </ProjectCard>
            <ProjectCard 
                title="API Node.js & Firebird" 
                names={['Node.js', 'Express.js', 'JavaScript', 'SQL', 'Firebird']}
                href="https://github.com/Tr0ya7/API-crud-firebirdBD"
                endDate="Novembro 2023"
            >
                Uma API que consome dados vindo de um banco Firebird 2.5 usando também a versão SQL 2.5, onde foi 
                usado para a alocação dos paths, endpoints e respostas vindo do servidor o framework Express.js.
            </ProjectCard>
            <ProjectCard 
                title="PorfólioV3" 
                names={['Next.js', 'TypeScript', 'TailwindCss']} 
                href="https://portfolio-devluizhbarros.vercel.app"
                endDate="Janeiro 2024"
            >
                Meu antigo portfólio moldado na minha primeira ideia de design.
            </ProjectCard>
        </section>
    )
}