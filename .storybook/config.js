import { configure } from '@storybook/react'
import '../css/tailwind.css'

configure(require.context('../stories', true, /\.stories\.tsx?$/), module)
