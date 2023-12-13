document.addEventListener("DOMContentLoaded", function () {
    const worldCupWinners = [
        { 
            year: "1930", 
            champion: { country: "우루과이", flag: "1930.webp" }, 
            podium: [
                { country: { name: "우루과이", flag: "uruguay_flag.png" } },
                { country: { name: "아르헨티나", flag: "argentina_flag.png" } },
                { country: { name: "유고슬라비아", flag: "yugoslavia_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1934", 
            champion: { country: "이탈리아", flag: "1934.webp" }, 
            podium: [
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "체코슬로바키아", flag: "czechoslovakia_flag.png" } },
                { country: { name: "독일", flag: "germany_flag.png" } },
                { country: { name: "오스트리아", flag: "austria_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1938", 
            champion: { country: "이탈리아", flag: "1938.webp" }, 
            podium: [
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "헝가리", flag: "hungary_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "스웨덴", flag: "sweden_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1950", 
            champion: { country: "우루과이", flag: "1950.webp" }, 
            podium: [
                { country: { name: "우루과이", flag: "uruguay_flag.png" } },
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "스웨덴", flag: "sweden_flag.png" } },
                { country: { name: "스페인", flag: "spain_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1954", 
            champion: { country: "서독", flag: "1954.webp" }, 
            podium: [
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "헝가리", flag: "hungary_flag.png" } },
                { country: { name: "오스트리아", flag: "austria_flag.png" } },
                { country: { name: "우루과이", flag: "uruguay_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1958", 
            champion: { country: "브라질", flag: "1958.webp" }, 
            podium: [
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "프랑스", flag: "france_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "유고슬라비아", flag: "yugoslavia_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1962", 
            champion: { country: "브라질", flag: "1962.webp" }, 
            podium: [
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "체코슬로바키아", flag: "czechoslovakia_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "유고슬라비아", flag: "yugoslavia_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1966", 
            champion: { country: "잉글랜드", flag: "1966.webp" }, 
            podium: [
                { country: { name: "잉글랜드", flag: "england_flag.jpg" } },
                { country: { name: "포르투갈", flag: "portugal_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "소비에트 연방", flag: "soviet_union_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1970", 
            champion: { country: "브라질", flag: "1970.webp" }, 
            podium: [
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "우루과이", flag: "uruguay_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1974", 
            champion: { country: "서독", flag: "1974.webp" }, 
            podium: [
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "네덜란드", flag: "netherlands_flag.png" } },
                { country: { name: "폴란드", flag: "poland_flag.png" } },
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1978", 
            champion: { country: "아르헨티나", flag: "1978.webp" }, 
            podium: [
                { country: { name: "아르헨티나", flag: "argentina_flag.jpg" } },
                { country: { name: "네덜란드", flag: "netherland_flag.png" } },
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1982", 
            champion: { country: "이탈리아", flag: "1982.webp" }, 
            podium: [
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "폴란드", flag: "poland_flag.png" } },
                { country: { name: "프랑스", flag: "france_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1986", 
            champion: { country: "아르헨티나", flag: "1986.webp" }, 
            podium: [
                { country: { name: "아르헨티나", flag: "argentina_flag.jpg" } },
                { country: { name: "벨기에", flag: "belgium_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "프랑스", flag: "france_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1990", 
            champion: { country: "서독", flag: "1990.webp" }, 
            podium: [
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "잉글랜드", flag: "england_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1994", 
            champion: { country: "브라질", flag: "1994.webp" }, 
            podium: [
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "스웨덴", flag: "sweden_flag.png" } },
                { country: { name: "북아일랜드", flag: "northern_ireland_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "1998", 
            champion: { country: "프랑스", flag: "1998.webp" }, 
            podium: [
                { country: { name: "브라질", flag: "_flag.png" } },
                { country: { name: "크로아티아", flag: "croatia_flag.png" } },
                { country: { name: "네덜란드", flag: "netherlands_flag.png" } },
                { country: { name: "서독", flag: "germany_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "2002", 
            champion: { country: "브라질", flag: "2002.webp" }, 
            podium: [
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "독일", flag: "germany_flag.png" } },
                { country: { name: "터키", flag: "turkey_flag.png" } },
                { country: { name: "한국", flag: "south_korea_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "2006", 
            champion: { country: "이탈리아", flag: "2006.webp" }, 
            podium: [
                { country: { name: "이탈리아", flag: "italy_flag.png" } },
                { country: { name: "프랑스", flag: "germany_flag.png" } },
                { country: { name: "독일", flag: "turkey_flag.png" } },
                { country: { name: "포르투갈", flag: "south_korea_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "2010", 
            champion: { country: "스페인", flag: "2010.webp" }, 
            podium: [
                { country: { name: "스페인", flag: "spain_flag.png" } },
                { country: { name: "네덜란드", flag: "netherland_flag.png" } },
                { country: { name: "독일", flag: "germany_flag.png" } },
                { country: { name: "우루과이", flag: "uruguay_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "2014", 
            champion: { country: "독일", flag: "2014.webp" }, 
            podium: [
                { country: { name: "독일", flag: "germany_flag.png" } },
                { country: { name: "아르헨티나", flag: "argentina_flag.png" } },
                { country: { name: "네덜란드", flag: "netherland_flag.png" } },
                { country: { name: "브라질", flag: "brazil_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
    
        { 
            year: "2018", 
            champion: { country: "프랑스", flag: "2018.webp" }, 
            podium: [
                { country: { name: "프랑스", flag: "france_flag.png" } },
                { country: { name: "크로아티아", flag: "croatia_ag.png" } },
                { country: { name: "벨기에", flag: "belgium_flag.png" } },
                { country: { name: "잉글랜드", flag: "england_flag.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
        { 
            year: "2022", 
            champion: { country: "아르헨티나", flag: "2022.png" }, 
            podium: [
                { country: { name: "아르헨티나", flag: "argentina_flag.jpg" } },
                { country: { name: "프랑스", flag: "france_flag.png" } },
                { country: { name: "크로아티아", flag: "croatia_flag.png" } },
                { country: { name: "모로코", flag: "morocco_flagz.png" } },
                { country: { name: "이탈리아", flag: "italy_flag.png" } }
            ]
        },
    ]; // (이전과 동일)
    const topScorers = [
        "Guillermo Stábile (아르헨티나, 8골)",
        "Leônidas da Silva (브라질, 7골)",
        "Leônidas da Silva (브라질, 7골)",
        "Ademir de Menezes (브라질, 8골)",
        "Sándor Kocsis (헝가리, 11골)",
        "Just Fontaine (프랑스, 13골)",
        "Garrincha (브라질, 4골)",
        "Flórián Albert (헝가리, 4골)",
        "Eusébio (포르투갈, 9골)",
        "Gerd Müller (서독, 10골)",
        "Grzegorz Lato (폴란드, 7골)",
        "Mario Kempes (아르헨티나, 6골)",
        "Paolo Rossi (이탈리아, 6골)",
        "Gary Lineker (잉글랜드, 6골)",
        "Salvatore Schillaci (이탈리아, 6골)",
        "Hristo Stoichkov (불가리아, 6골)",
        "Davor Šuker (크로아티아, 6골)",
        "Ronaldo (브라질, 8골)",
        "Miroslav Klose (독일, 5골)",
        "David Villa (스페인, 5골)",
        "Harry Kane (잉글랜드, 6골)",
        "Kylian Mbappe (프랑스, 8골)"
      ];
      
      
      // 득점왕 정보를 추가하는 코드
      worldCupWinners.forEach((winner, index) => {
        if (winner.podium[4]) {
          winner.podium[4].country.name = topScorers[index];
        }
      });
    const winnersList = document.getElementById("winnersList");

    worldCupWinners.forEach((winner) => {
        const listItem = createWinnerListItem(winner);
        winnersList.appendChild(listItem);
    });
});




function createWinnerListItem(winner) {
    const listItem = document.createElement("li");
    const poster = document.createElement("img");  // 포스터에 사용될 이미지 엘리먼트 생성
    poster.src = `../images/${winner.champion.flag}`;
    poster.alt = `${winner.champion.country} 포스터`;
    poster.className = "world-cup-poster";  // world-cup-poster 클래스 추가
    listItem.appendChild(poster);

    const expandedList = document.createElement("ul");
    expandedList.className = "expanded-list";

    winner.podium.forEach((podiumCountry) => {
        const podiumItem = document.createElement("li");
        podiumItem.textContent = podiumCountry.country.name;
        // expandedList.appendChild(podiumItem);
    });

    listItem.appendChild(expandedList);

    listItem.addEventListener("click", () => {
        showWinnerInfo(winner);
    });

    return listItem;
}

document.addEventListener("DOMContentLoaded", function () {
    const winnersList = document.getElementById("winnersList");
    const postersContainer = document.querySelector(".posters-container");
    

    worldCupWinners.forEach((winner) => {
        const listItem = createWinnerListItem(winner);
        const poster = createPoster(winner, postersContainer);

        winnersList.appendChild(listItem);
        postersContainer.appendChild(poster);
    });

    // 왼쪽 포스터 컨테이너에 마우스를 가져다 댔을 때의 동작 추가
    const leftPanel = document.querySelector(".left-panel");
    leftPanel.addEventListener("mouseenter", () => {
        postersContainer.classList.add("open");
    });

    // 왼쪽 포스터 컨테이너에서 마우스가 벗어났을 때의 동작 추가
    leftPanel.addEventListener("mouseleave", () => {
        postersContainer.classList.remove("open");
    });
    
});

function createPoster(winner, container) {
    const poster = document.createElement("img");
    poster.src = `../images/${winner.champion.flag}`;
    poster.alt = `${winner.champion.country} 포스터`;
    poster.className = "world-cup-poster";

    poster.addEventListener("mouseenter", () => {
        showWinnerInfo(winner, container);
    });

    poster.addEventListener("mouseleave", () => {
        clearWinnerInfo(container);
    });

    // 포스터를 클릭하면 새 창에서 정보를 제공합니다.
    poster.addEventListener("click", () => {
        openNewWindow(winner);
    });

    return poster;
}

// script.js

// script.js
// ...



function openNewWindow(winner) {
    // 차단된 팝업을 피하기 위해 사용자의 동작에 대한 응답으로 팝업을 엽니다.
    document.body.addEventListener("click", () => {
        const newWindow = window.open("", "_blank");
        const infoContainer = document.createElement("div");

        // 정보를 새 창에 추가
    

        // 새 창에 <div> 엘리먼트를 추가한 후 그 안에 정보를 추가합니다.
        newWindow.document.body.appendChild(infoContainer);
    });
}

function addInfoElement(container, title, content) {
    const infoElement = document.createElement("div");
    infoElement.innerHTML = `<strong>${title}:</strong> ${content}`;
    container.appendChild(infoElement);
}

function showWinnerInfo(winner, container) {
    // 이미 존재하는 정보 컨테이너가 있다면 제거
    clearWinnerInfo(container);

    // 새로운 정보를 담을 div 엘리먼트 생성
    const infoContainer = document.createElement("div");
    infoContainer.className = "winner-info-container"; // 클래스 추가

    // 정보를 추가
    addInfoElement(infoContainer, "년도", winner.year);
    addInfoElement(infoContainer, "우승", winner.podium[0].country.name);
    addInfoElement(infoContainer, "준우승", winner.podium[1].country.name);
    addInfoElement(infoContainer, "3위", winner.podium[2].country.name);
    addInfoElement(infoContainer, "4위", winner.podium[3].country.name);
    addInfoElement(infoContainer, "득점왕", winner.podium[4].country.name);

    // 정보를 나타낼 컨테이너에 추가
    if (container) {
        container.appendChild(infoContainer);
    } else {
        document.body.appendChild(infoContainer);
    }
    const selectedPosterContainer = document.getElementById("selectedPoster") || document.createElement("div");
    selectedPosterContainer.id = "selectedPoster";
    selectedPosterContainer.className = "selected-poster-container";

    // 선택한 포스터를 업데이트합니다.
    const selectedPoster = document.createElement("img");
    selectedPoster.src = `../images/${winner.podium[0].country.flag}`; // 우승 국가의 국기로 변경
    selectedPoster.alt = `${winner.podium[0].country.name} 포스터`;

    // 컨테이너 내의 기존 내용을 제거합니다.
    while (selectedPosterContainer.firstChild) {
        selectedPosterContainer.removeChild(selectedPosterContainer.firstChild);
    }

    // 선택한 포스터를 컨테이너에 추가합니다.
    selectedPosterContainer.appendChild(selectedPoster);

    // 선택한 포스터 컨테이너를 지정된 컨테이너 또는 body에 추가합니다.
    if (container) {
        container.appendChild(selectedPosterContainer);
    } else {
        document.body.appendChild(selectedPosterContainer);
    }
}


function clearWinnerInfo(container) {
    // 컨테이너 안의 모든 자식 엘리먼트 제거
    if (container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    } else {
        // body 안의 모든 자식 엘리먼트 제거
        const existingInfoContainers = document.querySelectorAll(".winner-info-container");
        existingInfoContainers.forEach((infoContainer) => {
            infoContainer.parentNode.removeChild(infoContainer);
        });
    }
}

