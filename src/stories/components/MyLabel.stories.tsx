import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        fontColor: { control: 'color' },
        size: { control: 'select'},
        color: { control: 'select' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args }/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false, // true: capializar toda la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const customFrontColor = Template.bind({});
customFrontColor.args = {
    fontColor: '#5517ac',
    size: 'h1'
}