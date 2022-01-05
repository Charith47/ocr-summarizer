<template>
	<v-app id="inspire">
		<v-app-bar app color="white" flat> </v-app-bar>

		<v-main class="grey lighten-3">
			<v-container>
				<v-row>
					<v-col cols="12" sm="2">
						<v-sheet rounded="lg" min-height="268">
							<!--  -->
						</v-sheet>
					</v-col>

					<v-col cols="12" sm="8">
						<v-sheet min-height="70vh" rounded="lg">
							<!--  -->
						</v-sheet>
					</v-col>

					<v-col cols="12" sm="2">
						<v-sheet rounded="lg" min-height="268">
							<!--  -->
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>

			<!-- GitHub Link -->
			<v-btn
				fab
				href="https://github.com/Charith47/ocr-summarizer"
				target="_blank"
        color="secondary"
				bottom
				right
				fixed
			>
				<v-icon> mdi-github </v-icon>
			</v-btn>

		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		focus: false,
	}),
};
</script>
