import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Time } from "../../../models";
import { TimeEntity } from "../../../shared/entities";
import { CreateTimeDto, UpdateTimeDto } from "../dto";

export class TimeRepository {
  private _manager = DatabaseConnection.connection.manager;

  public async createTime(data: CreateTimeDto): Promise<Time> {
    const time = this._manager.create(TimeEntity, {
      ...data,
    });

    const createdTime = await this._manager.save(time);

    return this.convertToModel(createdTime);
  }

  public async listTime(): Promise<Time[]> {
    const time = await this._manager.find(TimeEntity);

    return time.map((t) => this.convertToModel(t));
  }

  public async editTime(data: UpdateTimeDto): Promise<Time | null> {
    const { id, number, startTime, endTime } = data;

    const result = await this._manager.update(
      TimeEntity,
      { id },
      { number, startTime, endTime }
    );

    if (result.affected === 0) {
      return null;
    }

    const updatedTimeEntity = await this._manager.findOneBy(TimeEntity, {
      id,
    });

    if (updatedTimeEntity) {
      return this.convertToModel(updatedTimeEntity);
    }

    return null;
  }

  public async deleteTime(id: string): Promise<void> {
    const result = await this._manager.delete(TimeEntity, { id: id });

    if (result.affected === 0) {
      throw new Error(`Failed to delete parent account with ID ${id}`);
    }
  }

  public async getById(id: string): Promise<Time | null> {
    const timeEntity = await this._manager.findOneBy(TimeEntity, { id });

    if (!timeEntity) return null;

    return this.convertToModel(timeEntity);
  }

  private convertToModel(dataFromDB: TimeEntity): Time {
    return new Time(
      dataFromDB.id,
      dataFromDB.number,
      dataFromDB.startTime,
      dataFromDB.endTime
    );
  }
}
