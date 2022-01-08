<template>
	<v-app id="inspire">
		<v-app-bar app color="white" flat>
			<v-container>
				<img height="30px" width="auto" src="./assets/logo-main.svg" />
			</v-container>
		</v-app-bar>

		<v-main class="grey lighten-3">
			<!-- error messages -->
			<v-alert v-if="noFilesError" class="rounded-0" dense type="error">{{
				noFilesError
			}}</v-alert>
			<v-alert v-if="apiError" class="rounded-0" dense type="error">{{
				apiError
			}}</v-alert>
			<v-alert v-if="parseError" class="rounded-0" dense type="error">{{
				parseError
			}}</v-alert>

			<v-container>
				<v-row>
					<!-- about section -->
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
									AccuText is as a text recognizer and a summarizer which can
									extract and summarize text from uploaded images. Start by
									uploading your images and clicking the upload button to get
									the extracted text and click summarize button to get the
									summarized text.
								</p>
							</v-container>
						</v-sheet>
					</v-col>

					<!-- main app -->
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
											placeholder="Select images to upload"
										></v-file-input>
										<v-btn color="primary" @click="uploadFiles"> Upload </v-btn>
									</v-container>
								</v-container>

								<v-container>
									<v-container>
										<h2 class="">Extracted text</h2>
									</v-container>
									<v-container>
										<v-textarea
											outlined
											label="Extracted test"
											:value="extractedText"
										></v-textarea>
									</v-container>
									<v-container>
										<v-textarea
											outlined
											label="Summarized test"
											:value="summarizedText"
										></v-textarea>
										<v-btn color="primary" @click="getSummary">
											Summarize
										</v-btn>
									</v-container>
								</v-container>
							</v-container>
						</v-sheet>
					</v-col>

					<!-- contributors -->
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

								<v-list>
									<v-list-item
										v-for="contributor in contributors"
										:key="contributor.sid"
										two-line
									>
										<v-list-item-content>
											<v-list-item-title>
												{{ contributor.name }}
											</v-list-item-title>
											<v-list-item-subtitle>
												{{ contributor.sid }}
											</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-list>
							</v-container>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>

			<!-- uploading files -->
			<v-snackbar v-model="snackbar">
				{{ uploadMessage }}

				<template v-slot:action="{ attrs }">
					<v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
						Close
					</v-btn>
				</template>
			</v-snackbar>

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
		// app data
		parsedFiles: [],
		extractedText: '',
		extractedToSummary: '',
		summarizedText: '',
		// misc
		contributors: [
			{
				name: 'C.W Dissanayake',
				sid: 'D/BCE/20/0009',
			},
			{
				name: 'T.W.L.A Perera',
				sid: 'D/BCS/20/0010',
			},
			{
				name: 'S.P Gayanika',
				sid: 'D/BCE/20/0007',
			},
			{
				name: 'R.W.B.M.P Nishadi',
				sid: 'D/BSE/20/0018',
			},
			{
				name: 'G.M.T Amarasinghe',
				sid: 'D/BCS/20/00012',
			},
		],

		// info messages
		snackbar: false,
		uploadMessage: 'Your files are being processed',

		// error messages
		noFilesError: '',
		parseError: '',
		apiError: '',
	}),
	methods: {
		parseFiles(files) {
			// remove file errors
			this.noFilesError = '';
			this.parseError = '';

			files.forEach(async (file) => {
				// handle parse error
				try {
					const b64_string = await this.toBase64(file);
					this.parsedFiles.push({
						name: file.name,
						image: b64_string.split(',')[1],
					});
				} catch (error) {
					this.parseError = `${error.message}`;
				}
			});
		},
		uploadFiles() {
			// add loading button
			// handle 0 files
			if (this.parsedFiles.length === 0) {
				this.noFilesError = 'No files are selected. Please select some images';
				return;
			}
			this.snackbar = true;
			axios
				.post('http://127.0.0.1:3001/api/ocr/s/multi', this.parsedFiles)
				.then((response) => {
					response.data.forEach((textObj) => {
						this.extractedText += `${textObj.name}\n`;
						this.extractedText += `${textObj.text}\n\n`;

						this.extractedToSummary += `${textObj.text}`;
					});
				})
				.catch((error) => {
					this.apiError = `${error.message}. Please try again later`;
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
		getSummary() {
			// handle no text
			axios
				.post('http://127.0.0.1:3001/api/summary', {
					text: this.extractedToSummary,
				})
				.then((response) => {
					this.summarizedText = response.data.summary;
				})
				.catch((error) => {
					console.log(error.message);
				});
		},
	},
};
</script>
