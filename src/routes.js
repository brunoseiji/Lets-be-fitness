import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import GastoCalorico from './pages/GastoCalorico';
import PerderPeso from './pages/PerderPeso';
import GanharPeso from './pages/GanharPeso';
import ConsumoAgua from './pages/ConsumoAgua';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gasto-calorico" exact component={GastoCalorico} />
            <Route path="/perder-peso" exact component={PerderPeso} />
            <Route path="/ganhar-peso" exact component={GanharPeso} />
            <Route path="/consumo-de-agua" exact component={ConsumoAgua} />
        </Switch>
    )
}

export default Routes;