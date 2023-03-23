

class Waktu {
    constructor(timeDiv) {
        this.timeDiv = timeDiv; // div to display time
        //this.alarmDiv = alarmDiv; // div to display alarm
        //this.alarmTime = alarmTime; // time to set alarm
        //this.alarmAudio = document.querySelector(this.alarmDiv + " #alarm_audio"); // audio element to play alarm
		
		let timeoutAudio = document.getElementById("alarm_audio")
		timeoutAudio.src = "media/audios/mixkit-security-facility-breach-alarm-994.wav";
		//timeoutAudio.src = "mixkit-security-facility-breach-alarm-994.wav"; //"http://soundbible.com/grab.php?id=1252&type=mp3";
		timeoutAudio.load();

        // set time on initial load
        let tim = document.querySelector(this.timeDiv);
        let t = new Date();
        let time = t.toLocaleTimeString([], {
			hourCycle: 'h23',
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
        tim.innerHTML = time;

        // update time every second
        setInterval(this.updateTime.bind(this), 1000);
    }
	
    updateTime() {
        let tim = document.querySelector(this.timeDiv);
        let t = new Date();
        let time = t.toLocaleTimeString([], {
			hourCycle: 'h23',
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
		tim.innerHTML = time;
		
		let subuh = document.getElementById("table-jdw-sholat-Subuh").innerText + ':00';
		let syuruq = document.getElementById("table-jdw-sholat-Syuruq").innerText + ':00';
		let dzuhur = document.getElementById("table-jdw-sholat-Dzuhur").innerText + ':00';
		let ashar = document.getElementById("table-jdw-sholat-Ashar").innerText + ':00';
		let maghrib = document.getElementById("table-jdw-sholat-Maghrib").innerText + ':00';
		let isya = document.getElementById("table-jdw-sholat-Isya").innerText + ':00';
		
		let lstSholat = [subuh, syuruq, dzuhur,ashar,maghrib,isya];
		// let lstSholat = ['08:08:00', '18:13:00', '18:06:15','17:51:00','15:56:00','15:57:00'];


		if ((time == lstSholat[0]) || (time == lstSholat[1]) || (time == lstSholat[2]) ||
			(time == lstSholat[3]) || (time == lstSholat[4]) || (time == lstSholat[5])) {
        if ((t.getDay() == 5  && (time == lstSholat[2])) || (time == lstSholat[1])) {
          // waktu khotbah atau syuruk
        } else {
          this.playAlarm();
          window.open("WaktuIqamah.html","_self");
          // window.open("http://binaqurani.sch.id/simaq/WaktuIqamah.html","_self");
        }
    }
		
		/*
        if (time == this.alarmTime) {
            this.playAlarm();
        }
		*/
    }


    /**
     * Play alarm when the time matches the alarm time
     */
    playAlarm() {
        //this.alarmAudio.currentTime = 0; // reset audio to start
        //this.alarmAudio.muted = false; // unmute audio

		
        document.getElementById("alarm_audio").play(); // play audio
    }

    turnOffAlarm(alarmAudio) {
        alarmAudio.muted = true; // mute audio
        document.querySelector(this.alarmDiv + " button").style.display = "none";
        document.body.style.background = 'url("/bg.jpg")';
    }
}
