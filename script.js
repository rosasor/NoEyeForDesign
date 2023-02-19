// Change header color every interval
setInterval(
    function() {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById('header').style.backgroundColor = "#" + randomColor;
    }, 500);


// Change header color every interval
setInterval(
    function() {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById('navbar').style.color = "#" + randomColor;
    }, 500);

// Change background image of body every interval
window.onload = function () {
        function changeImage() {   
            var BackgroundImg=["https://data.whicdn.com/images/350959887/original.jpg",
            "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/ccc5eb9afa843229945291017deb3720.jpeg?x-expires=1676642400&x-signature=HvdGdaLRiVz9soWrKXK%2FItgatFo%3D",
            "https://keepmeme.com/meme/20211205/not-funny-cried.jpg",
            "https://i.pinimg.com/236x/5d/ba/19/5dba190f78333a85a47b1d9a4279c933.jpg",
            "https://i.kym-cdn.com/photos/images/facebook/001/384/545/7b9.jpg",
            "https://forums.tapas.io/uploads/default/original/3X/a/5/a5cdb3f6efea2b5847ea0173a0076a8365f08ee0.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSl0rjQk8Ei1jTpyfxgUBoa534AzYLtX2SNQ&usqp=CAU",
            "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-85.jpg",
            "https://data.whicdn.com/images/348795741/original.jpg",
            "https://i.pinimg.com/474x/45/79/64/45796424e344d20779e2dcfcc597c8be.jpg",
            "https://i.chzbgr.com/full/9713831168/hE68BCE71/cat",
            "https://i.pinimg.com/736x/65/35/c8/6535c88a6b96d4c4f8ac83bc32a24443.jpg",
            "https://i.imgflip.com/4tkuef.png",
            "https://avatars.githubusercontent.com/u/12242877?s=400&v=4",
            "https://media.tenor.com/lASY8qJLPaAAAAAC/angry-black-cat-meme.gif",
            "https://media.tenor.com/1VPfEhD8CpUAAAAC/cat-talking.gif",
            "https://i.kym-cdn.com/photos/images/original/001/800/448/3db.gif"
            ];
            var i = Math.floor((Math.random() * 17));
            document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
        }
        window.setInterval(changeImage, 2000);
    }

