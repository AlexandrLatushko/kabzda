import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import { Reating } from './Reaiting';
import { useState } from 'react';

const ReatingWithState = (args: any) => {
    const [value, setValue] = useState(args.value);

    const handleClick = (newValue: number) => {
        setValue(newValue);
        if (args.onClick) {
            args.onClick(newValue);
        }
    };

    return <Reating {...args} value={value} onClick={handleClick} />;
};

const meta: Meta<typeof ReatingWithState> = {
    component: ReatingWithState,
};
export default meta;
type Story = StoryObj<typeof meta>

export const EmptyReating: Story = {
    args: {
        value:0,
        onClick: action('rating-clicked')
    },
}



