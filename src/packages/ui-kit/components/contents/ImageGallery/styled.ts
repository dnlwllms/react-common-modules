import styled from "styled-components";

import { getColor, typography } from "../../../foundations";

const ImageGalleryStyledComponents = {
  Container: styled.div``,

  ImageList: styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: flex;
    gap: 16px;

    overflow-x: auto;
  `,

  ImageListItem: styled.li`
    flex-shrink: 0;

    border-radius: 8px;
    overflow: hidden;

    cursor: pointer;
  `,

  StyledImage: styled.img`
    width: 400px;
    height: 240px;

    object-fit: none;
    object-position: center;
  `,

  PreviewContainer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${getColor("background", "grayDimmedEffectBlack50D")}

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  PreviewHeader: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 160px;

    ${getColor("color", "white")}

    ${typography.body03M}
  `,

  PreviewBody: styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,

  PreviewNavigationArea: styled.div`
    width: 12.5%;

    display: flex;
    justify-content: center;
  `,

  PreviewImageArea: styled.div`
    position: relative;

    width: 75%;
    height: calc(100dvh - 260px);

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  PreviewImage: styled.img`
    flex-shrink: 0;
    max-width: 100%;
    -webkit-user-drag: none;
  `,

  PreviewFooter: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100px;

    ${getColor("color", "white")}
  `,
};

export default ImageGalleryStyledComponents;
