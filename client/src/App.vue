/* eslint-disable */
<template>
	<v-app id="inspire">
		<v-app-bar app color="white" flat>
			<v-container>
				<img height="30px" width="auto" src="./assets/logo-main.svg" />
			</v-container>
		</v-app-bar>

		<v-main class="grey lighten-3">
			<v-container>
				<v-row>
					<v-col cols="12" sm="2">
						<v-sheet rounded="lg" min-height="268">
							<v-container>
								<div class="d-flex align-start">
									<img
										src="./assets/info-emoji.png"
										height="25px"
										width="auto"
										alt="information emoji"
									/>
									<h3 class="mx-2">About</h3>
								</div>
								<br>
								<p class="body-1" style="text-align:justify">
									AccuText acts as a text recognizer and a summarizer which can extract and summarize text from uploaded images. Start by uploading your images and clicking the upload button to get the extracted and summarize button to get the summarized text.								</p>
							</v-container>
						</v-sheet>
					</v-col>

					<v-col cols="12" sm="8">
						<v-sheet min-height="70vh" rounded="lg">
							<v-container>
								<v-container>
									<v-container>
										<h2 class="">Upload your images</h2>
									</v-container>
									<v-container>
										<v-file-input
											outlined
											dense
											accept="image/png, image/jpeg"
											chips
											show-size
											counter
											multiple
											truncate-length="15"
											label="Images"
										></v-file-input>
										<v-btn color="primary"> Upload </v-btn>
									</v-container>
								</v-container>

								<v-container>
									<v-container>
										<h2 class="">Extracted text</h2>
									</v-container>
									<v-container>
										<v-textarea outlined label="Extracted text"></v-textarea>
										<v-btn color="primary"> Summarize </v-btn>
									</v-container>
								</v-container>

								<v-container>
									<v-container>
										<h2 class="">Summarized text</h2>
									</v-container>
									<v-container>
										<v-textarea outlined label="Summarized text"></v-textarea>
									</v-container>
								</v-container>
							</v-container>
						</v-sheet>
					</v-col>

					<v-col cols="12" sm="2">
						<v-sheet rounded="lg" min-height="268">
							<v-container>
								<div class="d-flex align-start">
									<img
										src="./assets/tech-emoij.png"
										height="25px"
										width="auto"
										alt="tech emoji"
									/>
									<h3 class="mx-2">Contributors</h3>
								</div>

								<v-list-item two-line>
									<v-list-item-content>
										<v-list-item-title>C.W Dissanayake</v-list-item-title>
										<v-list-item-subtitle>D/BCE/20/0009</v-list-item-subtitle>
										<br>
										<v-list-item-title>S.P.Gayanika</v-list-item-title>
										<v-list-item-subtitle>D/BCE/20/0007</v-list-item-subtitle>
										<br>
										<v-list-item-title>R.W.B.M.P.Nishadi</v-list-item-title>
										<v-list-item-subtitle>D/BSE/20/0018</v-list-item-subtitle>
										<br>
										<v-list-item-title>T.W.L.A.Perera</v-list-item-title>
										<v-list-item-subtitle>D/BCS/20/0010</v-list-item-subtitle>
										<br>
										<v-list-item-title>G.M.T.Amarasinghe</v-list-item-title>
										<v-list-item-subtitle>D/BCS/20/00012</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-container>
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
