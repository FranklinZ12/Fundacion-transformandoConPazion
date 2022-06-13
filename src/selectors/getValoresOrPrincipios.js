import { principiosYvalores } from 'helpers/principiosYvalores';

export const obnetenerValoresOPrincipios = (title) => {
    const validarPrincipiosYValores = ['principios', 'valores'];
    if (!validarPrincipiosYValores.includes(title)) {
        throw new Error(`${title} no es un valor valido`);
    }
    return principiosYvalores.filter( title => title.titulo === title);
}