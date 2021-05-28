export abstract class Shape {

   abstract perimeter():number;
  abstract area():number;
   getName ():string {
        return (<any>this).constructor.name

}
}





