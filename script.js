// membuat mode
const slider = document.querySelector('input[type=range]');
slider.addEventListener('click',function(){
	// mengambil nilai min max input
	const mode = slider.value;
	const container = document.querySelector('.container');
	if ( mode == 1){
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
		// container.style.backgroundColor = 'grey'
	}else{
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
		// container.style.backgroundColor = 'red'
	}
	
});
























// membuat function pilihan computer
function getPilihanComputer(){
	var comp =Math.round( Math.random() * 9 + 1);
	if ( comp < 3){
		return 'batu';
	}else if ( comp >= 3 && comp < 7){
		return 'kertas';
	}else{
		return 'gunting';
	}
}

// membuat function pilihan player
function getHasil(comp,player){
	// rules permainan
	if ( comp == player){
		return 'SERI'
	}else if ( player == 'batu'){
		return ( comp == 'kertas' ) ? 'Kalah' : 'Menang'
	}else if ( player == 'kertas'){
		return ( comp == 'gunting') ? 'Kalah' : 'Menang';
	}else if ( player == 'gunting'){
		return ( comp == 'batu') ? 'Kalah' : 'Menang'
	}
}

// membuat event 


// seleksi pilihan batu
const pbatu = document.querySelector('.batu');
// membuat event click


// pengulangan dengan foreach
const display = document.querySelectorAll('.areaPlayer ul li img');
display.forEach( function(index){
	// yang ditambahkan event adalah indexnya
	index.addEventListener('click', function(){

	const pilihanComputer = getPilihanComputer();
	// class pilihanplayer mengambil dari nama class-nya
	const pilihanPlayer = index.className;

	// hasil
	const hasil = getHasil(pilihanComputer,pilihanPlayer)

	// menambah attribue pada image gambar agar gambar dpat berubah
	const setImgComputer = document.querySelector('.imgComputer');
	// menambah class img agar dapat berubah.SYARATNYA NAMA gambar hasrus SAM DENGAN NAMA FUNCTION PILIHAN COMPUTER (menggunakan operasi konket string)
	setImgComputer.setAttribute('src','img/' +pilihanComputer +'.png')

	// tampilkan hasil menggunakan innerhtml
	const tampil = document.querySelector('.hasil')
	tampil.innerHTML = hasil;
})
})



























