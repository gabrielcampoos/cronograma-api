import { Base } from "./Base";

export interface DisciplineJson {
  id: string;
  name: string;
  instructor: string;
  patent: string;
}

interface EditDisciplineDto {
  name?: string;
  instructor?: string;
  patent?: string;
}

export class Discipline extends Base {
  constructor(
    _id: string,
    private _name: string,
    private _instructor: string,
    private _patent: string
  ) {
    super(_id);
  }

  toJson(): DisciplineJson {
    return {
      id: this._id,
      name: this._name,
      instructor: this._instructor,
      patent: this._patent,
    };
  }

  getId(): string {
    return this._id;
  }

  setId(id: string): void {
    this._id = id;
  }

  getName(): string {
    return this._name;
  }

  setName(name: string): void {
    this._name = name;
  }

  getInstructor(): string {
    return this._instructor;
  }

  setInstructor(instructor: string): void {
    this._instructor = instructor;
  }

  getPatent(): string {
    return this._patent;
  }

  setPatent(patent: string): void {
    this._patent = patent;
  }

  editDiscipline(data: EditDisciplineDto): boolean {
    if (data.name) {
      this._name = data.name;
    }

    if (data.instructor) {
      this._instructor = data.instructor;
    }

    if (data.patent) {
      this._patent = data.patent;
    }

    return true;
  }
}
