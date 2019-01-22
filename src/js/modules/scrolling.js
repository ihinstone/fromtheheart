const scrolling = () => {

    try {
        $(window).scroll(function(event){
            if($(this).scrollTop()>1650){
                $(".pageup").fadeIn();
                } else {
                $(".pageup").fadeOut();
            }
        });
        const elements = document.documentElement,
            body = document.body,
            link = document.querySelector('.pageup');
        function calcScroll() {
            link.addEventListener('click', function(event) {
            let scrollTop = Math.round(body.scrollTop || elements.scrollTop);
            if (this.hash !== '') {
                event.preventDefault();
                let hashElement = document.getElementById(this.hash.substring(1)),
                    hashElementTop = 0;
                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }
                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
            });
        }
        calcScroll();

        let timeInterval = 1, 
            prevScrollTop,
            speed;

        function smoothScroll(from, to, hash) {
            if (to > from) {
                speed = 30;
            } else {
                speed = -30;
            }
        let move = setInterval(function() {
            let scrollTop = Math.round(body.scrollTop || elements.scrollTop);
                if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
                ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
                } else {
                body.scrollTop += speed;
                elements.scrollTop += speed;
                prevScrollTop = scrollTop;
                }
        }, timeInterval);
        }
    } catch(e){}
};
export default scrolling;