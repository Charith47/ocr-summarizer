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
			<v-alert v-if="noTextError" class="rounded-0" dense type="error">{{
				noTextError
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
						<v-sheet min-height="60vh" rounded="lg">
							<v-container>
								<v-container>
									<v-container class="d-flex justify-space-between">
										<h2 style="display: inline">Upload your images</h2>
										<v-btn color="red lighten-1" icon @click="clearAll"
											><v-icon>mdi-delete</v-icon></v-btn
										>
									</v-container>

									<!-- file uploader -->
									<v-container>
										<v-file-input
											ref="fileupload"
											@change="parseFiles"
											@click:clear="clearFiles"
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
										<v-btn
											color="#6989ff"
											class="white--text"
											@click="uploadFiles"
										>
											Upload
										</v-btn>
									</v-container>
								</v-container>

								<v-divider></v-divider>
								<v-container>
									<v-row>
										<!-- Extracted text view -->
										<v-col>
											<v-container>
												<h2>Extracted text</h2>
											</v-container>
											<span></span>
											<v-container>
												<v-textarea
													height="250"
													no-resize
													outlined
													placeholder="Extracted text"
													label="Extracted text"
													v-model="extractedText"
												></v-textarea>
												<v-btn
													color="#6989ff"
													class="white--text"
													@click="getSummary"
												>
													Summarize
												</v-btn>
											</v-container>
										</v-col>

										<!-- Summarized text view -->
										<v-col>
											<v-container class="px-0">
												<h2>Summarized text</h2>
											</v-container>
											<v-container class="px-0">
												<v-textarea
													height="250"
													no-resize
													outlined
													placeholder="Summarized text"
													label="Summarized text"
													v-model="summarizedText"
												></v-textarea>
											</v-container>
										</v-col>
									</v-row>
									<span class="px-3">
										<h5 style="display: inline">
											Word count •
											<p style="display: inline">
												Extracted
												<span class="red--text">{{
													wordCount(this.extractedText)
												}}</span>
												|
											</p>
											<p style="display: inline">
												Summary
												<span class="blue--text">{{
													wordCount(this.summarizedText)
												}}</span>
											</p>
										</h5></span
									>
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

			<!-- uploading files snackbar -->
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
		noTextError: '',
	}),
	methods: {
		clearFiles() {
			this.parsedFiles = [];
		},
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
			this.noTextError = '';
			this.apiError = '';

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
						this.extractedText += `${textObj.text}\n`;
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
			if (this.extractedText.trim() === '') {
				this.noTextError = 'Error. No text to summarize';
				return;
			}
			axios
				.post('http://127.0.0.1:3001/api/summary', {
					text: this.extractedText,
				})
				.then((response) => {
					this.summarizedText = response.data.summary;
				})
				.catch((error) => {
					console.log(error.message);
				});
		},
		getWordCount() {
			return this.wordCount;
		},
		clearAll() {
			this.$refs.fileupload.reset();
			this.parsedFiles = [];
			this.extractedText = '';
			this.summarizedText = '';
		},
	},
	computed: {
		wordCount() {
			return (text) => text.match(/\s+/g)?.length || 0;
		},
	},
};
</script>
