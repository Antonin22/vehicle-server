import { VehicleStore } from '../store/vehicle';
import { Request, Response } from 'express';

interface Parameters {
  id: string;
}

export class DeleteVehicleController {
  constructor(private readonly vehicleStore: VehicleStore) {}

  public async handle(req: Request<Parameters>, res: Response): Promise<void> {
    const t = {id:Number(req.params.id)};
    await this.vehicleStore.deleteVehicle(t);
    res.status(204).send();
  }
}


