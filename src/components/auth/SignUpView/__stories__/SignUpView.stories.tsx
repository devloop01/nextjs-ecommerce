import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SignUpView } from '../SignUpView'

export default {
  title: 'Auth/Sign Up',
  component: SignUpView,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SignUpView>

const Template: ComponentStory<typeof SignUpView> = (args) => (
  <SignUpView {...args} />
)

export const Default = Template.bind({})
