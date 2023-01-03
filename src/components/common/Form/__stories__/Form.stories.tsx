import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Form } from '../Form'

export default {
  title: 'Common/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />

export const Default = Template.bind({})
