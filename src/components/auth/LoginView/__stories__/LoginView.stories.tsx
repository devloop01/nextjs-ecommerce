import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginView } from '../LoginView'

export default {
  title: 'Auth/Log In',
  component: LoginView,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LoginView>

const Template: ComponentStory<typeof LoginView> = (args) => (
  <LoginView {...args} />
)

export const Default = Template.bind({})

