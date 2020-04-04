export class Customer {
    id:Number;
    fname:String;
    lname:String;
    d_id:String;
    recording:String;
    image:String;
    balance:Number;

    constructor(props:any = {}){
      this.id = props.id || 0;
      this.d_id = props.d_id || '';
      this.fname = props.fname || '';      
      this.lname = props.lname || '';      
      this.recording = props.recording || '';
      this.image = props.image || '';
     this.balance = props.balance || '';

    }
}
