

function getNow() {
  
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	// var hour = now.getHours();
	// var min = now.getMinutes();
	// var sec = now.getSeconds();
  

	//出力用
  	var s = year + "/" + mon + "/" + day + "" ; 
  	// var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒"; 
    return this.document.getElementById('view_time').innerHTML = s;
  

}

// function getNow() {
//     document.getElementById('view_time').innerText ='Hello!!';
//   }