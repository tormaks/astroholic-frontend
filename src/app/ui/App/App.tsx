import React, { Suspense } from 'react';

import '../../styles/index.scss';

import natalchart from './assets/natalchart.jpg';
import shrek from './assets/shrek.png';
import classes from './App.module.scss';

export const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classes.component}>
        <img src={natalchart} />
        <img src={shrek} />
        Мы нищие
      </div>
    </Suspense>
  </div>
);
