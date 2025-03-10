$(document).ready(function () {
  // 부드러운 스크롤 효과
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top,
      },
      1000,
      "easeInOutQuart"
    ); // 부드러운 스크롤 효과
  });

  // 스크롤 이벤트 감지
  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    // 각 섹션에 대한 애니메이션 적용
    animateSection("#visual", scrollTop, windowHeight);
    animateSection(".con1", scrollTop, windowHeight);
    animateSection(".con2", scrollTop, windowHeight);
    animateSection(".con3", scrollTop, windowHeight);
    animateSection(".con4", scrollTop, windowHeight);
    animateSection(".con5", scrollTop, windowHeight);
    animateSection(".con6", scrollTop, windowHeight);

    // 섹션별 요소 애니메이션
    animateElements(scrollTop, windowHeight);
  });

  // 섹션 애니메이션 함수
  function animateSection(selector, scrollTop, windowHeight) {
    var $section = $(selector);
    if ($section.length === 0) return;

    var sectionTop = $section.offset().top;

    // 섹션이 화면에 나타날 때
    if (
      scrollTop + windowHeight * 0.8 > sectionTop &&
      scrollTop < sectionTop + $section.height()
    ) {
      $section.addClass("visible");
    }
  }

  // 요소 애니메이션 함수
  function animateElements(scrollTop, windowHeight) {
    // visual 섹션 요소들
    animateElement("#visual h2", scrollTop, windowHeight, 300);
    animateElement("#visual h5", scrollTop, windowHeight, 500);
    animateElement("#visual img", scrollTop, windowHeight, 700);

    // con1 섹션 요소들
    animateElement(".con1 h2", scrollTop, windowHeight, 300);

    // con2 섹션 요소들
    animateElement(".con2 h2", scrollTop, windowHeight, 300);
    animateElement(".con2 .con2P", scrollTop, windowHeight, 500);
    animateElement(".con2 ul li:nth-child(1)", scrollTop, windowHeight, 700);
    animateElement(".con2 ul li:nth-child(2)", scrollTop, windowHeight, 900);
    animateElement(".con2 ul li:nth-child(3)", scrollTop, windowHeight, 1100);

    // con3 섹션 요소들
    animateElement(".con3 h2", scrollTop, windowHeight, 300);
    animateElement(".con3 h5", scrollTop, windowHeight, 500);
    animateElement(".con3 p", scrollTop, windowHeight, 700);
    animateElement(".con3 img", scrollTop, windowHeight, 900);

    // con4 섹션 요소들
    animateElement(".con4 h2", scrollTop, windowHeight, 300);
    animateElement(".con4 h5", scrollTop, windowHeight, 500);
    animateElement(".con4 p", scrollTop, windowHeight, 700);
    animateElement(".con4 img", scrollTop, windowHeight, 900);

    // con5 섹션 요소들
    animateElement(".con5 h2", scrollTop, windowHeight, 300);
    animateElement(".con5 h5", scrollTop, windowHeight, 500);
    animateElement(
      ".con5Category li:nth-child(1)",
      scrollTop,
      windowHeight,
      700
    );
    animateElement(
      ".con5Category li:nth-child(2)",
      scrollTop,
      windowHeight,
      800
    );
    animateElement(
      ".con5Category li:nth-child(3)",
      scrollTop,
      windowHeight,
      900
    );
    animateElement(
      ".con5Category li:nth-child(4)",
      scrollTop,
      windowHeight,
      1000
    );

    // con6 섹션 요소들
    animateElement(".con6 h2", scrollTop, windowHeight, 300);
    animateElement(".con6 p", scrollTop, windowHeight, 500);
    animateElement(".con6 .button", scrollTop, windowHeight, 700);
  }

  // 개별 요소 애니메이션 함수
  function animateElement(selector, scrollTop, windowHeight, delay) {
    var $element = $(selector);
    if ($element.length === 0) return;

    var elementTop = $element.offset().top;

    // 요소가 화면에 나타날 때
    if (
      scrollTop + windowHeight * 0.9 > elementTop &&
      !$element.hasClass("animated")
    ) {
      setTimeout(function () {
        $element.addClass("animated fadeIn");
      }, delay);
    }
  }

  // 페이지 로드 시 첫 번째 섹션은 바로 보이게 설정
  $("#visual").addClass("visible");
  $("#visual h2").addClass("animated fadeIn");
  $("#visual h5").addClass("animated fadeIn");
  $("#visual img").addClass("animated fadeIn");
});
