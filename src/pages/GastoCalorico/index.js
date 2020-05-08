import React, { useState } from 'react';
import './style.css';

const GastoCalorico = () => {

    const [calorias, setCalorias] = useState(0);
    const [radio, setRadio] = useState('homem');
    const [idade, setIdade] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    function handleCalories(e) {
        e.preventDefault();

        let parsePeso = parseFloat(peso.replace(',','.'));

        if(radio === 'homem') {

            function calcula() {
                
                return 66 + (13.8 * parsePeso) + (5 * altura) - (6.8 * idade);
                
            }

            setCalorias(calcula().toFixed(2));
            

        } else {

            function calcula() {

                return 655 + (9.6 * parsePeso) + (1.8 * altura) - (4.7 * idade);
            
            }

            setCalorias(calcula().toFixed(2));
            
        }
        setRadio('homem');
        setIdade('');
        setAltura('');
        setPeso('');
        
    }

    return(
        
        <div id="gasto-cal" className="container">
            <h1>Seu Gasto Calórico Diário:</h1>
            <p className="calorias">{calorias} kcal</p>
            <form onSubmit={handleCalories}>
                <h2>Calculadora de gasto calórico</h2>
                <label className="sexo">Sexo:</label>
                <div className="genero">
                    <input id="homem" name="sexo" value="homem" checked={radio === 'homem'}
                    onChange={(e) => setRadio(e.target.value)} type="radio"/>
                    <label for="homem">Homem</label>
                    <input id="mulher" name="sexo" value="mulher" checked={radio === 'mulher'}
                    onChange={(e) => setRadio(e.target.value)} type="radio"/>
                    <label for="mulher">Mulher</label>
                </div>
                <div className="numeros">
                    <label>
                        Idade:
                        <input type="text" name="idade" placeholder="35" required 
                        value={idade} onChange={(e) => setIdade(e.target.value)}
                        />
                    </label>
                    <label>
                        Altura(cm):
                        <input type="text" name="altura" placeholder="175" required 
                        value={altura} onChange={(e) => setAltura(e.target.value)}
                        />
                    </label>
                    <label>
                        Peso:
                        <input type="text" name="peso" placeholder="62,5" required 
                        value={peso} onChange={(e) => setPeso(e.target.value)}
                        />
                    </label>
                </div>
                <button className="submit">Calcular</button>
            </form>
        </div>
    );
}

export default GastoCalorico;