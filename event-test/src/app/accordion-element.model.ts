export class AccordionElement {
    
    constructor(public title: string, 
                public text: string, 
                public expanded: boolean = false) {
    }

    doSomething(value?: string) {
        console.log(value);
    }


    /*

    The above is equivalent to this:


    public title: string;
    public text: string;
    public expanded: boolean;

    constructor(title: string, text: string, expanded:boolean) {
        this.title = title;
        this.text = text;
        this.expanded = expanded;
    }
    */


}