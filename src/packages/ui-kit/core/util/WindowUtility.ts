import { Viewport } from "./types";

export namespace WindowUtility {
  export function getIsWidthOver(
    viewportWidth: number,
    rect: DOMRect
  ): boolean {
    return rect.x + rect.width >= viewportWidth;
  }

  export function getIsHeightOver(
    viewportHeight: number,
    rect: DOMRect
  ): boolean {
    return rect.y + rect.height >= viewportHeight;
  }

  export function getIsInViewport(viewport: Viewport, rect: DOMRect) {
    return (
      !getIsWidthOver(viewport.width, rect) &&
      !getIsHeightOver(viewport.height, rect)
    );
  }
}
