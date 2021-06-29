import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

export interface EditorGenericState {
    bottomTabCurrent: Erin.Editor.BottomTabMenuType,
    topFloatCurrent: Erin.Editor.TopFloatMenuType,
    bottomFloatCurrent: Erin.Editor.BottomFloatMenuType,
    settings: Erin.Editor.Settings,
}

const initialState: EditorGenericState = {
  bottomTabCurrent: "default",
  topFloatCurrent: "default",
  bottomFloatCurrent: "none",
  settings: {
    iconSize: 1,
    iconGap: 1
  },
};

export type ConfigureIconLayoutInput = Erin.Editor.Settings;

const configureIconLayoutReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<ConfigureIconLayoutInput>
> = (state, { payload: settings }) => {
  state.settings = settings;
};

export type SetBottomTabCurrentInput = Erin.Editor.BottomTabMenuType

const setBottomTabCurrentReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetBottomTabCurrentInput>
> = (state, { payload: bottomTabCurrent }) => {
  state.bottomTabCurrent = bottomTabCurrent;
};

export type SetTopFloatCurrentInput = Erin.Editor.TopFloatMenuType

const setTopFloatCurrentReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetTopFloatCurrentInput>
> = (state, { payload: topFloatCurrent }) => {
  state.topFloatCurrent = topFloatCurrent;
};

export type SetBottomFloatCurrentInput = Erin.Editor.BottomFloatMenuType

const setBottomFloatCurrentReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetBottomFloatCurrentInput>
> = (state, { payload: bottomFloatCurrent }) => {
  state.bottomFloatCurrent = bottomFloatCurrent;
};


export const {
  reducer,
  actions: {
    configureIconLayout,
    setBottomTabCurrent,
    setTopFloatCurrent,
    setBottomFloatCurrent
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    configureIconLayout: configureIconLayoutReducer,
    setBottomTabCurrent: setBottomTabCurrentReducer,
    setTopFloatCurrent: setTopFloatCurrentReducer,
    setBottomFloatCurrent: setBottomFloatCurrentReducer
  }
});