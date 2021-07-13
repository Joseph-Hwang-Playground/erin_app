import { RootState } from "@redux/root-reducer";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput, setBottomTabCurrent, SetBottomTabCurrentInput } from "@slices/editor/editor-generic";
import { setTextContentState, SetTextContentStateInput, setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";
import COLORS from "@src/colors";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type EditTextReduxProps = ConnectedProps<typeof connector>

interface EditTextProps extends EditTextReduxProps {}

const fontSize = 20;

const EditText: React.FC<EditTextProps> = ({
  setTextOnEdit,
  textContent,
  setTextContent,
  setBottomFloatCurrent: SetBottomFloatCurrent,
  setBottomTabCurrent: SetBottomTabCurrent
}) => {

  const [ text, setText ] = useState<string>("");

  const submitTextContent = () => {
    setTextOnEdit(false);
    setTextContent(text);
    SetBottomFloatCurrent("none");
  };
  
  const cancelEditing = () => {
    setTextOnEdit(false);
    SetBottomFloatCurrent("none");
    SetBottomTabCurrent("default");
  };

  useEffect(
    () => {
      if ( text !== textContent ) {
        if ( textContent ) {
          setText(textContent);
        } else {
          setText("");
        }
      }
    },
    [textContent]
  );

  return (
    <View style={styles.root}>
      <View style={styles.textInputWrapper}>
        <TextInput 
          onChangeText={setText}
          value={text}
          placeholder="내용을 입력해 주세요!"
          autoFocus={true}
          style={styles.inputText}
          multiline={true}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity 
            style={styles.button}
            onPress={cancelEditing}
          >
            <View style={styles.textWrapper}>
              <Text style={styles.text}>취소</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity 
            style={styles.button}
            onPress={submitTextContent}
          >
            <View style={styles.textWrapper}>
              <Text style={styles.text}>만들기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  textContent: state.editor.states.textContent,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTextOnEdit: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
  setTextContent: (payload: SetTextContentStateInput) => dispatch(setTextContentState(payload)),
  setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
  setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(EditText);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textInputWrapper: {
    width: "100%",
    backgroundColor: COLORS.DARK.sharp,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.DARK.secondary,
  },
  buttonWrapper: {
    flex: 1,
  },
  textWrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: COLORS.DARK.secondary,
    fontSize,
  },
  button: {
    backgroundColor: COLORS.DARK.highlight,
    borderRadius: 5,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "teal",
    zIndex: 9999,
    marginVertical: 5
  },
  inputText: {
    fontWeight: "bold",
    fontSize,
    color: COLORS.DARK.secondary,
    paddingVertical: 5
  },
  buttonsWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});