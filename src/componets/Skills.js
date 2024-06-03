import React from 'react'
import './Skills.css'
import html from './skills/HTML.svg'
import css from './skills/CSS.svg'
import js from './skills/JavaScript.svg'
import react from './skills/React-Dark.svg'
import c from './skills/C.svg'
import mysql from './skills/MySQL-Dark.svg'
import java from './skills/Java-Dark.svg'
import sass from './skills/Sass.svg'
import github from './skills/Github-Dark.svg'
import dotnet from './skills/DotNet.svg'


export default function Skills  () {
    return (
        <div className='skills' id='skills'>
            <h1>My Skills</h1>
            <div className="container">
                <img src={html} alt='html'/>
                <img src={css} alt='css'/>
                <img src={js} alt='js'/>
                <img src={react} alt='react'/>
                <img src={c} alt='c'/>
                <img src={java} alt='java'/>
                <img src={mysql} alt='mysql'/>
                <img src={sass} alt='sass' />
                <img src={github} alt='github' />
                <img src={dotnet} alt='dotnet' />
            </div>
        </div>
    )
}

