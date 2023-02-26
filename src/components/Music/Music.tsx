import React, {useEffect, useState} from 'react';
import Eleonora from '../../assets/sound/Eleonora.mp3'
import {Howl, Howler} from 'howler';


const Music = ({music}) => {

  const [isActive, setActive] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState(false);

  // var music = new Howl({
  //   src: [Eleonora],
  //   // autoplay: true,
  //   loop: true,
  //   volume: 0.5,
  //   html5: true,
  //   onplay: function (id) {
  //     setAudioId(id);
  //     setIsPlaying(true);
  //   },
  //   onpause: function (id) {
  //     setIsPlaying(false);
  //   },
  //   onend: function () {
  //     setIsPlaying(false);
  //   },
  // });

  // useEffect(() => {
  //   console.log("!!>!Music.useEffect")
  //   sound.play();
  //   },[]
  // )

  useEffect(() => {
    console.log("isActive=", isActive)
    if (!isActive) {
      music.play();
      setActive(true)
    }
  },[])


  return (
    <div>
      music
      <div onClick={() => {
        if (!isActive) {
          console.log(`onclick.start`)
          music.play()
          setActive(true)
        }
      }
      }>
        КНПК_СТАРТ
      </div>
      <div onClick={() => {
        if (isActive) {
          console.log(`onclick.stop`)
          music.stop()
          setActive(false)
        }
      }}>
        КНПК_СТОП
      </div>
      <div onClick={() => {
        if (isActive) {
          console.log(`onclick.pause`)
          music.pause()
          setActive(false)
        }
      }}>
        КНПК_ПАУЗА
      </div>
    </div>
  )
}

export default Music;