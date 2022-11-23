import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserNav } from '../UserNav'

export default {
  title: 'Common/User Navigation',
  component: UserNav,
} as ComponentMeta<typeof UserNav>

const Template: ComponentStory<typeof UserNav> = (args) => <UserNav {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  userName: 'Sikriti',
}
