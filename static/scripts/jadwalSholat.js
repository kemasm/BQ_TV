
function jadwal_sholat_depag(){
//------Begin Program
	//setInterval(jadwal_sholat_depag,1000) //14400000
	// prayTimes.tune({imsak:2,subuh:2,dhuhur:2,ashar:2,maghrib:2,isya:2,sunrise:15});
	prayTimes.tune({imsak:0,subuh:0,dhuhur:0,ashar:0,maghrib:0,isya:0,sunrise:15});

	var date=new Date();
	/*var times=prayTimes.getTimes(date,geo,timezone);*/
	var timesholat=prayTimes.getTimes(date,[-6.58916600,106.79299900,250.89],+7);
	var list=["Subuh","Dhuhur","Ashar","Maghrib","Isya", "imsak", "sunrise"];
	var thisday=date.getDay();
	var thismonth=date.getMonth();
	var thisdate=date.getDate();
	var thisyear=date.getFullYear();
	var months=new Array("Januari","Pebruari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
	var name_of_days=new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu");
	var day_name=name_of_days[thisday];
	var monthname=months[thismonth];
	var tanggal=day_name+", "+thisdate+" "+monthname+" "+thisyear;
	
	/*if(timezone==+7){tz="WIB"}
	else if(timezone==+8){tz="WITA"}
	else if(timezone==+9){tz="WIT"}
	else tz="";*/

	tz="";
		//document.getElementById('table-jdw-sholat-Imsak').innerHTML=timesholat[list[5].toLowerCase()]+ ' ' + ' '+tz;
		document.getElementById('table-jdw-sholat-Subuh').innerHTML=timesholat[list[0].toLowerCase()]+ ' ' + ' '+tz;
		document.getElementById('table-jdw-sholat-Syuruq').innerHTML=timesholat[list[6].toLowerCase()]+ ' ' + ' '+tz;
		document.getElementById('table-jdw-sholat-Dzuhur').innerHTML=timesholat[list[1].toLowerCase()]+ ' ' + ' '+tz;
		document.getElementById("table-jdw-sholat-Ashar").innerHTML=timesholat[list[2].toLowerCase()]+ ' ' + ' '+tz;
		document.getElementById('table-jdw-sholat-Maghrib').innerHTML=timesholat[list[3].toLowerCase()]+ ' ' + ' '+tz;
		document.getElementById('table-jdw-sholat-Isya').innerHTML=timesholat[list[4].toLowerCase()]+ ' ' + ' '+tz;
		
}


