/** Global const to keep track of site meta */
export const meta: {
  /** Title of the website used in the <title> tag on all pages */
  title: string
  /** Description of the website used for the home page */
  description: string
  /** Name of the author of the website */
  name: string
  /** URL to the website in the form "https://example.com" */
  url: string
  /** Default language used on the website */
  lang: string
  /** Social media accounts */
  social: {
    mastodon: string
    github: string
    linkedin: string
  }
  /** Default color scheme */
  scheme: {
    light: string
    dark: string
  }
} = {
  title: 'Donovan Glover',
  description: 'Software Engineer in Atlanta, GA',
  name: 'Donovan Glover',
  url: 'https://donovan.is',
  lang: 'en-US',
  social: {
    mastodon: 'https://hachyderm.io/@donovanglover',
    github: 'https://github.com/donovanglover',
    linkedin: 'https://linkedin.com/in/donovanglover'
  },
  scheme: {
    light: 'base16-standardized-light',
    dark: 'dark:base16-default-dark'
  }
}
