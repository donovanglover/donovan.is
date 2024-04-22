import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'
import { FaRegStar } from 'react-icons/fa'
import { SiNixos, SiReact, SiRust, SiTypescript } from 'react-icons/si'
import nixConfig from '@/app/(content)/(projects)/nix-config/nix-config-with-pepper.jpg'
import thud from '@/app/(content)/(projects)/thud/thud.jpg'
import Card from '@/components/Card'
import { getGitHub } from '@/lib/github'

export const runtime = 'edge'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Work I\'ve done.'
}

const images: Record<string, StaticImageData> = {
  thud,
  'nix-config': nixConfig
}

export default async function ProjectsPage (): Promise<React.ReactElement> {
  const projects = await getGitHub()

  return (
    <main className="font-serif">
      <h2 className="pb-4 text-center text-5xl font-extrabold">Projects</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {projects.map(project => {
          return (
            <Card key={project.id} href={`/${project.name}`}>
              {project.name in images && <Image src={images[project.name]} alt={project.name} />}
              <div className="px-4 py-6">
                <h3 className="text-2xl font-bold">
                  {project.name}
                  {' '}
                  {project.language === 'Nix'
                    ? <SiNixos className="inline-block" />
                    : project.language === 'Rust'
                      ? <SiRust className="inline-block" />
                      : <span><SiTypescript className="inline-block" /> <SiReact className="inline-block" /></span>}
                </h3>
                <p className="grow pb-2 pt-1">{project.description}</p>
                <p className="flex justify-between pt-2">
                  <span>{project.updated === project.created
                    ? project.created
                    : project.updated === 2024
                      ? `${project.created}\u2014Now`
                      : `${project.created}\u2014${project.updated}`}</span>
                  {project.stars >= 5 && <span className="flex items-center"><FaRegStar className="mr-1 inline-block" />{project.stars}</span>}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </main>
  )
}
