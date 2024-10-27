// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Juan',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '51954fc9d6a7fc3c55c4b3a1fc2b4fc2', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '6.246310',
	defaultLongitude: '-75.566480',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Gmail.',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/1/#inbox',
		},
		{
			id: '2',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.notion.so/week',
		},
		{
			id: '3',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '4',
			name: 'Music',
			icon: 'music',
			link: 'https://music.youtube.com/',
		},
		{
			id: '5',
			name: 'Keep',
			icon: 'lightbulb',
			link: 'https://keep.google.com/',
		},
		{
			id: '6',
			name: 'X',
			icon: 'twitter',
			link: 'http://twitter.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{
					name: 'Correo U',
					link: 'https://mail.google.com/mail/u/2/#inbox',
				},
				{
					name: 'UdeA',
					link: 'https://www.udea.edu.co/wps/portal/udea/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIj8nKt8jNTrMoLivV88tMz8_QLsh0VAZSk7Xs!/',
				},
				{
					name: 'Classroom',
					link: 'https://classroom.google.com/u/2/h?hl=es&pli=1',
				},
				{
					name: 'Ingenia',
					link: 'https://virtualingenieriaudea.co/login/index.php',
				},
			],
		},
		{
			icon: 'lightbulb',
			id: '2',
			links: [
				{
					name: 'ChatGPT',
					link: 'https://chat.openai.com/chat',
				},
				{
					name: 'Gemini',
					link: 'https://gemini.google.com/app',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/drive/u/1/my-drive',
				},
				{
					name: 'FMHY',
					link: 'https://fmhy.net/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
