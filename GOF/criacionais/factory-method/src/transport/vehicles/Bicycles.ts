import IVehicle from "./interfaces/IVehicle";

export default class Bicycles implements IVehicle {
  
  startRoute(): void {
    this.getCargo()
  console.log('Entrega conluida')
  }
  getCargo(): void {
    console.log('Encomentada coletada...');
    
    console.log('Entregador já está a caminho');
    
  }
  
}