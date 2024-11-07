const searchField = document.getElementById('searchField');
const searchBtn = document.getElementById('searchBtn');
const hotlineCardsContainer = document.getElementById('hotlineCardsContainer');
const resultsCount = document.getElementById('resultsCount');
const locatedCountryContainer = document.getElementById('locatedCountryContainer');
const locatedCountry = document.getElementById('locatedCountry');



function offlineAvailability() {
	fetch('https://google.com', {
		method: 'HEAD',
		mode: 'no-cors'
	}).then(() => {
		locatedCountryContainer.style.display = 'none';
		resultsCount.textContent = 'Try searching for a country';
		hotlineCardsContainer.innerHTML = `
			<div class="error flex flexCol" style="width: calc(100% - 30px); padding: 50px 15px; background: #FFFFFF; border-radius: 10px; border: 1px solid var(--whiteGray);">
				<p>Results will appear here</p>
			</div>
		`;
	}).catch(() => {
		locatedCountryContainer.style.display = 'none';
		resultsCount.textContent = 'Try searching for a country';
		hotlineCardsContainer.innerHTML = `
			<div class="error flex flexCol" style="width: calc(100% - 30px); padding: 50px 15px; background: #FFFFFF; border-radius: 10px; border: 1px solid var(--whiteGray);">
				<p>Results will appear here</p>
			</div>
		`;
	});
}
offlineAvailability();



async function getIPAddress() {
	return fetch('https://ipinfo.io/?token=a6384bf1fee5c5')
		.then(response => response.json())
		.then(data => {
			const country = data.country;
			locatedCountry.textContent = country;
			return country;
		})
		.catch(error => {
			console.error('Error in getIPAddress:', error);

			locatedCountryContainer.style.display = 'none';
			resultsCount.textContent = 'Try searching for a country';
			hotlineCardsContainer.innerHTML = `
				<div class="error flex flexCol" style="width: calc(100% - 30px); padding: 50px 15px; background: #FFFFFF; border-radius: 10px; border: 1px solid var(--whiteGray);">
					<p>Results will appear here</p>
				</div>
			`;

			throw error;
		});
}
getIPAddress();



let helplinesData = [];

async function getHelplines() {
	return fetch('information.min.json')
		.then(response => response.json())
		.then(data => {
			helplinesData = data;
			console.log('Helplines Data:', helplinesData);
			return helplinesData;
		})
		.catch(error => {
			console.error('Error in getHelplines:', error);
			throw error;
		});
}
getHelplines();



async function getHelplinesByCountry() {
	const country = await getIPAddress();
	const filteredHelplines = helplinesData.filter(helpline => {
		return helpline['alpha-2'].toLowerCase() === country.toLowerCase();
	});

	// Calculate total hotlines and numbers
	const totalHotlines = filteredHelplines.reduce((sum, country) => {
		return sum + country.hotlines.reduce((numberSum, hotline) => {
			return numberSum + hotline.numbers.length;
		}, 0);
	}, 0);

	// Update display text
	resultsCount.textContent = `Found ${totalHotlines} helplines in ${filteredHelplines[0].country}`;

	console.log('Filtered Helplines:', filteredHelplines);

	// Clear container
	hotlineCardsContainer.innerHTML = '';

	// Generate cards
	filteredHelplines.forEach(helpline => {
		helpline.hotlines.forEach(hotline => {
			hotline.numbers.forEach(number => {
				const hotlineCard = document.createElement('div');
				hotlineCard.classList.add('hotlineCard', 'flex', 'flexRow');

				hotlineCard.innerHTML = `
							<span class="details flex flexCol" style="gap: 10px;">
								<h3>${hotline.name}</h3>
								<span class="location flex flexRow"
									style="font-weight: 500; text-transform: uppercase; gap: 10px; user-select: none; padding: 5px 8px; background: #ECECEC; border-radius: 6px;">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
										fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path
											d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
									</svg>
									<span>${helpline['country']}</span>
								</span>
							</span>
							<a href="tel:${number}" class="flex flexRow" style="gap: 8px;">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
									<path d="M15 5h6" />
									<path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5" />
								</svg>
								${number}
							</a>
						`;

				hotlineCardsContainer.appendChild(hotlineCard);
			});
		});
	});
}
getHelplinesByCountry();



searchBtn.addEventListener('click', () => {
	if (searchField.value.trim() === '' || searchField.value.trim() === ' ') {
		getHelplinesByCountry();
		return;
	} else {
		const searchValue = searchField.value;
		console.log('Search Value:', searchValue);

		const filteredHelplines = helplinesData.filter(helpline => {
			return helpline.country.toLowerCase().includes(searchValue.toLowerCase());
		});

		// Calculate total hotlines and numbers
		const totalHotlines = filteredHelplines.reduce((sum, country) => {
			return sum + country.hotlines.reduce((numberSum, hotline) => {
				return numberSum + hotline.numbers.length;
			}, 0);
		}, 0);

		// Update display text
		resultsCount.textContent = `Found ${totalHotlines} results for "${searchValue}"`;

		console.log('Filtered Helplines:', filteredHelplines);

		// Clear container
		hotlineCardsContainer.innerHTML = '';

		// Generate cards
		filteredHelplines.forEach(helpline => {
			helpline.hotlines.forEach(hotline => {
				hotline.numbers.forEach(number => {
					const hotlineCard = document.createElement('div');
					hotlineCard.classList.add('hotlineCard', 'flex', 'flexRow');

					hotlineCard.innerHTML = `
							<span class="details flex flexCol" style="gap: 10px;">
								<h3>${hotline.name}</h3>
								<span class="location flex flexRow"
									style="font-weight: 500; text-transform: uppercase; gap: 10px; user-select: none; padding: 5px 8px; background: #ECECEC; border-radius: 6px;">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
										fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path
											d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
									</svg>
									<span>${helpline['country']}</span>
								</span>
							</span>
							<a href="tel:${number}" class="flex flexRow" style="gap: 8px;">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
									<path d="M15 5h6" />
									<path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5" />
								</svg>
								${number}
							</a>
						`;

					hotlineCardsContainer.appendChild(hotlineCard);
				});
			});
		});
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		searchBtn.click();
	}
});

searchField.addEventListener('input', () => {
	if (searchField.value.trim() === '' || searchField.value.trim() === ' ') {
		getHelplinesByCountry();
	} else {
		searchBtn.click();
	}
});



const scrollToTopBtn = document.getElementById("toTopBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.opacity = "1";
		scrollToTopBtn.style.transition = "0.2s";
	} else {
		scrollToTopBtn.style.opacity = "0";
		scrollToTopBtn.style.transition = "0.2s";
	}
}

scrollToTopBtn.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});