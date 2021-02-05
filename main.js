var minecraft2DCanvas=new fabric.Canvas('myCanvas');
var playerCoordObj={x: 10, y: 10};
var blockImgWidthAndHeightNumObj={
    width: 30, 
    height: 30,
    increaseWidthAndHeightBy10: function(){
        this.width=this.width+10;
        this.height=this.height+10;
    },
    decreaseWidthAndHeightBy10: function(){
        this.width=this.width-10;
        this.height=this.height-10;
    }
};

var playerObj=null;
var blockImgObj=null;

function updatePlayer(){
    fabric.Image.fromURL('player.png', function(img){
        playerObj=img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({top: playerCoordObj.y, left: playerCoordObj.x});
        minecraft2DCanvas.add(playerObj);
    });
}

function addNewImgOnMinecraft2DCanvas(imgURLStr){
    fabric.Image.fromURL(imgURLStr, function(img){
        blockImgObj=img;
        blockImgObj.scaleToWidth(blockImgWidthAndHeightNumObj.width);
        blockImgObj.scaleToHeight(blockImgWidthAndHeightNumObj.height);
        blockImgObj.set({top: playerCoordObj.y, left: playerCoordObj.x});
        minecraft2DCanvas.add(blockImgObj);
    });
}

function movePlayer(dirStr){
    if(playerCoordObj.x>0&&dirStr=='left'){
        playerCoordObj.x=playerCoordObj.x-10;
    }else if(playerCoordObj.x<850&&dirStr=='right'){
        playerCoordObj.x=playerCoordObj.x+10;
    }else if(playerCoordObj.y>0&&dirStr=='up'){
        playerCoordObj.y=playerCoordObj.y-10;
    }else if(playerCoordObj.y<460&&dirStr=='down'){
        playerCoordObj.y=playerCoordObj.y+10;
    }
}

addEventListener('keydown', eventVar=>{
    var eventVarKeyStr=eventVar.key;
    console.log(eventVarKeyStr);
    if(eventVarKeyStr=='P'){
        console.log('p+shift');
        blockImgWidthAndHeightNumObj.increaseWidthAndHeightBy10();
        document.querySelector('.current_width').innerHTML=blockImgWidthAndHeightNumObj.width;
        document.querySelector('.current_height').innerHTML=blockImgWidthAndHeightNumObj.height;
    }else if(eventVar.shiftKey&&eventVarKeyStr=='M'){
        console.log('m+shift');
        blockImgWidthAndHeightNumObj.decreaseWidthAndHeightBy10();
        document.querySelector('.current_width').innerHTML=blockImgWidthAndHeightNumObj.width;
        document.querySelector('.current_height').innerHTML=blockImgWidthAndHeightNumObj.height;
    }else if(eventVarKeyStr=='ArrowUp'){
        movePlayer('up');
        console.log('up');
    }else if(eventVarKeyStr=='ArrowDown'){
        movePlayer('down');
        console.log('down');
    }else if(eventVarKeyStr=='ArrowLeft'){
        movePlayer('left');
        console.log('left');
    }else if(eventVarKeyStr=='ArrowRight'){
        movePlayer('right');
        console.log('right');
    }else if(eventVarKeyStr='w'){
        console.log('w');
        addNewImgOnMinecraft2DCanvas('wall.jpg');
    }else if(eventVarKeyStr='g'){
        console.log('g');
        addNewImgOnMinecraft2DCanvas('ground.png');
    }else if(eventVarKeyStr='l'){
        console.log('l');
        addNewImgOnMinecraft2DCanvas('light_green.png');
    }else if(eventVarKeyStr='t'){
        console.log('t');
        addNewImgOnMinecraft2DCanvas('trunk.jpg');
    }else if(eventVarKeyStr='r'){
        console.log('r');
        addNewImgOnMinecraft2DCanvas('roof.jpg');
    }else if(eventVarKeyStr='y'){
        console.log('y');
        addNewImgOnMinecraft2DCanvas('yellow_wall.png');
    }else if(eventVarKeyStr='d'){
        console.log('d');
        addNewImgOnMinecraft2DCanvas('dark_green.png');
    }else if(eventVarKeyStr='u'){
        console.log('u');
        addNewImgOnMinecraft2DCanvas('unique.png');
    }else{
        console.log('c');
        addNewImgOnMinecraft2DCanvas('cloud.jpg');
    }
});