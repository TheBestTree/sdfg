var board = [];
var code;
var points = 0;


window.addEventListener('load', async function(){
    initBoard();
    updateBoard();
});

function check(){  //Kollar upp vilka som ligger bervid varandra av samma färg
for(let j=0;j<4;j++){ //först går igenom alla färger  //kollar horozontellt
for(let i=0;i<64;i++){  //sedan går igenom alla platser på spelplanen.
    if (board[i]==j){
    if(board[i+1]==j){
    if(board[i+2]==j){
        board[i]=5; //så länge
        board[i+1]=5; //så länge
        board[i+2]=5; //så länge
        points=points+250;
        if(board[i+3]==j){
            board[i+3]=5; // så länge
            points=points+250*2;
            if(board[i+4]==j){
                board[i+4]=5; //så länge
                points=points+250*3;
                if(board[i+5]==j){
                    board[i+5]=5; //så länge
                    points=points+250*4;
                    if(board[i+6]==j){
                        board[i+6]=5; //så länge
                        points=points+250*5;
                        if(board[i+7]==j){
                            board[i+7]=5; //så länge
                            points=points+250*6;
                            if(board[i+8]==j){
                                board[i+8]=5; //så länge
                                points=points+250*7;
}}}}}}

updateBoard();
// här ska generell kod ligga
}}}}}

for(let j=0;j<4;j++){  //kollar vågrät
for(let i=0;i<64;i++){ 
    if (board[i]==j){
    if(board[i+8]==j){
    if(board[i+8*2]==j){
        board[i]=5; //så länge
        board[i+8]=5; //så länge
        board[i+8*2]=5; //så länge
        points=points+250;
        if(board[i+8*3]==j){
            board[i+8*3]=5; //så länge
            points=points+250*2;
            if(board[i+8*4]==j){
                board[i+8*4]=5; //så länge
                points=points+250*3;
                if(board[i+8*5]==j){
                    board[i+8*5]=5; //så länge
                    points=points+250*4;
                    if(board[i+8*6]==j){
                        board[i+8*6]=5; //så länge
                        points=points+250*5;
                        if(board[i+8*7]==j){
                            board[i+8*7]=5; //så länge
                            points=points+250*6;
                            if(board[i+8*8]==j){
                                board[i+8*8]=5; //så länge
                                points=points+250*7;
}}}}}}

updateBoard();

    // här ska generell kod ligga    
}}}}}}


/*function move_down(){
    for(let i=63;i>=0;i--) {
        if (board[i] == 5) {
            board[i]=board[i-8];
           /* board[i-8]=board[i-8*2];
            board[i-8*2]=board[i-8*3];
            board[i-8*3]=board[i-8*4];
        }
    }
    console.log(board);
    updateBoard();
} */

window.addEventListener('click', function(e){ //click funtionen
    check();
    move_down();
});

function rand(){ //random rumer som repreneterar färgerna/godisarna
    var number=Math.floor(Math.random()*4);
    return number
}

function initBoard() {  //skapar start spelplanen
    for(let i=0;i<64;i++) {
        board[i] = rand();;
    }
    console.log(board);
    updateBoard();
}


function updateBoard() { //skapar spelplanet visuellt
    html = '';
    for(let i=0;i<64;i++) {
        if (board[i] == 5) { //Empty
            html += '<div data-index=' + i + ' class="flexitem"></div>';
        }
        else if (board[i] == 0) { //Player 1
            html += '<div data-index=' + i + ' class="flexitem pink"></div>';
        }
        else if (board[i] == 1) { //Player 2
            html += '<div data-index=' + i + ' class="flexitem blue"></div>';
        }
        else if (board[i] == 2) { //Player 2
            html += '<div data-index=' + i + ' class="flexitem orange"></div>';
        }
        else if (board[i] == 3) { //Player 2
            html += '<div data-index=' + i + ' class="flexitem green"></div>';
        }
        else if (board[i] == 4) { //Player 2
            html += '<div data-index=' + i + ' class="flexitem purple"></div>';
        }
        else if(board[i] == undefined){
            rand();
        }
    }
    board.length=64;
    document.getElementById('gameboard').innerHTML = html;

}