document.addEventListener("DOMContentLoaded", () => {

    //이미지 3개 변수 설정

    const images = document.querySelectorAll("#index main img") //NodeList;

    let z = images.length -1 ; // 이미지 3개 [0,1,2] [2]가 보이는 상황.


    const fade = () => {

        images.forEach((i, j) => {

            i.style.transition = "opacity 1s";

            if ( j != 0){
                i.style.opacity = 0;
            };
            
        });

        if ( z > 0) {

            images[z].style.opacity = 1;
            z--;
        }

        else {
            images.forEach( i => {

                i.style.opacity = 0;
                images[0].style.opacity = 1;
                z=2;

            });
        };     
    };

    setInterval(fade , 2500);


    function showAlert() {

        alert('작업중입니다.\n031-234-5678로 연락주시면 친절하게 안내하겠습니다.');

    }

});////////////////////////////////////// 끝