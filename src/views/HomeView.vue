<template>
			<div>
						<v-container>
									<br>
									<div style="text-align: center">
												<h1>Vue Confirm Popup</h1>
												<br>
									</div>
									<v-row justify="center">
												<v-col cols="4">
															<v-confirm-popup class="actionsTable-icon"
																														iconBtn="mdi-delete"
																														sizeBtn="large"
																														:hideLabel="true"
																														@callback="executar()"
																														colorOk="red"
																														colorCancel="green"
																														colorBtn="red"></v-confirm-popup>
												</v-col>
									</v-row>
						</v-container>
			</div>
</template>

<script>
   import {defineComponent} from 'vue';

   // Components
   import VConfirmPopup from '../components/VConfirmPopup.vue';

   export default defineComponent({
      name: 'HomeView',
      data: () => ({}),
      methods: {
         executar() {
            alert('Ação executada')
         }
      },

      components: {
         VConfirmPopup,
      },
      mounted() {

      }
   });
</script>
