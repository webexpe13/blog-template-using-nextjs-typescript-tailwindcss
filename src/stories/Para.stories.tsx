import Para from "../components/Para";
import { TextAlign } from "../shared/enums";

export default {
    title: "Paragraphs",
    component: Para,
    argTypes: {
        size: {type: 'number', default: 18}
    }
}

const Template = (args : any) => <Para {...args} />

export const ParaExp = () => <Para>Paragraph Example</Para>
export const ParaExp2 = () => <Para size={32} color="#EC9B3B" textAlign={TextAlign.RIGHT}>Paragraph Example 2</Para>
export const ParaExp3: any = Template.bind({})

ParaExp3.args = {
    size: 40,
    children: 'Para control example',
    color: '#A91079',
    textAlign: TextAlign.CENTER
}