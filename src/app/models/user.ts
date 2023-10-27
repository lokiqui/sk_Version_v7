export interface UserCredential {
  email: string;
  password: string;
}

export interface UserProfile {
  email: string;
  fullName: string;
}
export interface InstructorA {
  Nombre: string;
  Apellido: string;
  DNI: number;
  Edad: number;
  Nacionalidad: string;
  Sexo: 'M' | 'F';

}
