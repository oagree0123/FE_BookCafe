import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

const initialState = {
  image_url: '',
  uploading: false,
  preview: null,
}

const uploadImageFB = (image) => {
  return async function(dispatch, getState, {history}) {
    dispatch(uploading(true));

    const _upload = ref(storage, `images/${image.name}`);

    uploadBytes(_upload, image).then((snapshot) => {
      console.log(snapshot);

      getDownloadURL(_upload)
      .then((url) => {
        dispatch(uploadImage(url));
        console.log(url);
      })
    });
  }
}

export default handleActions({
  [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
    draft.image_url = action.payload.image_url;
    draft.uploading = false;
  }),
  [UPLOADING]: (state, action) => produce(state, (draft) => {
    draft.uploading = action.payload.uploading;
  }),
  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.preview = action.payload.preview;
  }),
}, initialState);

const actionCreators = {
  uploadImage,
  uploadImageFB,
  setPreview,
}

export {actionCreators};