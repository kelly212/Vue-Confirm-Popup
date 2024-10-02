<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
			<v-menu v-model="menu" :close-on-content-click="false" location="bottom">
						<template v-slot:activator="{ props }">
									<v-btn :color="colorBtn" v-bind="props" :variant="variant" @click="clicou()" :size="sizeBtn" :disabled="disabled">
												<v-icon v-if="!hideIcon" :size="sizeIcon">{{iconBtn}}</v-icon>
												<span v-if="!hideLabel">{{label}}</span>
												<v-tooltip v-if="tooltip" activator="parent" location="bottom" aria-label="Baixar">{{tooltip_texto}}</v-tooltip>
									</v-btn>
						</template>
						
						<v-card min-width="300">
									<v-card-text>
												<h4>
															<v-icon>{{icon}}</v-icon>
															{{texto}}
												</h4>
									</v-card-text>
									<v-divider></v-divider>
									
									<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn :color="colorCancel" variant="flat" @click="cancelar()" size="small">
															{{btnCancel}}
												</v-btn>
												<v-btn :color="colorOk" variant="flat" size="small" @click="salvar()">
															{{btnOk}}
												</v-btn>
									</v-card-actions>
						</v-card>
			</v-menu>


</template>

<script>
   /* eslint-disable */
   export default {
      name: 'VConfirmPopup',
      components: {},
      props: {
         icon: {default: 'mdi-alert-circle-outline'},
         label: {default: 'Bottom'},
         texto: {default: 'Deseja remover este registro?'},
         btnOk: {default: 'Sim'},
         btnCancel: {default: 'Não'},
         colorCancel: {default: 'inherit'},
         colorOk: {default: 'primary'},
         colorBtn: {default: 'primary'},
         variant: {default: 'text'},
         iconBtn: {default: 'mdi-delete'},
         hideIcon: {default: false},
         disabled: {default: false},
         tooltip: {default: false},
         tooltip_texto: {default: ''},
         hideLabel: {default: false},
         sizeIcon: {default: 'default'},
         sizeBtn: {default: 'small'},
      },
      data: () => ({
         fav: true,
         menu: false,
         message: false,
         hints: true,
      }),
      methods: {
         clicou() {
         },
         cancelar() {
            this.menu = false
         },
         salvar() {
            this.$emit('callback')
            this.menu = false
         },
      },
      created() {
      },
      mounted() {
      },
      computed: {},
      watch: {}
   }
</script>

<style scoped>

</style>
