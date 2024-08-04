import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'


import { Select } from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select > = {
    component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;
export const WithValue: Story = {
    render: () => {
        const [value, setValue] = useState("2");
        return (
            <Select
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    action('Value changed')(newValue);
                }}
                items={[
                    { value: '1', title: 'Minsc' },
                    { value: '2', title: 'Kiev' },
                    { value: '3', title: 'Gdansk' }
                ]}
            />
        );
    },
};

export const WithoutValue: Story = {
    args: {
        onChange: () => {action('Value changed')},
        items:[
            {value:'1', title:'Minsc'},
            {value:'2', title:'Kiev'},
            {value:'3', title:'Gdansk'}
        ]
    },
}

