export class Item {
      name: String; 
      category: String; 
      cost: Number; 
      stock: Number; 
      id: Number = 0; 
      url: String; 
      asl: String

      constructor(props:any = {}){
      this.name = props.name || '';
      this.category = props.category || '';      
      this.cost = props.cost || 0;
      this.stock = props.stock || 0;
      this.id = props.id || 0;
      this.url = props.url || '';
      this.asl = props.asl || '';
      }
}
