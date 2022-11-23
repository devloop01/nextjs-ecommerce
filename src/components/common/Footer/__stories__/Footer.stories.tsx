import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from '../Footer'

export default {
  title: 'Common/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
