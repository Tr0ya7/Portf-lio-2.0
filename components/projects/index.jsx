import Title from '../title'
import ProjectCard from './projectCard'
import projects from './projects.json'

export default function Projects() {
    return (
        <section className="z-10 min-h-screen flex flex-col items-center w-full py-12">
            <Title>
                Alguns Projetos
            </Title>
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