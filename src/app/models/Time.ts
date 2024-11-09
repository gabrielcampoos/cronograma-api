import { Base } from "./Base";

export interface TimeJson {
  id: string;
  number: number;
  startTime: string;
  endTime: string;
}

interface EditTimeDto {
  number?: number;
  startTime?: string;
  endTime?: string;
}

export class Time extends Base {
  constructor(
    _id: string,
    private _number: number,
    private _startTime: string,
    private _endTime: string
  ) {
    super(_id);
  }

  toJson(): TimeJson {
    return {
      id: this._id,
      number: this._number,
      startTime: this._startTime,
      endTime: this._endTime,
    };
  }

  getId(): string {
    return this._id;
  }

  setId(id: string): void {
    this._id = id;
  }

  getNumber(): number {
    return this._number;
  }

  setNumber(number: number): void {
    this._number = number;
  }

  getStartTime(): string {
    return this._startTime;
  }

  setStartTime(startTime: string): void {
    this._startTime = startTime;
  }

  getEndTime(): string {
    return this._endTime;
  }

  setEndTime(endTime: string): void {
    this._endTime = endTime;
  }

  editTime(data: EditTimeDto): boolean {
    if (data.number) {
      this._number = data.number;
    }

    if (data.startTime) {
      this._startTime = data.startTime;
    }

    if (data.endTime) {
      this._endTime = data.endTime;
    }

    return true;
  }
}
