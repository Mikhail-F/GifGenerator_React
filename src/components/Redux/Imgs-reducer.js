import {imgsURL} from "../api/api";

let ALL_IMG = 'ALL_IMG'
let CLEAR_IMGS = 'CLEAR_IMGS'
let SET_FETCHING = 'SET_FETCHING'
let SELECTED_IMG = 'SELECTED_IMG'
let NEW_INP_TEXT = 'NEW_INP_TEXT'
let IS_ERROR = 'IS_ERROR'

let initialState = {
    allImg: [],
    isFetching: false,
    selectedImg: false,
    latynLetters: ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'р', 'P', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', ','],
    group: [],
    delayTags: ['cat', 'dog', 'sparrow', 'bear', 'rabbit', 'house', 'halloween'],
    newInpText: '',
    isErrorSearch: false
}

const ImgsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_IMG: {

            let item = {type: action.word, img: action.img}

            let newWord = state.group.some(el => el === action.word)

            return {
                ...state,
                allImg: [...state.allImg, item],
                group: newWord ? state.group : [...state.group, action.word]
            }
        }
        case CLEAR_IMGS: {
            return {
                ...state,
                allImg: [],
                group: []
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.bool
            }
        }
        case SELECTED_IMG: {
            return {
                ...state,
                selectedImg: action.word
            }
        }
        case NEW_INP_TEXT:{
            return {
                ...state,
                newInpText: action.text
            }
        }
        case IS_ERROR:{
            return {
                ...state,
                isErrorSearch: action.bool
            }
        }
        default:
            return state
    }
}

const newImg = (img, word) => {
    return ({type: ALL_IMG, img, word})
}

export const clearImgs = () => {
    return ({type: CLEAR_IMGS})
}

const setFetching = (bool) => {
    return ({type: SET_FETCHING, bool})
}

export const setSelectedImg = (word) => {
    return ({type: SELECTED_IMG, word})
}

export const setNewInpText = (text) =>{
    return({type: NEW_INP_TEXT, text})
}

export const setIsError = (bool) =>{
    return({type: IS_ERROR, bool})
}

export const getNewImg = (word) => {
    return (disptatch) => {
        disptatch(setFetching(true))
        imgsURL.all(word)
            .then(data => {
                if (data.meta.status === 200) {
                    disptatch(newImg(data.data.images.downsized_large.url, word))
                }
                disptatch(setFetching(false))
            })
            .catch(err => {
                disptatch(setIsError(true))
                disptatch(setFetching(false))
            })
    }
}

export default ImgsReducer