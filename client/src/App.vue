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
								<p class="body-1">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
									corporis autem, pariatur mollitia maiores quidem nisi minima
									maxime at, debitis eaque illo nulla amet? Minus officiis ut
									quasi minima voluptatem!
								</p>
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
											@change="parseFiles"
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
										<v-btn color="primary" @click="uploadFiles"> Upload </v-btn>
									</v-container>
								</v-container>

								<v-container>
									<v-container>
										<h2 class="">Detected text</h2>
									</v-container>
									<v-container>
										<v-textarea outlined label="Detected test" :value="extractedText"></v-textarea>
										<v-btn color="primary"> Summarize </v-btn>
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
import axios from 'axios';
export default {
	data: () => ({
		parsedFiles: [],
		extractedText: ""
	}),
	methods: {
		parseFiles(files) {
			files.forEach(async (file) => {
				const b64_string = await this.toBase64(file);
				this.parsedFiles.push({
					name: file.name,
					image: b64_string.split(',')[1],
				});
			});
		},
		uploadFiles() {
			axios
				.post('http://127.0.0.1:3001/api/ocr/s/multi', this.parsedFiles)
				.then((response) => {
					console.log(response.data);
					response.data.forEach(textObj=>{
						this.extractedText += textObj.text;
						this.extractedText += "\n\n\n"
					})
				})
				.catch((error) => {
					console.log(error);
				});
		},
		toBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve(reader.result);
				reader.onerror = (error) => reject(error);
			});
		},
	},
};
</script>
