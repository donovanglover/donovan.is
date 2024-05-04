'use client'

import { useEffect, useState } from 'react'
import { meta } from '@/app/metadata'

const schemes = [
  'base16-3024',
  'base16-apathy',
  'base16-ashes',
  'base16-atelier-cave-light',
  'base16-atelier-cave',
  'base16-atelier-dune-light',
  'base16-atelier-dune',
  'base16-atelier-estuary-light',
  'base16-atelier-estuary',
  'base16-atelier-forest-light',
  'base16-atelier-forest',
  'base16-atelier-heath-light',
  'base16-atelier-heath',
  'base16-atelier-lakeside-light',
  'base16-atelier-lakeside',
  'base16-atelier-plateau-light',
  'base16-atelier-plateau',
  'base16-atelier-savanna-light',
  'base16-atelier-savanna',
  'base16-atelier-seaside-light',
  'base16-atelier-seaside',
  'base16-atelier-sulphurpool-light',
  'base16-atelier-sulphurpool',
  'base16-atlas',
  'base16-ayu-dark',
  'base16-ayu-light',
  'base16-ayu-mirage',
  'base16-aztec',
  'base16-bespin',
  'base16-black-metal',
  'base16-blueforest',
  'base16-blueish',
  'base16-brewer',
  'base16-bright',
  'base16-brushtrees-dark',
  'base16-brushtrees',
  'base16-caroline',
  'base16-catppuccin-frappe',
  'base16-catppuccin-macchiato',
  'base16-catppuccin-mocha',
  'base16-chalk',
  'base16-circus',
  'base16-classic-dark',
  'base16-classic-light',
  'base16-codeschool',
  'base16-colors',
  'base16-cupcake',
  'base16-cupertino',
  'base16-da-one-black',
  'base16-da-one-gray',
  'base16-da-one-ocean',
  'base16-da-one-sea',
  'base16-danqing',
  'base16-darcula',
  'base16-darkmoss',
  'base16-darktooth',
  'base16-darkviolet',
  'base16-decaf',
  'base16-default-dark',
  'base16-default-light',
  'base16-dracula',
  'base16-edge-dark',
  'base16-eighties',
  'base16-embers-light',
  'base16-embers',
  'base16-emil',
  'base16-equilibrium-dark',
  'base16-equilibrium-gray-dark',
  'base16-equilibrium-gray-light',
  'base16-equilibrium-light',
  'base16-eris',
  'base16-espresso',
  'base16-eva',
  'base16-evenok-dark',
  'base16-everforest-dark-hard',
  'base16-everforest',
  'base16-flat',
  'base16-framer',
  'base16-fruit-soda',
  'base16-gigavolt',
  'base16-google-dark',
  'base16-google-light',
  'base16-gotham',
  'base16-grayscale-dark',
  'base16-grayscale-light',
  'base16-greenscreen',
  'base16-gruber',
  'base16-gruvbox-dark-hard',
  'base16-gruvbox-dark-medium',
  'base16-gruvbox-dark-pale',
  'base16-gruvbox-dark-soft',
  'base16-gruvbox-light-hard',
  'base16-gruvbox-light-medium',
  'base16-gruvbox-light-soft',
  'base16-gruvbox-material-dark-hard',
  'base16-gruvbox-material-dark-medium',
  'base16-gruvbox-material-dark-soft',
  'base16-gruvbox-material-light-hard',
  'base16-gruvbox-material-light-medium',
  'base16-gruvbox-material-light-soft',
  'base16-hardcore',
  'base16-harmonic16-dark',
  'base16-harmonic16-light',
  'base16-heetch',
  'base16-helios',
  'base16-hopscotch',
  'base16-horizon-dark',
  'base16-horizon-light',
  'base16-horizon-terminal-dark',
  'base16-horizon-terminal-light',
  'base16-humanoid-dark',
  'base16-humanoid-light',
  'base16-ia-dark',
  'base16-icy',
  'base16-irblack',
  'base16-isotope',
  'base16-jabuti',
  'base16-kanagawa',
  'base16-katy',
  'base16-kimber',
  'base16-lime',
  'base16-macintosh',
  'base16-marrakesh',
  'base16-materia',
  'base16-material-darker',
  'base16-material-palenight',
  'base16-material-vivid',
  'base16-material',
  'base16-measured-dark',
  'base16-measured-light',
  'base16-mellow-purple',
  'base16-mexico-light',
  'base16-mocha',
  'base16-monokai',
  'base16-mountain',
  'base16-nebula',
  'base16-nord-light',
  'base16-nord',
  'base16-nova',
  'base16-ocean',
  'base16-oceanicnext',
  'base16-one-light',
  'base16-onedark',
  'base16-outrun-dark',
  'base16-oxocarbon-dark',
  'base16-oxocarbon-light',
  'base16-pandora',
  'base16-paraiso',
  'base16-pasque',
  'base16-phd',
  'base16-pico',
  'base16-pinky',
  'base16-pop',
  'base16-porple',
  'base16-primer-dark-dimmed',
  'base16-primer-dark',
  'base16-primer-light',
  'base16-purpledream',
  'base16-qualia',
  'base16-railscasts',
  'base16-rebecca',
  'base16-rose-pine-dawn',
  'base16-rose-pine-moon',
  'base16-rose-pine',
  'base16-sagelight',
  'base16-sakura',
  'base16-sandcastle',
  'base16-selenized-black',
  'base16-selenized-dark',
  'base16-selenized-light',
  'base16-selenized-white',
  'base16-seti',
  'base16-shadesmear-dark',
  'base16-shadesmear-light',
  'base16-shapeshifter',
  'base16-silk-dark',
  'base16-silk-light',
  'base16-snazzy',
  'base16-solarflare-light',
  'base16-solarflare',
  'base16-solarized-dark',
  'base16-solarized-light',
  'base16-spaceduck',
  'base16-spacemacs',
  'base16-standardized-dark',
  'base16-standardized-light',
  'base16-stella',
  'base16-summercamp',
  'base16-summerfruit-dark',
  'base16-summerfruit-light',
  'base16-synth-midnight-dark',
  'base16-synth-midnight-light',
  'base16-tarot',
  'base16-tender',
  'base16-tokyo-city-dark',
  'base16-tokyo-city-light',
  'base16-tokyo-city-terminal-dark',
  'base16-tokyo-city-terminal-light',
  'base16-tokyo-night-dark',
  'base16-tokyo-night-light',
  'base16-tokyo-night-moon',
  'base16-tokyo-night-storm',
  'base16-tokyo-night-terminal-dark',
  'base16-tokyo-night-terminal-light',
  'base16-tokyo-night-terminal-storm',
  'base16-tokyodark-terminal',
  'base16-tomorrow-night-eighties',
  'base16-tomorrow-night',
  'base16-tomorrow',
  'base16-twilight',
  'base16-unikitty-dark',
  'base16-unikitty-light',
  'base16-unikitty-reversible',
  'base16-uwunicorn',
  'base16-vesper',
  'base16-vice',
  'base16-windows-10-light',
  'base16-windows-10',
  'base16-windows-95-light',
  'base16-windows-95',
  'base16-windows-highcontrast-light',
  'base16-windows-highcontrast',
  'base16-windows-nt-light',
  'base16-windows-nt',
  'base16-woodland',
  'base16-xcode-dusk',
  'base16-zenbones'
]

