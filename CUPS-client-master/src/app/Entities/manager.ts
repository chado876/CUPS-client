export class Manager {
    mID:string;
    password:string;

    constructor(props:any = {}){
        this.mID = props.mID || '';
        this.password= props.password || '';   
    }
}
