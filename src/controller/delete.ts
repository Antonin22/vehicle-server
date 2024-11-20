import { promises } from 'dns';
import { VehicleStore } from '../store/vehicle';
import e, { Request, Response } from 'express';

interface Parameters {
  id: string;
}

export class DeleteVehicleController {
  constructor(private readonly vehicleStore: VehicleStore) {}

  public async handle(req: Request<Parameters>, res: Response): Promise<void> {
    const t = {id:Number(req.params.id)};
    try {
      await this.vehicleStore.deleteVehicle(t);
      res.status(204).send();
    }
    catch (error) {
      console.log("erreur");
    }
     
  }
}


