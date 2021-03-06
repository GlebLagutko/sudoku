import React from "react";
import {Store} from 'redux'
import {useDispatch} from 'react-redux'
import store, {saveState} from "../store";
import {BUTTON_INPUT} from "../store/actions/ButtonInput";

export function ButtonClear() {

    const dispatch = useDispatch();

    return (<button type="button" className="btn btn-outline-secondary py-3 btn-fn" onClick={() => {
            dispatch({type: BUTTON_INPUT, value: 0});
        }}>Clear cell
        </button>
    )
}