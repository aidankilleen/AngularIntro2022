export class AccordionElement {
    
    public title: string;
    public text: string;
    public expanded: boolean;

    constructor(title: string, text: string, expanded:boolean) {
        this.title = title;
        this.text = text;
        this.expanded = expanded;
    }
}