// Quelle: https://connected-environments.org/making/ar-playing-cards/ 
// https://github.com/ucl-casa-ce/AFrame_AR_Multimarkers

var markerURLArray = [];
var markerNameArray = [];

AFRAME.registerComponent('markers_start',{
    init:function(){
      console.log('Add markers to the scene');
      var sceneAR = document.querySelector('a-scene');
      
      //lists of the markers
      for(var i=1; i<11; i++)
      {
        var url="./assets/marker/marker"+i+".patt";
        markerURLArray.push(url);
        markerNameArray.push('marker_'+i);      
      }
      for(var k=0; k<18; k++)
      {
        var marker = document.createElement('a-marker');
        marker.setAttribute('type','pattern');
        marker.setAttribute('url',markerURLArray[k]);
        marker.setAttribute('id',markerNameArray[k]);
        marker.setAttribute('registerevents','');
        sceneAR.appendChild(marker);
        //Adding a text to each marker
        var markerText = document.createElement('a-entity');
        
        markerText.setAttribute('id','text');
        markerText.setAttribute('text',{color: 'red', align: 'center', value:markerNameArray[k], width: '5.5'});
        markerText.object3D.position.set(0, 0.7, 0);
        markerText.object3D.rotation.set(-90, 0, 0);
        marker.appendChild(markerText);
      }
    }
  });