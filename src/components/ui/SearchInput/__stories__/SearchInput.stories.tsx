import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchInput } from '../SearchInput'

export default {
  title: 'UI/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
