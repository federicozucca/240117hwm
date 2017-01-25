var albums;

var makeRequest = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
};

var initialiseSelect = function(){
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
  makeRequest(url, response);
}

var response = function(){
  if (this.status != 200) return;
  var jsonString = this.responseText;
  albums = JSON.parse(jsonString).albums.items;
  result(albums)
}

var result = function(albums){
  var findAlbums = document.querySelector('#albums');
  var ul = document.createElement('ul');
  for (album of albums){
    var li = document.createElement('li');
    li.innerText = ("Album: " + album.name);
    ul.appendChild(li);
  }
  findAlbums.appendChild(ul);

}



var app = function(){
  initialiseSelect();

}

window.onload = app;