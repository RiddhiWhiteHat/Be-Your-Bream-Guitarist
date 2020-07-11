// Click/Touch the guitar to play!
stringStringyness = 2;
MorphSVGPlugin.convertToPath("circle");

/*
	*	Bass Guitar Stuff
	*/

// Varibles for the animation
bass_guitar = document.getElementById('Bass_Guitar_1_');
bass_stringStraight_1 = document.getElementById('stringStraight_1');
bass_stringPlucked_1 = document.getElementById('stringPlucked_1');
bass_stringStraight_2 = document.getElementById('stringStraight_2');
bass_stringPlucked_2 = document.getElementById('stringPlucked_2');
bass_stringStraight_3 = document.getElementById('stringStraight_3');
bass_stringPlucked_3 = document.getElementById('stringPlucked_3');
bass_stringStraight_4 = document.getElementById('stringStraight_4');
bass_stringPlucked_4 = document.getElementById('stringPlucked_4');
bass_note_1 = document.getElementById('note-1_1_');
bass_note_2 = document.getElementById('note-2_1_');
bass_note_3 = document.getElementById('note-3_1_');
bass_note_4 = document.getElementById('note-4_1_');
bass_spark_1 = document.getElementById('spark-1_2_');
bass_spark_2 = document.getElementById('spark-3_2_');
bass_spark_3 = document.getElementById('spark-4_2_');
bass_speaker_1 = document.getElementById('bass-Amp-Speaker');

// Declare timeline
var bass_pluck = new TimelineMax({
	paused: true
})

