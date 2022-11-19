import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Layout } from '../Layout'

export default {
  title: 'Common/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