function makeTitle (slug: string): string {
  const words = slug.split('-')

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    words[i] = word.charAt(0).toUpperCase() + word.slice(1)
  }

  return words.join(' ')
}

export default function ChangeTheme (): React.ReactElement {
  const [currentScheme, setCurrentScheme] = useState(meta.scheme.light)

  function changeScheme (event: React.ChangeEvent<HTMLSelectElement>): void {
    document.documentElement.className = event.target.value
    localStorage.setItem('theme', event.target.value)
    setCurrentScheme(event.target.value)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme !== null) {
      document.documentElement.className = storedTheme
      setCurrentScheme(storedTheme)
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentScheme(meta.scheme.dark.replace('dark:', ''))
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (localStorage.getItem('theme') === null) {
        setCurrentScheme(event.matches ? meta.scheme.dark.replace('dark:', '') : meta.scheme.light)
      }
    })
  }, [currentScheme, setCurrentScheme])

  return (
    <div className="text-center">
      <label htmlFor="base16Scheme">Change Theme:</label>
      <select name="base16Scheme" id="base16Scheme" value={currentScheme} onChange={changeScheme} className="m-2 border border-200 bg-100 p-2 text-700 shadow">
        {schemes.map(scheme => {
          return <option key={scheme} value={scheme}>{makeTitle(scheme.replace('base16-', ''))}</option>
        })}
      </select>
    </div>
  )
}
