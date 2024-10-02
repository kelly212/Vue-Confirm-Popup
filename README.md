# Vue-Confirm-Popup
 É um componente de confirmação personalizável que exibe um pop-up de confirmação antes de executar ações críticas, como exclusão ou alterações permanentes. Ele é útil para prevenir ações indesejadas, fornecendo ao usuário a chance de confirmar ou cancelar a ação.
## Install 
#### NPM 
Para usar o componente em seu projeto Vue 3, instale o pacote via NPM:

```bash 
npm install v-confirm-popup
``` 
## Uso
No seu projeto Vue, importe e registre o componente:

```javascript 
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';  // if you are already using Vuetify 
import VConfirmPopup from 'v-confirm-popup';

const app = createApp(App);

app.use(vuetify);
app.component('VConfirmPopup', VConfirmPopup);
app.mount('#app');
```
## Exemplo de Uso
Você pode usar o componente da seguinte maneira:

```vue

<template>
          <v-confirm-popup class="actionsTable-icon"
          iconBtn="mdi-delete"
		  :hideLabel="true"
		  @callback="executar()"
		  colorOk="red"
		  colorCancel="green"	
		  colorBtn="red">
          </v-confirm-popup>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  methods: {
           executar() {
              alert('Ação executada')
           }
        },
});
</script>

```
#### Props
* class (opcional): Define a classe CSS aplicada ao componente.
* iconBtn (obrigatório): Define o ícone que será exibido no botão de ativação do pop-up. Neste caso, mdi-delete é usado para indicar exclusão.
* hideLabel (booleano): Define se o rótulo do botão deve ser oculto. Se definido como true, o texto do botão é escondido e apenas o ícone será exibido.
* colorOk (opcional): Define a cor do botão de confirmação (OK). Exemplo: "red".
* colorCancel (opcional): Define a cor do botão de cancelar. Exemplo: "green".
* colorBtn (opcional): Define a cor do botão que dispara o pop-up. Exemplo: "red".

#### Events
* @callback: Evento que é disparado ao clicar no botão de confirmação (OK). No exemplo, a função executar() é chamada quando o usuário confirma a ação.

#### Slots
Este componente atualmente não utiliza slots.

#### Referências
* https://primevue.org/confirmpopup/ (based on primevue)
