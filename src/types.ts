
import {StaticImageData} from 'next/image';

export type UserProps = {
  nome: string;
  senha:string;
  tipo:string;
}

export type MembroEquipe = {
  nome: string;
  turma: string;
  rm: string;
  foto:  StaticImageData;
  github: string;
  linkedin: string;
}


export type OrcProps = {
  onSubmit:()=>void;
  chatbotOpen: boolean;
 
}

export type PlanosProps = {
  plano: string;
}

export type EdicaoProps = {
  locacoes: string;
  id: string;
  nome: string;
  email: string;
}

export type BeneficiarioProps = {
  id: string;
  nome: string;
  email: string;
}