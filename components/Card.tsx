import Link from 'next/link'
import { FaRegStar } from 'react-icons/fa'
import { SiNixos, SiRust, SiTypescript } from 'react-icons/si'

export interface CardProps {
  project: {
    name: string
    description: string
    created: number
    pushed: number
    stars: number
    language: string
  }
}

export default function Card ({ project }: CardProps): React.ReactElement {
  return (
    <Link href={`/${project.name}`} className={'m-2 flex flex-col justify-between border border-700/10 font-serif shadow hover:bg-200/80 hover:transition-colors md:m-4 xl:m-6'}>
      <div className="px-4 py-6">
        <h2 className="text-2xl font-bold">
          {project.name}
          {' '}
          {project.language === 'Nix'
            ? <SiNixos className="inline-block" />
            : project.language === 'Rust'
              ? <SiRust className="inline-block" />
              : <SiTypescript className="inline-block" />}
        </h2>
        <p className="grow pb-2 pt-1">{project.description}</p>
        <p className="flex justify-between pt-2">
          <span>{project.pushed === 2024
            ? `${project.created}\u2014Now`
            : `${project.created}\u2014${project.pushed}`}</span>
          {project.stars >= 5 && <span className="flex items-center"><FaRegStar className="mr-1 inline-block" />{project.stars}</span>}
        </p>
      </div>
    </Link>
  )
}
