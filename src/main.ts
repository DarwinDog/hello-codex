import './style.css'
import { getGreeting } from './greeting.ts'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Fant ikke applikasjonsroten.')
}

const main = document.createElement('main')
const section = document.createElement('section')
const heading = document.createElement('h1')
const description = document.createElement('p')

heading.textContent = getGreeting()
description.textContent = 'Dette er mitt første AI-assisterte TypeScript-prosjekt.'

section.append(heading, description)
main.append(section)
app.replaceChildren(main)
