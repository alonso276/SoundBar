const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	//loop over each sound array
	btn.innerText = sound;
	//  <div id="buttons"></div>;

	btn.addEventListener('click', () => {
		//id is same as sound
		//method play

		//function call stopSongs
		stopSongs();

		document.getElementById(sound).play();
	});

	document.getElementById('buttons').appendChild(btn);
});

// function stopSongs
function stopSongs() {
	sounds.forEach((sound) => {
		const song = document.getElementById(sound);

		//method pause
		song.pause();
		song.currentTime = 0;
	});
}
