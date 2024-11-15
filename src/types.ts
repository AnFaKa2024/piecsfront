
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