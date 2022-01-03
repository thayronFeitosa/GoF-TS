import Transport from "./Transport";
import Bicycles from './vehicles/Bicycles'
import IVehicle from "./vehicles/interfaces/IVehicle";
export class BicyclesTransport extends Transport {
  
  protected createTransport(): IVehicle {
    
    return new Bicycles()
  }

}