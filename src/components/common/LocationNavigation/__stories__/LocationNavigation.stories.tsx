import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LocationNavigation } from '../LocationNavigation'

export default {
  title: 'Common/Location Navigation',
  component: LocationNavigation,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LocationNavigation>

const Template: ComponentStory<typeof LocationNavigation> = (args) => (
  <LocationNavigation {...args} />
)

export const Default = Template.bind({})
