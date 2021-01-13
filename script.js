const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	//loop over each sound array
	btn.innerText = sound;
	//  <div id="buttons"></div>;
	document.getElementById('buttons').appendChild(btn);
});
