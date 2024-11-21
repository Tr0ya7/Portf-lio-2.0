import Link from 'next/link'
import Title from '../title'
import ProjectCard from './projectCard'
import projects from './projects.json'

export default function Projects() {
    return (
        <section className="z-10 min-h-screen flex flex-col items-center w-full py-12">
            <Title>
                Alguns Projetos
            </Title>
            <Link href="https://www.behance.net/luizhedesouz6" className="text-blue-500 underline mb-5 text-2xl">
                Descrição aprofundada dos projetos (com imagens)
            </Link>
            {projects.map((project) => 
                <ProjectCard 
                    key={project.id} title={project.title} names={project.names} href={project.link} 
                    endDate={project.date}
                >
                    {project.description}
                </ProjectCard>
            )}
        </section>
    )
}