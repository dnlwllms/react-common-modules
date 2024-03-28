import _ from "lodash";
import { v4 } from "uuid";

import {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from "react";

import {
  Coordinate,
  GridItemDOMRect,
  WidgetInfo,
  WidgetRegistInfo,
  WidgetUIProps,
} from "./types";
import WidgetUIStyledComponents from "./styled";

import WidgetUIContext from "./context";
import { reducerInitialState, reducer } from "./reducer";
import { getCoordinateFromPixcel, getWidgetSize, validate } from "./utils";

import Grid from "./Grid";
import WidgetList from "./WidgetList";
import Widgets from "./Widgets";

const { Container, Highlighter } = WidgetUIStyledComponents;

const WidgetUI: FC<WidgetUIProps> = ({ config, data, onDataChange }) => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const [state, dispatch] = useReducer(
    reducer,
    _.merge(reducerInitialState, config, { data })
  );

  useEffect(() => {
    if (state.isReady) {
      onDataChange(state.data);
    }
  }, [onDataChange, state.data, state.isReady]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      dispatch({ type: "init", payload: { container, config } });
    }
  }, [config]);

  const handleGridItemsChange = useCallback(
    (gridItemsDOMRect: GridItemDOMRect[]) => {
      dispatch({ type: "setGridItemsDOMRect", payload: gridItemsDOMRect });
    },
    []
  );

  const handleGridLongPress = () => {
    dispatch({ type: "setEditMode", payload: true });
  };

  const handleGridTouch = () => {
    dispatch({ type: "setEditMode", payload: false });
  };

  const handleNewWidgetSelect = (widget: WidgetInfo) => {
    dispatch({ type: "setSelectedNewWidget", payload: widget });
  };

  const handleNewWidgetMove = (
    pixcelCoordinate: Coordinate["pixelCoordinate"]
  ) => {
    if (state.gridItemsDOMRect && state.selectedNewWidget) {
      const coordinate = getCoordinateFromPixcel(
        pixcelCoordinate,
        state.gridItemsDOMRect
      );

      const size = getWidgetSize(
        state.selectedNewWidget.grid,
        state.gridItemSize,
        state.style?.gap
      );

      const isValid = validate(
        state.grid,
        state.selectedNewWidget.grid,
        state.data,
        coordinate?.gridCoordinate
      );

      dispatch({
        type: "setHighlightInfo",
        payload: coordinate && isValid ? { size, coordinate } : undefined,
      });
    }
  };

  const handleNewWidgetMoveFinish = () => {
    if (state.selectedNewWidget && state.highlightInfo) {
      dispatch({
        type: "addWidget",
        payload: {
          id: v4(),
          componentKey: state.selectedNewWidget.component.key,
          grid: state.selectedNewWidget.grid,
          gridCoordinate: state.highlightInfo.coordinate.gridCoordinate,
        },
      });
    }

    dispatch({ type: "setSelectedNewWidget", payload: undefined });
    dispatch({ type: "setHighlightInfo", payload: undefined });
  };

  const handleWidgetSelect = (widgetRegistInfo: WidgetRegistInfo) => {
    dispatch({ type: "setSelectedWidget", payload: widgetRegistInfo });
  };

  const handleWidgetMove = (
    pixcelCoordinate: Coordinate["pixelCoordinate"]
  ) => {
    if (state.gridItemsDOMRect && state.selectedWidget) {
      const coordinate = getCoordinateFromPixcel(
        pixcelCoordinate,
        state.gridItemsDOMRect
      );

      const size = getWidgetSize(
        state.selectedWidget.grid,
        state.gridItemSize,
        state.style?.gap
      );

      const isValid = validate(
        state.grid,
        state.selectedWidget.grid,
        state.data.filter(({ id }) => id !== state.selectedWidget?.id),
        coordinate?.gridCoordinate
      );

      dispatch({
        type: "setHighlightInfo",
        payload: coordinate && isValid ? { size, coordinate } : undefined,
      });
    }
  };

  const handleWidgetMoveFinish = () => {
    if (state.selectedWidget && state.highlightInfo) {
      dispatch({
        type: "editWidgetGridCoordinate",
        payload: {
          id: state.selectedWidget.id,
          gridCoordinate: state.highlightInfo.coordinate.gridCoordinate,
        },
      });
    }

    dispatch({ type: "setSelectedWidget", payload: undefined });
    dispatch({ type: "setHighlightInfo", payload: undefined });
  };

  const handleWidgetRemove = (widgetRegistInfo: WidgetRegistInfo) => {
    dispatch({ type: "removeWidget", payload: widgetRegistInfo.id });
  };

  return (
    <WidgetUIContext.Provider value={state}>
      <Container ref={containerRef}>
        {!!state.isReady && (
          <Fragment>
            <Grid
              onTouch={handleGridTouch}
              onLongPress={handleGridLongPress}
              onGridItemsChange={handleGridItemsChange}
            />
            {!!containerRef.current && !!state.highlightInfo && (
              <Highlighter
                style={{
                  width: state.highlightInfo.size[0],
                  height: state.highlightInfo.size[1],
                  left: state.highlightInfo.coordinate.pixelCoordinate[0],
                  top: state.highlightInfo.coordinate.pixelCoordinate[1],
                }}
              />
            )}
            <Widgets
              onMoveFinish={handleWidgetMoveFinish}
              onWidgetMove={handleWidgetMove}
              onWidgetSelect={handleWidgetSelect}
              onWidgetRemove={handleWidgetRemove}
            />
            {!!state.isEditMode && (
              <WidgetList
                onMoveFinish={handleNewWidgetMoveFinish}
                onWidgetSelect={handleNewWidgetSelect}
                onWidgetMove={handleNewWidgetMove}
              />
            )}
          </Fragment>
        )}
      </Container>
    </WidgetUIContext.Provider>
  );
};

WidgetUI.displayName = "WidgetUI";

export default WidgetUI;
