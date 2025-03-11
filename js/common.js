// 디바이스 확인 함수
function isTablet() {
  return window.innerWidth >= 768 && window.innerWidth <= 1023;
}

function isMobile() {
  return window.innerWidth < 768;
}

// 모바일 메뉴 관련 코드
// 메뉴 아이콘 선택
const menuIcon = document.querySelector(".fa-bars");

// 메뉴 아이콘 클릭 이벤트
menuIcon.addEventListener("click", function () {
  // 기존 모바일 메뉴 삭제 (중복 생성 방지)
  const existingMenu = document.querySelector(".mobile-menu");
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  // 새로운 모바일 메뉴 생성
  const mobileMenu = document.createElement("div");
  mobileMenu.className = "mobile-menu";

  // 메뉴 스타일 설정
  Object.assign(mobileMenu.style, {
    position: "fixed",
    top: "-100%", // 처음에는 화면 위로 숨겨둠
    left: "0",
    width: "100%",
    height: "auto",
    minHeight: isTablet() ? "250px" : "200px",
    maxHeight: "90vh",
    backgroundColor: "white",
    zIndex: "1000",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: isTablet() ? "30px 0" : "20px 0",
    boxSizing: "border-box",
    transition: "top 0.5s ease-in-out",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 10px 30px",
    borderRadius: isTablet() ? "0 0 20px 20px" : "0 0 15px 15px",
    overflowY: "auto",
    overflowX: "hidden",
  });

  // 로고 및 전화번호 영역
  const topSection = document.createElement("div");
  Object.assign(topSection.style, {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: isTablet() ? "15px 30px" : "10px 20px",
    position: "relative",
  });

  // 로고
  const logo = document.createElement("a");
  logo.href = "index.html";
  const logoImg = document.createElement("img");
  logoImg.src = "img/logo_color.png";
  logoImg.alt = "로고";
  logoImg.style.height = isTablet() ? "50px" : "40px";
  logo.style.display = "flex";
  logo.style.alignItems = "center";
  logo.appendChild(logoImg);

  // 전화번호
  const phoneNumber = document.createElement("div");
  phoneNumber.textContent = "7777-0000";
  phoneNumber.style.fontSize = isTablet() ? "20px" : "16px";
  phoneNumber.style.fontWeight = "900";
  phoneNumber.style.color = "#006eff";
  phoneNumber.style.position = "absolute";
  phoneNumber.style.top = isTablet() ? "55px" : "20px";
  phoneNumber.style.right = isTablet() ? "15vw" : "25vw";

  topSection.appendChild(logo);
  topSection.appendChild(phoneNumber);

  // 메뉴 리스트 생성
  const menuList = document.createElement("div");
  Object.assign(menuList.style, {
    listStyle: "none",
    padding: "0",
    margin: isTablet() ? "40px 0" : "20px 0",
    width: "100%",
    overflowX: "hidden",
  });

  // 모바일 메뉴 아이템
  const menuItems = [
    { name: "Home", url: "index.html" },
    { name: "About", url: "about.html" },
    { name: "Notice", url: "notice.html" },
    { name: "Customer Service", url: "service.html" },
  ];

  menuItems.forEach((item, index) => {
    const li = document.createElement("div");
    const marginValue = isTablet() ? "20px 0" : "15px 0";
    const fontSize = isTablet() ? "24px" : "20px";
    const paddingLeft = isTablet() ? "40px" : "20px";

    Object.assign(li.style, {
      margin: marginValue,
      fontSize: fontSize,
      fontWeight: "bold",
      color: "#333",
      paddingLeft: paddingLeft,
      opacity: "0",
      transform: "translateY(-20px)",
      transition: `opacity 0.5s ease-in-out ${
        index * 0.1 + 0.3
      }s, transform 0.5s ease-in-out ${index * 0.1 + 0.3}s`,
    });

    const link = document.createElement("a");
    Object.assign(link.style, {
      textDecoration: "none",
      color: "#333",
      display: "block",
      transition: "color 0.2s ease-in-out",
      width: "100%",
      padding: "5px 0",
    });

    link.textContent = item.name;
    link.href = item.url;

    // 호버 효과
    link.addEventListener("mouseover", () => {
      link.style.color = "#006eff";
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = "#333";
    });

    // 클릭 시 메뉴 닫기
    link.addEventListener("click", function () {
      mobileMenu.style.top = "-100%";
      setTimeout(() => mobileMenu.remove(), 500);
    });

    li.appendChild(link);
    menuList.appendChild(li);
  });

  // 닫기 버튼
  const closeButton = document.createElement("div");
  closeButton.innerHTML = '<i class="fa-solid fa-times"></i>';
  Object.assign(closeButton.style, {
    position: "absolute",
    top: isTablet() ? "30px" : "20px",
    right: isTablet() ? "30px" : "20px",
    fontSize: isTablet() ? "36px" : "30px",
    color: "#333",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
    zIndex: "1001",
  });

  closeButton.addEventListener("mouseover", () => {
    closeButton.style.transform = "rotate(180deg)";
    closeButton.style.color = "#006eff";
  });
  closeButton.addEventListener("mouseleave", () => {
    closeButton.style.transform = "rotate(0deg)";
    closeButton.style.color = "#333";
  });

  closeButton.addEventListener("click", function () {
    mobileMenu.style.top = "-100%";
    setTimeout(() => mobileMenu.remove(), 500);
  });

  // 요소 추가
  mobileMenu.appendChild(topSection);
  mobileMenu.appendChild(menuList);
  mobileMenu.appendChild(closeButton);
  document.body.appendChild(mobileMenu);

  // 애니메이션 효과 적용 (메뉴 슬며시 내려옴)
  setTimeout(() => {
    mobileMenu.style.top = "0";
    menuList.querySelectorAll("div").forEach((li) => {
      li.style.opacity = "1";
      li.style.transform = "translateY(0)";
    });
  }, 10);
});

// 화면 크기 변경 감지
$(window).on("resize", function () {
  // 태블릿 사이즈로 변경되면 모바일 메뉴 제거
  if (isTablet()) {
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu) {
      mobileMenu.remove();
    }
  }
});
