export interface UserApiModel {
  id: number;
  id_group: number;
  id_ceap: number;
  username: string;
  name: string;
  reset_password_token: string,
  token_created_at: Date,
  created_at: Date,
  updated_at: Date,
  ceap: {
    nome: string
  },
  group: {
    title: string
  },
}