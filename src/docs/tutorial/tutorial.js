import CADASTRO from './cadastro_info01.jpeg'
import FINAL from './compra_final.jpeg'
import LISTA from './lista_de_ingressos.jpeg'
import VER_INGRESSO from './ver_ingressos.jpeg'

export const TUTORIAL = [
    {
        id: 1,
        text: "Na página do evento clique em \"Ver ingressos\".",
        img: VER_INGRESSO,
    },
    {
        id: 2,
        text: "Na página de ingressos, adicione a quantidade de ingressos e depois clique em \"Continuar\".",
        img: LISTA,
    },
    {
        id: 3,
        text: "Se você ainda não tem uma conta, ele irá pedir para que se cadastre na plataforma.",
        link: 'https://www.sympla.com.br/'
    },
    {
        id: 4,
        text: "Preencha as informações necessárias e clique em \"Finalizar\".\n",
        img: CADASTRO
    },
    {
        id: 5,
        text: "Pronto! Você já está garantido no evento. Agora eles estão disponíveis para você no email e poderão ser acessados dentro da sua conta :)",
        img: FINAL
    }
];