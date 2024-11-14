export type UserProps = {
  nome: string;
  senha:string;
  tipo:string;
}

export type MembroEquipe = {
  nome: string;
  turma: string;
  rm: string;
  foto: any;
  github: string;
  linkedin: string;
}

export type PlanosProps = {
  titulo: string;
  descricao: string;
}

export type OrcProps = {
  onSubmit: any;
  chatbotOpen: any;
  toggleChat: any;
}