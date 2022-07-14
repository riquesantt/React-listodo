import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (taskName: string) => void 
}

export const AddArea = ({ onEnter }: Props) => {

    //keyBoardEvent monitora qual tecla foi pressionada
    //handleKeyUp recebe keyBoardEvent como um evento e:
    const handleKeyUp = (e: KeyboardEvent) => {
        //se a tecla pressionada for igual a enter e o valor inserido for diferente de nullo então:
        if(e.code === 'Enter' && inputTxt !== ''){

        //comentário do que será feito
            onEnter( inputTxt );
            setInputTxt('');
        }
}

    const [inputTxt, setInputTxt] = useState (''); 
    return(
        <C.Container>
        <input 
            type="text" 
            placeholder='Adicione aqui sua tarefa :)'
            value={inputTxt}
            onChange = { e=> setInputTxt(e.target.value) }
            onKeyUp = {handleKeyUp} //onkeyup é uma função que ao soltar uma tecla o informação desejada envia a informação
                                    //a informação que seria enviada será HandleKeyUP    
        />
        </C.Container>
);
    }