import React from 'react';
import './App.css';
import {Sudoku} from "./Sudoku";
import {ButtonGroup} from "./ButtonGroup";
import {Timer} from "./Timer";
import {SelectDifficulty} from "./SelectDifficulty";
import {ShowMistakes} from "./ShowMistakes";
import {ChangeColorButton} from "./ChangeColorButton";
import ReactAudioPlayer from "react-audio-player";
import H5AudioPlayer from "react-h5-audio-player";
import ReactPlayer from "react-player/lazy";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import playing = Simulate.playing;
import {config} from "webpack";
import ReactJkMusicPlayer from "react-jinke-music-player";
import Popup from "reactjs-popup";
import {EndGameModal} from "./EndGameModal";
import Player from "./PLayer";
import TableOfResults from "./TableOfResults";
import {Footer} from "./Footer";

/*alert('Доброго времени суток проверяющий' + '\n' +
    'Вводить цифры можно и с клавиатуры'+'\n'+
    'Доп функциональность приложения заключается в бэкенде и сохранении результатов.' +
    ' К сожалению, так как используется бесплатная версия Apollo Server то результаты хранятся только сутки.'+'\n'+
    'Всего хорошего')*/


function App() {

    function buttonHandler() {

    }

    return (<div className="main-div">
            <div className="App container-fluid">
                <div className="container">

                    <div className="row mt-4 ml-xl-4">
                        <div className="w-50 pl-xl-5">
                            <SelectDifficulty/>
                        </div>
                        <div className="w-25">
                            <ChangeColorButton/>
                            <ShowMistakes/>
                        </div>

                        <div className="w-25">
                            <Timer/>
                        </div>
                    </div>


                    <div className="row mb-4">
                        <div id='sudoku' className="col-12 col-md-8 col-lg-6 col-xl-6 mt-4">
                            <div className="float-right">
                                <Sudoku/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-6 col-xl-3 mt-4">
                            <ButtonGroup buttonHandler={buttonHandler}/>

                            <Player/>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 col-xl-3 mt-4">
                            <TableOfResults/>

                        </div>
                    </div>
                    <EndGameModal/>


                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
