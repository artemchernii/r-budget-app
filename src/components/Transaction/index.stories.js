import Transaction from "./Index";

export default {
  title: 'Example/Transaction',
  component: Transaction,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'radio', options: ['Increase by', 'Decrease by'] },
    value: {control: { type: 'range', min: 0, max: 300, step: 10 }}
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Increased = {
  args: {
    transaction: {
        label: 'Increased by',
        value: 100
    }
  },
};

export const Decreased = {
  args: {
    transaction: {
        label: 'Decreased by',
        value: -50
    }
  },
};


