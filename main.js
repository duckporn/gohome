function gohome(){
	var url = 'http://dp1a.xyz/';
	var urlHrefEles = document.getElementsByClassName('guide_url_href');
	var urlInnerEles = document.getElementsByClassName('guide_url_inner');

	for(i=0;i<urlHrefEles.length;i++){
		urlHrefEles[i].setAttribute('href', url);
	}
	for(i=0;i<urlInnerEles.length;i++){
		urlInnerEles[i].innerHTML = url;
	}
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		document.querySelector("#download > a:nth-child(1)").innerText="请收藏本页面";
	}
}
gohome();
