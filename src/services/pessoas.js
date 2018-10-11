import { http } from './config'

export default {
    listar: () => {
        return http.get('pessoas')
    },

    salvar: (pessoa) => {
        return http.post('pessoa', pessoa);
    }
}