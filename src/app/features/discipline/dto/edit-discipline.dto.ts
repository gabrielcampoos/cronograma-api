export interface EditDisciplineDto {
  id: string;
  newData: {
    name: string;
    instructor: string;
    patent: string;
  };
}