// String Animtaions
bass_pluck.to(bass_stringStraight_1, 0.1, {ease: Expo.easeOut,morphSVG: {points: bass_stringPlucked_1.getAttribute('points')}})
					.to(bass_stringStraight_1, 1, {morphSVG: {points: bass_stringStraight_1.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)})

					.to(bass_stringStraight_2, 0.1, {ease: Expo.easeOut,morphSVG: {points: bass_stringPlucked_2.getAttribute('points')}}, "-=1.1")
					.to(bass_stringStraight_2, 1, {morphSVG: {points: bass_stringStraight_2.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness,0.04)}, "-=1")

					.to(bass_stringStraight_3, 0.1, {ease: Expo.easeOut,morphSVG: {points: bass_stringPlucked_3.getAttribute('points')}}, "-=1.1")
					.to(bass_stringStraight_3, 1, {morphSVG: {points: bass_stringStraight_3.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

					.to(bass_stringStraight_4, 0.1, {ease: Expo.easeOut,morphSVG: {points: bass_stringPlucked_4.getAttribute('points')}}, "-=1.1")
					.to(bass_stringStraight_4, 1, {morphSVG: {points: bass_stringStraight_4.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")
// bass_note Animations
					.to(bass_note_1, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(bass_note_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(bass_note_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(bass_note_2, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(bass_note_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(bass_note_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(bass_note_3, 0.4, {x:"-20%", y:"-50%"}, "-=1.1")
					.to(bass_note_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(bass_note_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(bass_note_4, 0.4, {x:"50%", y:"-25%"}, "-=1.1")
					.to(bass_note_4, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(bass_note_4, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")
// Sparks Animations
					.to(bass_spark_1, 0.4, {x:"-50%", y:"50%"}, "-=1.1")
					.to(bass_spark_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(bass_spark_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(bass_spark_2, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(bass_spark_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(bass_spark_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(bass_spark_3, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(bass_spark_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(bass_spark_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")
// Speaker Animtaions
					.to(bass_speaker_1, 0.1, {scale: 1.015, transformOrigin: "50% 50%", ease: Expo.easeOut}, "-=1.1")
	    .to(bass_speaker_1, 0.3, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut}, "-=1");

bassAudioE1 = document.getElementById("Bass-E1");
bassAudioF1 = document.getElementById("Bass-F1");
bassAudioFS1 = document.getElementById("Bass-FS1");
bassAudioG1 = document.getElementById("Bass-G1");
bassAudioA1 = document.getElementById("Bass-A1");
bassAudioAS1 = document.getElementById("Bass-AS1");
bassAudioC2 = document.getElementById("Bass-C2");

// Trigger Audio
var i = 0;
function playBassAudio() {
	++i;
	if (i === 1) {
		bassAudioE1.currentTime = 0;
		bassAudioE1.play();
	} else if (i === 2) {
		bassAudioF1.currentTime = 0;
		bassAudioF1.play();
	} else if (i === 3) {
		bassAudioFS1.currentTime = 0;
		bassAudioFS1.play();
	} else if (i > 3 && i < 21) {
		bassAudioG1.currentTime = 0;
		bassAudioG1.play();
	} else if (i === 21 || i === 22 || i === 23) {
		bassAudioC2.currentTime = 0;
		bassAudioC2.play();
	} else if (i === 24) {
		bassAudioAS1.currentTime = 0;
		bassAudioAS1.play();
	} else if (i > 24 && i < 29) {
		bassAudioG1.currentTime = 0;
		bassAudioG1.play();
	} else if (i === 29 ) {
		bassAudioA1.currentTime = 0;
		bassAudioA1.play();
		i = 0;
	}
}

function rockOutBass() {
	bass_pluck.restart();
	bass_pluck.play();
	playBassAudio();
}

//Do the stuff when clicked
bass_guitar.addEventListener("click", rockOutBass);

/*
	*	Guitar Stuff
	*/

// Varibles for the animation
guitar = document.getElementById('guitar_2_');
stringStraight_6_ = document.getElementById('stringStraight_6_');
stringPlucked_6_ = document.getElementById('stringPlucked_6_');
stringStraight_7_ = document.getElementById('stringStraight_7_');
stringPlucked_7_ = document.getElementById('stringPlucked_7_');
stringStraight_8_ = document.getElementById('stringStraight_8_');
stringPlucked_8_ = document.getElementById('stringPlucked_8_');
stringStraight_9_ = document.getElementById('stringStraight_9_');
stringPlucked_9_ = document.getElementById('stringPlucked_9_');
stringStraight_10_ = document.getElementById('stringStraight_10_');
stringPlucked_10_ = document.getElementById('stringPlucked_10_');
stringStraight_11_ = document.getElementById('stringStraight_11_');
stringPlucked_11_ = document.getElementById('stringPlucked_11_');
speaker_1 = document.getElementById('speaker-1');
speakerWobble_1 = document.getElementById('speaker-wobble-1');
speaker_2 = document.getElementById('speaker-2');
speakerWobble_2 = document.getElementById('speaker-wobble-2');
note_1 = document.getElementById('note-1_2_');
note_2 = document.getElementById('note-2_2_');
note_3 = document.getElementById('note-3_2_');
note_4 = document.getElementById('note-4_2_');
spark_1 = document.getElementById('spark-1');
spark_2 = document.getElementById('spark-3');
spark_3 = document.getElementById('spark-4');

//Declare timeline
var pluck = new TimelineMax({
	paused: true
})

//String Animtaions
pluck.to(stringStraight_6_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_6_.getAttribute('points')}})
					.to(stringStraight_6_, 1, {morphSVG: {points: stringStraight_6_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)})

					.to(stringStraight_7_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_7_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_7_, 1, {morphSVG: {points: stringStraight_7_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness,0.04)}, "-=1")

					.to(stringStraight_8_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_8_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_8_, 1, {morphSVG: {points: stringStraight_8_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

					.to(stringStraight_9_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_9_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_9_, 1, {morphSVG: {points: stringStraight_9_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")
					
					.to(stringStraight_10_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_10_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_10_, 1, {morphSVG: {points: stringStraight_10_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

					.to(stringStraight_11_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_11_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_11_, 1, {morphSVG: {points: stringStraight_11_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")
// Note Animations
					.to(note_1, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(note_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_2, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(note_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_3, 0.4, {x:"-20%", y:"-50%"}, "-=1.1")
					.to(note_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_4, 0.4, {x:"50%", y:"-25%"}, "-=1.1")
					.to(note_4, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_4, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")
// Sparks Animations
					.to(spark_1, 0.4, {x:"-50%", y:"50%"}, "-=1.1")
					.to(spark_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(spark_2, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(spark_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(spark_3, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(spark_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")
// Speaker Animtaions
					.to(speaker_1, 0.1, {ease: Expo.easeOut,morphSVG:speakerWobble_1}, "-=1.1")
					.to(speaker_1, 0.4, {morphSVG:speaker_1,ease: Elastic.easeOut}, "-=1")

					.to(speaker_2, 0.1, {ease: Expo.easeOut,morphSVG:speakerWobble_2}, "-=1.05")
					.to(speaker_2, 0.4, {morphSVG:speaker_2,ease: Elastic.easeOut}, "-=0.95");

// Trigger Audio
var i = 0;
function playGuitarAudio() {
	if (i < 12) {
		++i;
	} else {
		i = 1;
	}
	var guitarAudio = document.getElementById("audio-" + i);
	guitarAudio.play();
}

function rockOutGuitar() {
	pluck.restart();
	pluck.play();
	playGuitarAudio()
}

// Do the stuff when clicked
guitar.addEventListener("click", rockOutGuitar);