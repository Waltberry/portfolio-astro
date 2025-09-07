declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"cv": {
"1_ProfessionalSummary.md": {
	id: "1_ProfessionalSummary.md";
  slug: "1_professionalsummary";
  body: string;
  collection: "cv";
  data: any
} & { render(): Render[".md"] };
"2_CoreSkills.md": {
	id: "2_CoreSkills.md";
  slug: "2_coreskills";
  body: string;
  collection: "cv";
  data: any
} & { render(): Render[".md"] };
"3_Licenses&Certification.md": {
	id: "3_Licenses&Certification.md";
  slug: "3_licensescertification";
  body: string;
  collection: "cv";
  data: any
} & { render(): Render[".md"] };
"4_Education&Awards.md": {
	id: "4_Education&Awards.md";
  slug: "4_educationawards";
  body: string;
  collection: "cv";
  data: any
} & { render(): Render[".md"] };
"5_Experience.md": {
	id: "5_Experience.md";
  slug: "5_experience";
  body: string;
  collection: "cv";
  data: any
} & { render(): Render[".md"] };
"6_Projects.md": {
	id: "6_Projects.md";
  slug: "6_projects";
  body: string;
  collection: "cv";
  data: any
} & { render(): Render[".md"] };
"7_Job_Simulations.md": {
	id: "7_Job_Simulations.md";
  slug: "7_job_simulations";
  body: string;
  collection: "cv";
  data: any
} & { render(): Render[".md"] };
};
"projects": {
"a-new-era-of-data-analysis-in-baseball.md": {
	id: "a-new-era-of-data-analysis-in-baseball.md";
  slug: "a-new-era-of-data-analysis-in-baseball";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"a-visual-history-of-nobel-prize-winners.md": {
	id: "a-visual-history-of-nobel-prize-winners.md";
  slug: "a-visual-history-of-nobel-prize-winners";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"analyze-international-debt-statistics-sql.md": {
	id: "analyze-international-debt-statistics-sql.md";
  slug: "analyze-international-debt-statistics-sql";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"analyzing-american-baby-name-trends-sql.md": {
	id: "analyzing-american-baby-name-trends-sql.md";
  slug: "analyzing-american-baby-name-trends-sql";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"analyzing-nyc-public-school-test-scores-sql.md": {
	id: "analyzing-nyc-public-school-test-scores-sql.md";
  slug: "analyzing-nyc-public-school-test-scores-sql";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"analyzing-tv-data-super-bowl.md": {
	id: "analyzing-tv-data-super-bowl.md";
  slug: "analyzing-tv-data-super-bowl";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"arduino-temperature-warning-system-iot.md": {
	id: "arduino-temperature-warning-system-iot.md";
  slug: "arduino-temperature-warning-system-iot";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"asl-recognition-with-deep-learning.md": {
	id: "asl-recognition-with-deep-learning.md";
  slug: "asl-recognition-with-deep-learning";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"bad-passwords-and-the-nist-guidelines.md": {
	id: "bad-passwords-and-the-nist-guidelines.md";
  slug: "bad-passwords-and-the-nist-guidelines";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"bank-account-simulator.md": {
	id: "bank-account-simulator.md";
  slug: "bank-account-simulator";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"battery-monitoring-control-iot-device.md": {
	id: "battery-monitoring-control-iot-device.md";
  slug: "battery-monitoring-control-iot-device";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"classify-song-genres-from-audio-data.md": {
	id: "classify-song-genres-from-audio-data.md";
  slug: "classify-song-genres-from-audio-data";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"credit-card-validator.md": {
	id: "credit-card-validator.md";
  slug: "credit-card-validator";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"customer-churn-prediction-in-a-telecom-company.md": {
	id: "customer-churn-prediction-in-a-telecom-company.md";
  slug: "customer-churn-prediction-in-a-telecom-company";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"data-driven-insights-for-donor-selection.md": {
	id: "data-driven-insights-for-donor-selection.md";
  slug: "data-driven-insights-for-donor-selection";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"disney-movies-and-box-office-success.md": {
	id: "disney-movies-and-box-office-success.md";
  slug: "disney-movies-and-box-office-success";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"do-left-handed-people-really-die-young.md": {
	id: "do-left-handed-people-really-die-young.md";
  slug: "do-left-handed-people-really-die-young";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"dr-semmelweis-and-the-discovery-of-handwashing.md": {
	id: "dr-semmelweis-and-the-discovery-of-handwashing.md";
  slug: "dr-semmelweis-and-the-discovery-of-handwashing";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"e-commerce-recommender-system.md": {
	id: "e-commerce-recommender-system.md";
  slug: "e-commerce-recommender-system";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"exploring-the-bitcoin-cryptocurrency-market.md": {
	id: "exploring-the-bitcoin-cryptocurrency-market.md";
  slug: "exploring-the-bitcoin-cryptocurrency-market";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"exploring-the-evolution-of-linux.md": {
	id: "exploring-the-evolution-of-linux.md";
  slug: "exploring-the-evolution-of-linux";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"exploring-the-history-of-lego.md": {
	id: "exploring-the-history-of-lego.md";
  slug: "exploring-the-history-of-lego";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"exploring-the-nyc-airbnb-market.md": {
	id: "exploring-the-nyc-airbnb-market.md";
  slug: "exploring-the-nyc-airbnb-market";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"find-movie-similarities-from-plot-summaries.md": {
	id: "find-movie-similarities-from-plot-summaries.md";
  slug: "find-movie-similarities-from-plot-summaries";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"fine-tune-bert-for-text-classification.md": {
	id: "fine-tune-bert-for-text-classification.md";
  slug: "fine-tune-bert-for-text-classification";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"ge-automate-the-landing-of-an-aircraft.md": {
	id: "ge-automate-the-landing-of-an-aircraft.md";
  slug: "ge-automate-the-landing-of-an-aircraft";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"generating-keywords-for-google-ads.md": {
	id: "generating-keywords-for-google-ads.md";
  slug: "generating-keywords-for-google-ads";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"hyperparameter-tuning-with-keras-tuner.md": {
	id: "hyperparameter-tuning-with-keras-tuner.md";
  slug: "hyperparameter-tuning-with-keras-tuner";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"investigating-netflix-movies-and-guest-stars-in-the-office.md": {
	id: "investigating-netflix-movies-and-guest-stars-in-the-office.md";
  slug: "investigating-netflix-movies-and-guest-stars-in-the-office";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"mobile-games-a-b-testing-cookie-cats.md": {
	id: "mobile-games-a-b-testing-cookie-cats.md";
  slug: "mobile-games-a-b-testing-cookie-cats";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"na-ve-bees-image-loading-and-processing.md": {
	id: "na-ve-bees-image-loading-and-processing.md";
  slug: "na-ve-bees-image-loading-and-processing";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"na-ve-bees-predict-species-from-images.md": {
	id: "na-ve-bees-predict-species-from-images.md";
  slug: "na-ve-bees-predict-species-from-images";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"name-game-gender-prediction-using-sound.md": {
	id: "name-game-gender-prediction-using-sound.md";
  slug: "name-game-gender-prediction-using-sound";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"object-localization-with-tensorflow.md": {
	id: "object-localization-with-tensorflow.md";
  slug: "object-localization-with-tensorflow";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"optimizing-online-sports-retail-revenue-sql.md": {
	id: "optimizing-online-sports-retail-revenue-sql.md";
  slug: "optimizing-online-sports-retail-revenue-sql";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"predicting-credit-card-approvals.md": {
	id: "predicting-credit-card-approvals.md";
  slug: "predicting-credit-card-approvals";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"recreating-john-snow-s-ghost-map.md": {
	id: "recreating-john-snow-s-ghost-map.md";
  slug: "recreating-john-snow-s-ghost-map";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"reducing-traffic-mortality-in-the-usa.md": {
	id: "reducing-traffic-mortality-in-the-usa.md";
  slug: "reducing-traffic-mortality-in-the-usa";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"staff-management-api.md": {
	id: "staff-management-api.md";
  slug: "staff-management-api";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"stock-monitor.md": {
	id: "stock-monitor.md";
  slug: "stock-monitor";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"streamlining-employee-data.md": {
	id: "streamlining-employee-data.md";
  slug: "streamlining-employee-data";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"superhero-name-generator-with-tensorflow.md": {
	id: "superhero-name-generator-with-tensorflow.md";
  slug: "superhero-name-generator-with-tensorflow";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"the-android-app-market-on-google-play.md": {
	id: "the-android-app-market-on-google-play.md";
  slug: "the-android-app-market-on-google-play";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"the-github-history-of-the-scala-language.md": {
	id: "the-github-history-of-the-scala-language.md";
  slug: "the-github-history-of-the-scala-language";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"the-hottest-topics-in-machine-learning.md": {
	id: "the-hottest-topics-in-machine-learning.md";
  slug: "the-hottest-topics-in-machine-learning";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"tweet-emotion-recognition.md": {
	id: "tweet-emotion-recognition.md";
  slug: "tweet-emotion-recognition";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"what-where-are-the-world-s-oldest-businesses.md": {
	id: "what-where-are-the-world-s-oldest-businesses.md";
  slug: "what-where-are-the-world-s-oldest-businesses";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"when-was-the-golden-age-of-video-games-sql.md": {
	id: "when-was-the-golden-age-of-video-games-sql.md";
  slug: "when-was-the-golden-age-of-video-games-sql";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"which-debts-are-worth-the-bank-s-effort.md": {
	id: "which-debts-are-worth-the-bank-s-effort.md";
  slug: "which-debts-are-worth-the-bank-s-effort";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"who-is-drunk-and-when-in-ames-iowa.md": {
	id: "who-is-drunk-and-when-in-ames-iowa.md";
  slug: "who-is-drunk-and-when-in-ames-iowa";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"who-s-tweeting-trump-or-trudeau.md": {
	id: "who-s-tweeting-trump-or-trudeau.md";
  slug: "who-s-tweeting-trump-or-trudeau";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"word-frequency-in-classic-novels.md": {
	id: "word-frequency-in-classic-novels.md";
  slug: "word-frequency-in-classic-novels";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"writing-functions-for-product-analysis.md": {
	id: "writing-functions-for-product-analysis.md";
  slug: "writing-functions-for-product-analysis";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
