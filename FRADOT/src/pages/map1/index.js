import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { Container, MenuBtn, SideBar, CloseBtn, Category, CateTitle, Infra, Map } from "../../styles/map1.styles";
const map = () => {
    const sideBarOpen = () => {};

    const infraClick = () => {};

    useEffect(() => {
        // DOM을 이용하여 script 태그를 만들어주자.
        const mapScript = document.createElement("script");
        // script.async = true 라면,
        // 해당 스크립트가 다른 페이지와는 비동기적으로 동작함을 의미한다.
        mapScript.async = true;
        // script.src에 map을 불러오는 api를 넣어주자.
        // 여기에서 우리가 기존에 발급 받았던 apiKey를 넣어주면 된다.
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${"47e0c1a518749974da4153f21d3863c8"}&autoload=false`;

        //이제 우리가 만든 script를 document에 붙여주자.
        document.head.appendChild(mapScript);

        // script가 완전히 load 된 이후, 실행될 함수
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById("map");
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                };
                new window.kakao.maps.Map(mapContainer, mapOption);
            });
        };

        // sciprt가 완전히 load 된 이후, 지도를 띄우는 코드를 실행시킨다.
        mapScript.addEventListener("load", onLoadKakaoMap);
    }, []);
    return (
        <>
            <Container>
                <MenuBtn onClick={sideBarOpen}>
                    <GiHamburgerMenu />
                </MenuBtn>
                <SideBar>
                    <CloseBtn>
                        <IoMdCloseCircle />
                    </CloseBtn>
                    <Category>
                        <CateTitle>문화시설</CateTitle>
                        <Infra onClick={infraClick}>도서관</Infra>
                        <Infra>영화관</Infra>
                    </Category>
                    <Category>
                        <CateTitle>의료시설</CateTitle>
                        <Infra onClick={infraClick}>응급실</Infra>
                        <Infra>보건소</Infra>
                    </Category>
                </SideBar>
                <div>
                    <Map id="map"></Map>
                </div>
            </Container>
        </>
    );
};

export default map;
