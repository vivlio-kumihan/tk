import { useRef } from 'react';
import styled from "styled-components";

const StyledAnchor = styled.a`
  display: block;
  width: 200px;
  margin: 30px auto 0;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 900;
  color: #fff;
  background-color: orange;
  border: unset;
  border-radius: 5px;
  cursor: pointer;
`

const DownLoad = () => {
  // useRefを使用して要素を参照
  const linkRef = useRef(null);

  const downLoadImg = () => {
    const url = "060503_C3040Z_P1010031.jpg";
    const fileName = "download.img";

    // linkRef.currentを使用して要素にアクセス
    if (linkRef.current) {
      linkRef.current.href = url;
      linkRef.current.download = fileName;
    }
  }

  return (
    <>
      <h2>Download</h2>
      {/* ref属性を使って要素を参照 */}
      <StyledAnchor onClick={downLoadImg} ref={linkRef} className="btn">画像ダウンロード</StyledAnchor>
    </>
  );
};

export default DownLoad;




// const DownLoad = () => {
//   const downLoadImg = () => {
//     const url = "060503_C3040Z_P1010031.jpg";
//     const fileName = "download.img";
//     let link = document.getElementById("donwload");
//     link.href = url;
//     link.donwload = fileName;
//   }
//   return (
//     <>
//       <h2>Donw load</h2>
//       <a onClick={downLoadImg} id="download" className="Btn">画像ダウンロード</a>
//     </>
//   );
// };

// export default DownLoad