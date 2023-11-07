import Counter from '.';

export default {
    title: 'Example/Counter',
    component: Counter,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {};
