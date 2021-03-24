
import axios from 'axios';
import { getStorageUserAsync } from '../storage';
import { userPath, enterprisesPath } from './settings';

export const api = axios.create({
  baseURL: 'https://empresas.ioasys.com.br/api/v1',
});

const setHeader = async () => {
  const user = await getStorageUserAsync();

  const client = user.client;
  const accessToken = user.accessToken;
  const uid = user.uid;

  const header = {
    'Content-Type': 'application/json',
    'client': client,
    'access-token': accessToken,
    'uid': uid
  }
  return header;
}

export const signIn = async (email: string, password: string) => {
  return await api.post(userPath, { email, password });
}

export const getEnterprises = async () => {
  const header = await setHeader();
  return await api.get(enterprisesPath, { headers: header });
}

export const getEnterprisesDetails = async (id: string) => {
  const header = await setHeader();
  return await api.get(`${enterprisesPath}/${id}`, { headers: header });
}

export const getEnterprisesFilter = async (enterpriseType: string, name: string) => {
  const header = await setHeader();

  const filter = {
    //enterprise_types: enterpriseType,  //Não retorna resultados
    name
  }

  return await api.get(enterprisesPath, { headers: header, params: filter });
}

