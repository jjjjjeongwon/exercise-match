import { boardSliceAction } from "../reducers/boardReducer";
import userAPI from "../../apis/userAPI";

function setBoardType(type, cate) {
  return async (dispatch) => {
    await userAPI
      .get(
        `/board/search?keyword=abc&city=대구&gu=북구&page=1&amount=12&sort=title`
      )
      .then((response) => {
        // console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

const boardPost = (tmpPostData) => {
  return async (dispatch) => {
    await userAPI
      .post("/api/board/create",tmpPostData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const boardAction = {
  setBoardType,
  boardPost,
};
