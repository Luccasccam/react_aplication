import React from 'react'
import './App.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos' 
import Card from './components/layout/Card.jsx'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'


export default props =>
<div className="App">
        <Card titulo="#6 Condicional versão 2.0">
            <CondicionalComIf numero={2222220}></CondicionalComIf>
        </Card>
        <Card titulo="#5 Condicional versão 1.0">
            <Condicional numero={2222220}></Condicional>
        </Card>
        <Card titulo="#4 Componente com filhos">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#3 Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Alberto</li>
                    <li>Bruno</li>
                    <li>Ana</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#2 Componente com Parâmetro">
            <ComParametro 
                titulo="Esse é um título qualquer"
                subtitulo="Esse é qualquer subtíitulo"
                />
        </Card>
        <Card titulo="#1 Segundo componente">
            <Primeiro titulo="Esse é o novo título" 
            subtitulo="Esse é o novo Subtítulo"/>
        </Card>
    </div>